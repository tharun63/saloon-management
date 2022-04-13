FROM node:12.18.2
MAINTAINER Jagadishwer Bathula
RUN mkdir /app
RUN mkdir /app/public
RUN mkdir /app/public/temp
WORKDIR /app
ADD ./package.json /app/package.json
ADD ./dist /app/dist
ADD ./docs /app/docs
ADD ./wait-for-it.sh /app/wait-for-it.sh
ADD ./src/config/config_files /app/dist/config/config_files
ENV NODE_ENV=production
RUN npm install
CMD ["bash",  "-c",  "npm run start"]


