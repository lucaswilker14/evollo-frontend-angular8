FROM node:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --silent

COPY . /app

EXPOSE 4200

# start app
CMD node_modules/.bin/ng serve --host 0.0.0.0

