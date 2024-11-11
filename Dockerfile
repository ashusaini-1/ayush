FROM node:20
WORKDIR /app
COPY package.json .
RUN npm i -f
COPY . .
EXPOSE 
CMD ["npm","run","start"]