FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

ENTRYPOINT ["node", "dist/entrypoint.js"]
