FROM node:slim

LABEL Jennifer, JenniferWTam@gmail.com

WORKDIR /app

COPY index.js ./index.js

COPY package.json ./package.json

COPY dal.js ./dal.js

COPY mongo_test.js ./mongo_test.js

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]