# Build stage
FROM arm64v8/node as build

WORKDIR /api-xample

COPY package*.json ./

RUN npm install

COPY . .

RUN npm test

# Production stage
FROM arm64v8/node

WORKDIR /api-xample

COPY --from=build /api-xample .

ENV PORT=3000
ENV API_KEY=apiKey9000

EXPOSE ${PORT}

RUN chmod +x docker-entrypoint.sh

ENTRYPOINT [ "docker-entrypoint.sh" ]