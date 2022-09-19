FROM node:alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 9000
CMD node app.js