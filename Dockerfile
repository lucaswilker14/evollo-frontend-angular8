FROM node:alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . /app

EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0

