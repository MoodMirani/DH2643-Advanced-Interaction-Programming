FROM node:18.7.0
LABEL author="Group 12 in KTH course DH2643, October 2022"
# Define working directory for docker.
WORKDIR /usr/src/app

# Copy all our source code into the docker working directory
# This includes our code as a layer in the file system of the container.
COPY . .
COPY dist dist
# Does the above only need to be done when deploying to production
# or is it useful during development? How does this compare to
# using volumes (during development)? Something like this, but 
# preferably mapped specifically to our project folder, that is the 
# top level folder containing frontend, backend and dist.
# VOLUME ["/usr/src/app"]


# Now we want to go into the server/backend directory.
WORKDIR /usr/src/app/backend

# Install npm dependencies (skipping dev dependencies) and pm2
# pm2 is a process manager for node. Where is pm2 installed globally? 
#  Host OS? Inside the container?
RUN npm install --only=production && npm install -g pm2 
# && npm install -g typescript
#RUN npm install
#ENV NODE_ENV=production
# We can define environment variables with ENV. Variables specified in 
# here can be read from the source code (dotenv?), as well as from 
# this Dockerfile!
ENV NODE_PATH=./build
ENV PORT=3000

#Expose port for our server/backend to run on.
EXPOSE $PORT

WORKDIR /usr/src/app/backend
# We often need to precede the RUN command with WORKDIR for context. 
RUN npm run build

# Command to start our server.
CMD ["pm2-runtime", "start", "build/start.js", "-i", "max"]
# What's the difference between CMD and ENTRYPOINT?