FROM node:8.11.4

WORKDIR /app
COPY ./website /app
COPY ./docs /docs

RUN npm install
RUN npm rebuild node-sass

EXPOSE 3000

ENTRYPOINT ["npm", "start"]