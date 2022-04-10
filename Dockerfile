FROM node:17

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev-run" ]