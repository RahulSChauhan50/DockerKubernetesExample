# syntax=docker/dockerfile:1

FROM node:16.20.2
WORKDIR /app
COPY . .
RUN npm i --production
CMD ["node", "index.js"]
EXPOSE 8000