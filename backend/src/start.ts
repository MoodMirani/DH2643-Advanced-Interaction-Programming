import express from "express";
import path from "path"; //path is a native Node package.
import https from "https"; //Me too.
import fs from "fs"; //file system

const app: express.Application = express(); //O ur app helps us set up our server.
const port = process.env.PORT || 8080; //'process' has info about the current process and we can get an environment variables.
const router = express.Router();

/* Note that we need to intall 'mkcert' and generate certificates 
in order for the https to work during developent. */
const options = {
  key: fs.readFileSync("./cert/localhost-key.pem"),
  cert: fs.readFileSync("./cert/localhost.pem"),
};

app.use(express.json()); //Middleware are functions that will be run prior to getting to our routes.
app.use(express.static(path.join(__dirname, "../dist"))); //Where to find the statically served content.

app.get("/", (req: express.Request, res: express.Response) => {
  const htmlFile = path.join(__dirname, "../dist/index.html");
  res.status(200).send(htmlFile);
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
//Now try setting up some code on the client to fetch this.

const server = https.createServer(options, app);

//Callback to m
server.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
