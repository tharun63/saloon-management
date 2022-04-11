FROM node:12.18.2
MAINTAINER Jagadishwer Bathula
RUN mkdir /app
WORKDIR /app
ADD ./package.json /app/package.json
RUN npm install
ADD . /app
CMD ["bash",  "-c",  "npm run start-dev"]

