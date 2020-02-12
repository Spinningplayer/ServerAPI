FROM node:10

EXPOSE 3001

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]

