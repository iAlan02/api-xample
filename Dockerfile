FROM node:16

RUN mkdir -p /src/api-xample

WORKDIR /src/api-xample

COPY package.json /src/api-xample/package.json

RUN npm install

COPY . /src/api-xample

RUN touch .env

RUN echo "PORT=3000" >> .env
RUN echo "API_KEY=apiKey9000" >> .env

EXPOSE 3000

RUN npm test

CMD [ "npm", "start" ]