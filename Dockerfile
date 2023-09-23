FROM node:16-alpine3.15

RUN mkdir -p /home/app/

WORKDIR /home/app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4173

ENTRYPOINT ["npm", "run"]

CMD ["preview"]
