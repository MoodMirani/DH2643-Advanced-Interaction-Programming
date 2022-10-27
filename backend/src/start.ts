import * as dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import express from "express";
import path from "path"; //path is a native Node package.
import https from "https"; //Me too.
import fs from "fs"; //file system
import cors from "cors";
import mongoose from "mongoose";
import config from "./config/config";
import connectDB from "./db";
import authRouter from "./auth/Route";
import cookieParser from "cookie-parser";
import { userAuth } from "./auth/Auth";
import { User, userSchema, PubVisit } from "./models/User";
//import { PubVisitSchema, PubVisitModel, PubVisit } from "./models/PubVisit";

connectDB();
const app: express.Application = express(); //Our 'app' helps us set up our server.
// process.env now has the keys and values you defined in your .env file. Therefore,
// we probably don't need the || 8080 part on the next line?
const port = config.port; //'process' has info about the current process and we can get an environment variables.
const address = config.address;
console.log(
  `Backend. ADDRESS: ${address}, PORT: ${port}, process.env.NODE_ENV: ${process.env.NODE_ENV}`
);
const router = express.Router();

/* Example of how separation between production and development environment 
   might be achieved. */
if (process.env.NODE_ENV === "development") {
  //Development environment can be configured here.

  //Resolves CORS issues during development.
  app.use(
    cors({
      credentials: true,
      origin: `${address}:3000`,
    })
  );
}
app.use(cookieParser());
express.static.mime.define({ "text/javascript": ["js"] });
app.use(express.static(path.join(__dirname, "../../dist"))); //Where to find the statically served content.
app.use(express.json());
app.use("/api/auth", authRouter); // Handles /api/auth
app.use(router);

//Middleware are functions that will be run prior to getting to our routes.

/*  To use authentication on the main route, we'd do something like */
//app.use(
//  "/",
//  (req: express.Request, res: express.Response, next: express.NextFunction) => {
/* To access and validate tokens sent by the client, we can typically do 
       something like this: */
//       const auth = req.headers.;
//       if(!auth) res.status(403).send(some object with other information)
/* Find the token, validate it with some library, then if it's valid, continue
       with calling next() function in the middleware chain. */
//    next(); //Important to call the next() function in the pipeline when all is ok.
//  }
//);

//body-parser allows us to post JSON to backend, which we can access on req.body.
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use(express.json()); //See if this one is necessary.
/* Note that we need to brew install 'mkcert' and generate certificates 
in order for the https to work during developent. 
*/

const options = {
  key: fs.readFileSync("./cert/localhost-key.pem"), //Why not ../cert ?
  cert: fs.readFileSync("./cert/localhost.pem"),
};

app.get("/profile", userAuth, (req: express.Request, res: express.Response) => {
  res.send("Logged-in user route.");
});

app.put(
  "/api/pub_visits",
  userAuth,
  async (req: express.Request, res: express.Response) => {
    const { user_id, pub, drink, patch } = req.body;
    if (pub.length < 1) {
      return res
        .status(400)
        .send({ message: "Please fill in a pub name longer than zero." });
    }
    //Ok, now we need to find the person with the person_id and insert a new PubVisit
    //into it's pub_visits array.
    const tempPubVisit = { pub: pub, drink: drink, patch: patch };
    User.updateOne(
      { _id: user_id },
      { $push: { pub_visits: tempPubVisit } }
    ).then((something) => {
      res
        .status(201)
        .send({ message: "Pub visit added.", addedPubVisit: tempPubVisit });
    });
    //const query = { _id: user_id };
    //const updateDocument = { $push: { pub_visits: { pub, drink, patch } } };
    //const result = await UserModel.updateOne(query, updateDocument);
    //await UserModel.findByIdAndUpdate(user_id, tempUser);
    //res.status(201).send({ message: "Pub visit added." /*, temp*/ });
  }
);

// app.get("/logout", (req: express.Request, res: express.Response) => {
//   res.cookie("jwt", "", { maxAge: 1 });
//   res.redirect("/");
// });

app.get("/", (req: express.Request, res: express.Response) => {
  const htmlFile = path.join(__dirname, "../../dist/index.html");
  res
    .status(200)
    // If we're using our server for authorization, we may put out token into
    // the second parameter of cookie(), that is 'Some enctypted cookie value'.
    .cookie(`My Cookie`, "Some encrypted cookie value", {
      //maxAge: 5000
      expires: new Date("2023-08-09"),
      secure: true, //Makes cookie inaccessible through document.cookie.
      httpOnly: true, //Actually https only.
      sameSite: "lax", //Related to CORS, makes sure it's only used in our use case.
    })
    .send(htmlFile);
});

router.get("/getsomedata", (req: express.Request, res: express.Response) => {
  console.log("I'm in the getsomedata route.");
  setTimeout(() => {
    //Faking a DB call
    res.status(200).send({ someData: "The data." });
  }, 1000);
});

router.get("/bars/:id", (req: express.Request, res: express.Response) => {
  var bar = { id: 4, name: "Meta", businessHours: "4 pm - 8 pm" }; //Here we'd like to get this from DB.
  //var barId = req.params.id;
  //By using req.params.id to get the provided id.
  res.status(200).send(bar);
});

router.get("/bars", (req: express.Request, res: express.Response) => {
  var bars = {}; //Return all bars from DB.
  res.status(200).send(bars);
});

router.get("/drinks/:id", (req: express.Request, res: express.Response) => {
  var drink = { id: 1, name: "White Russian", Type: "alcoholic", Price: 30 }; //Here we'd like to get this from DB.
  //var drinkId = req.params.id;
  //By using req.params.id to get the provided id.
  res.status(200).send(drink);
});

router.get("/users/:id", (req: express.Request, res: express.Response) => {
  var user = { id: 23, name: "Lars Larsson", email: "a@b.c" }; //Here we'd like to get this from DB.
  //var drinkId = req.params.id;
  //By using req.params.id to get the provided id.
  res.status(200).send(user);
});

//Now try setting up some code on the client to fetch this.
const server = https.createServer(options, app);

//Callback
server.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

//How do we handle errors here? This doesn't work.
// process.on("unhandeledRejection", err = >{
//   console.log(`An error happened: ${err.messagé}`);
//   server.close();
// });
