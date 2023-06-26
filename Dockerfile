# Use official Node.js image as the base image
FROM node:slim

# set working directory
WORKDIR /app

#copy package.json and package-lock.json to working directory
COPY package*.json ./

# install dependencies
RUN npm install

# copy all files from current directory to working directory in image
COPY . .

# copy .env file to working directory
COPY .env .env

# expose port 5000 which is the port that our app runs on
EXPOSE 4500

# specify command to run on container start
CMD ["node", "index.js"]
