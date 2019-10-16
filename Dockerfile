FROM node:8.11.4-alpine as BUILD

WORKDIR /app
COPY ./website /app
COPY ./docs /docs

RUN npm install
RUN npm rebuild node-sass

FROM node:8.11.4-alpine

WORKDIR /app

COPY --from=BUILD /app /app
COPY --from=BUILD /docs /docs

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

