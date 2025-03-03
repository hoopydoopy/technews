# Use an official Node.js runtime as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if present) for dependencies installation
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose the port the app will be listening on (same as in server.js)
EXPOSE 5000

# Command to run the app
CMD ["node", "server.js"]
