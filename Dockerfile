FROM node

ENV PORT=3000
ENV API_KEY=apiKey9000

WORKDIR api-xample

COPY  . .

RUN npm install

RUN npm test

EXPOSE ${PORT}

CMD [ "npm", "start" ]
