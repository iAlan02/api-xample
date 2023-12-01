# Build stage
FROM node:20 as build

WORKDIR /api-xample

COPY package*.json ./

RUN npm install

COPY . .

RUN npm test

# Production stage
FROM node:20

WORKDIR /api-xample

COPY --from=build /api-xample .

ENV PORT=3000
ENV API_KEY=apiKey9000

EXPOSE ${PORT}:3000

ENTRYPOINT [ "npm", "start" ]