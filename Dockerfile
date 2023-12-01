# Build stage
FROM node:14 as build

WORKDIR /api-xample

COPY package*.json ./

RUN npm install

COPY . .

RUN npm test

# Production stage
FROM node:14

WORKDIR /api-xample

COPY --from=build /api-xample .

ENV PORT=3000
ENV API_KEY=apiKey9000

EXPOSE ${PORT}

ENTRYPOINT [ "node", "server.js" ]