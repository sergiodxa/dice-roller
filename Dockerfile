FROM mhart/alpine-node
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn test --coverage && mv ./coverage/lcov-report /public
