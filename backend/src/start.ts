import express from "express";
import path from "path"; //path is a native Node package.
import https from "https"; //Me too.
import fs from "fs"; //file system
import cors from "cors";
import cookieParser from "cookie-parser";

const app: express.Application = express(); //Our 'app' helps us set up our server.
const port = process.env.PORT || 3000; //'process' has info about the current process and we can get an environment variables.
const router = express.Router();

/* Example of how separation between production and development environment 
   might be achieved. */
if (!(process.env.NODE_ENV === "production")) {
  //Development environment can be configured here.

  //Resolves CORS issues during development.
  app.use(
    cors({
      credentials: true,
      origin: `https://localhost:3000`,
    })
  );
}

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

app.get("/api/getsomedata", (req: express.Request, res: express.Response) => {
  console.log("I'm in the getsomedata route.");
  setTimeout(() => {
    //Faking a DB call
    res.status(200).send({ someData: "The data." });
  }, 1000);
});

//Now try setting up some code on the client to fetch this.
const server = https.createServer(options, app);

//Callback
server.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
