FROM node:latest

RUN mkdir -p ./var/www/html/personal-backend

WORKDIR ./var/www/html/personal-backend

COPY ./package*.json ./

RUN npm install

CMD npm start

COPY . .

EXPOSE 5000

# FROM node:latest
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 5000
# CMD [ "npm", "start"]