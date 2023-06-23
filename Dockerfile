FROM node:17.7-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm","start"]


