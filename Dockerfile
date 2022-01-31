FROM node:16-alpine

ENV HOME=/usr/app

COPY package.json yarn.lock $HOME/delivery/

WORKDIR $HOME/delivery

RUN yarn && yarn cache clean

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]