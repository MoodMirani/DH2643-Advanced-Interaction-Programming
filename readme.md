# DH2643 Project group 12

Write a project description here.

## Installation

These steps should only be done once per person, which should allow for local development using a temporary SSL certificate (the certificate is ignored from the repository), as well as installing NPM packages.

0. Clone the repository in some way.
1. Install [mkcert](https://github.com/FiloSottile/mkcert) for your OS. On macOS you could use `brew install mkcert` from any directory, if you have brew.
2. Make a new directory /backend/cert.
3. In the /backend/cert directory, run `mkcert localhost`.
4. Go to /frontend and run `npm install`.
5. Go to /backend and run `npm install`.

## Running the project with the development server

This runs the frontend with the development server, which allows for hot-reloading and faster iteration, rather than building the main.bundle.js after every change.

0. In /frontend, run `npm run dev`
1. In /backend, run `npm run start:dev`
2. The app should be viewable in the browser at address https://localhost:3000/.

## Building with webpack

This builds the main.bundle.js and puts it in the /dist directory without running the development server. This is what we would do prior to production. Except we would probably have a `build:prod` webpack configuration...

0. In /frontend, run `npm run build:dev`.
   a. Optionally, start the backend in /backend with `npm run start:dev`, which serves index.html and main.bundle.js.
   b. The app should be viewable in the browser at address https://localhost:8080/.
