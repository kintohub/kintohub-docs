FROM node:8.11.4 as BUILD

WORKDIR /app
COPY ./website /app
COPY ./docs /docs

RUN npm install
RUN npm rebuild node-sass

ENTRYPOINT ["npm", "start"]

