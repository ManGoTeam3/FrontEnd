# Use an official Node.js runtime as a parent image
FROM node:18.16-alpine

# Set the working directory to /app
WORKDIR /app/frontend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
RUN yarn install


# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]