# Set the base image
FROM node:20

# Set the working directory
WORKDIR /api-xample

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

RUN npm test

ENV PORT=3000
ENV API_KEY=apiKey9000

EXPOSE ${PORT}:3000

RUN chmod +x start.sh

# Define the command to run the application
ENTRYPOINT [ "./start.sh" ]