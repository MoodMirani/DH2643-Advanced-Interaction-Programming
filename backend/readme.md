# DH2643 Project group 12

Write a project description here.

## Installation

These steps should only be done once per person, which should allow local development using a temporary SSL certificate (the certificate is ignored from the repository), as well as installing NPM packages.

0. Clone the repository in some way.
1. Install [mkcert](https://github.com/FiloSottile/mkcert) for your OS. On macOS you could use `brew install mkcert` from any directory, if you have brew.
2. Make a new directory /backend/cert.
3. From the /backend/cert directory, run `mkcert localhost`.
4. Go to /frontend and run `npm install`.
5. Go to /backend and run `npm install`.

## Running the project

1. From /frontend, run `npm run dev`
2. From /backend, run `npm run start:dev`
3. The app should be viewable in the browser at address...
