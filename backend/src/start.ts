import * as dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import express from "express";
import path from "path"; //path is a native Node package.
import https from "https"; //Me too.
import fs from "fs"; //file system
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config/config";

mongoose.connect(`${config.db_url}/${config.db_name}`);

//import cookieParser from "cookie-parser";
//import { config } from "./config/config"; //In addition to .env files, we could make our own config modules.

/* const pgp = require("pg-promise")();
const connection = {
  host: "localhost",
  port: 5432, //5432 is default.
  database: "iprog2",
  user: "myUser",
  password: "1u85/!Gh",
  allowExitOnIdle: true, // To auto-exit on idle, without having to shut-down the pool.
};
const db = pgp(connection); //Our database instance.

db.any("select * from users where active = $1", [true])
  .then((data: any) => {
    console.log("DATA:", data); // print data;
  })
  .catch((error: any) => {
    console.log("ERROR:", error); // print the error;
  }); */

const app: express.Application = express(); //Our 'app' helps us set up our server.

// process.env now has the keys and values you defined in your .env file. Therefore,
// we probably don't need the || 8080 part on the next line?
const port = process.env.PORT || 8080; //'process' has info about the current process and we can get an environment variables.
const address = process.env.ADDRESS;
console.log(`Backend. ADDRESS: ${address}, PORT: ${port}`);

const router = express.Router();

/* Example of how separation between production and development environment 
   might be achieved. */
if (!(process.env.NODE_ENV === "production")) {
  //Development environment can be configured here.

  //Resolves CORS issues during development.
  app.use(
    cors({
      credentials: true,
      origin: `${address}:${port}`,
    })
  );
}
app.use(router);
//app.use(cookieParser());
app.use(express.json()); //Middleware are functions that will be run prior to getting to our routes.
app.use(express.static(path.join(__dirname, "../../dist"))); //Where to find the statically served content.
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Note that we need to brew install 'mkcert' and generate certificates 
in order for the https to work during developent. */
const options = {
  key: fs.readFileSync("./cert/localhost-key.pem"), //Why not ../cert ?
  cert: fs.readFileSync("./cert/localhost.pem"),
};

app.get("/", (req: express.Request, res: express.Response) => {
  const htmlFile = path.join(__dirname, "../../dist/index.html");
  res
    .status(200)
    // If we're using our server for authorization, we may put out token into
    // the second parameter of cookie(), that is 'Some enctypted cookie value'.
    .cookie(`My Cookie`, "Some enctypted cookie value", {
      //maxAge: 5000
      expires: new Date("2023-08-09"),
      secure: true, //Makes cookie inaccessible through document.cookie.
      httpOnly: true, //Actually https only.
      sameSite: "lax", //Related to CORS, makes sure it's only used in our use case.
    })
    .send(htmlFile);
});

router.get(
  "/api/getsomedata",
  (req: express.Request, res: express.Response) => {
    console.log("I'm in the getsomedata route.");
    setTimeout(() => {
      //Faking a DB call
      res.status(200).send({ someData: "The data." });
    }, 1000);
  }
);

router.get("/api/bars/:id", (req: express.Request, res: express.Response) => {
  var bar = { id: 4, name: "Meta", businessHours: "4 pm - 8 pm" }; //Here we'd like to get this from DB.
  //var barId = req.params.id;
  //By using req.params.id to get the provided id.
  res.status(200).send(bar);
});

router.get("/api/bars", (req: express.Request, res: express.Response) => {
  var bars = {}; //Return all bars from DB.
  res.status(200).send(bars);
});

router.get("/api/drinks/:id", (req: express.Request, res: express.Response) => {
  var drink = { id: 1, name: "White Russian", Type: "alcoholic", Price: 30 }; //Here we'd like to get this from DB.
  //var drinkId = req.params.id;
  //By using req.params.id to get the provided id.
  res.status(200).send(drink);
});

router.get("/api/users/:id", (req: express.Request, res: express.Response) => {
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
