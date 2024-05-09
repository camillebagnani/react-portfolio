FROM node:21-alpine 

WORKDIR /usr/src/app
COPY . .
RUN npm i 
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

