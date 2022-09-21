import express from "express";
import path from "path"; //path is a native Node package.
import http from "http"; //Me too.

const app: express.Application = express(); //O ur app helps us set up our server.
const port = process.env.PORT || 8080; //'process' has info about the current process and we can get an environment variables.
const router = express.Router();
app.use(express.json()); //Middleware are functions that will be run prior to getting to our routes.
app.use(express.static(path.join(__dirname, "../dist"))); //Where to find the statically served content. 

app.get("/", (req: express.Request, res: express.Response) => {
  const htmlFile = path.join(__dirname, "../dist/index.html");
  res.status(200).send(htmlFile);
});

const server = http.createServer({}, app);

//Callback to m
server.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
