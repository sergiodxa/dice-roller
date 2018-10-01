FROM mhart/alpine-node:8
WORKDIR /usr/src
COPY package.json now.json ./
RUN yarn install
RUN yarn test --coverage
RUN cp ./coverage /public
