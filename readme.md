# DH2643 Project group 12

Node version 18.7.0.

## Project structure

- `/dist` contains the main.bundle.js after building the frontend with `npm run build:dev` in /frontend (uses webpack). /dist is served by the backend when the backend is started with `npm run start:dev` from /backend.
- `/backend/build`contains the javascript output of the typescript files that the backend is made of. The typescript compiler puts javascript into /backend/build when running `npm run build` in /backend.

## Installation

These steps should only be done once per person, which should allow for local development using a temporary SSL certificate (the certificate is ignored from the repository), as well as installing NPM packages.

0. Clone the repository in some way.
1. Install [mkcert](https://github.com/FiloSottile/mkcert) for your OS. On macOS you could use `brew install mkcert` from any directory, if you have brew.
2. Make a new directory /backend/cert.
3. In the /backend/cert directory, run `mkcert localhost`.
4. In order for the team to have the same version of node, you could either install node v18.7.0, or install nvm (node version manager) for your OS. With nvm, you could run `nvm use` from /backend/ or /frontend prior to running the npm commands below for both installing and running things. `nvm use` makes use of the node version listed in .nvmrc. (I'm not sure if this setting survives terminal shutdown.)
5. Go to /frontend and run `npm install`.
6. Go to /backend and run `npm install`.

## Workflows

There are basically three scenarios which are described in the following sections.

### A. Running the project with the development server

This runs the frontend with the development server, which allows for hot-reloading and faster iteration, rather than building the main.bundle.js after every change.

0. In /frontend, run `npm run dev`. This starts a dev server, serving the frontend, right?
1. In /backend, run `npm run start:dev` (I don't get this, why do we need to start the server if we already have started a dev server in the previous step? Is "start:dev" on the backend meant to run in conjunction with "dev" on frontend? If so, that would mean two servers have started? But why? We only need one server.)
2. The app should be viewable in the browser at address https://localhost:3000.

### B. Running the backend with fast recompilation using nodemon

This allows for quick iteration on the backend, serving the "compiled" frontend.

0. In /frontend, `npm run build:dev`.
1. In /backend, `npm run start:dev`.
2. App viewable at https://localhost:8080/.

### C. Making a Docker image of the project and starting a container containing our backend, serving frontend

0. Install Docker Desktop.
1. In /frontend, `npm run build:dev`.
2. In the project directory, run `docker build -t iprogbackend .`.
3. Run `docker run -p 3000:3000 iprogbackend`.
4. App viewable at https://localhost:3000/.
