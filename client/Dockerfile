FROM node:21-alpine as build

WORKDIR /usr/src/app
COPY . .
RUN npm run build -- --filter='./client'

FROM nginx:stable-alpine as client-prod
COPY --from=build /usr/src/app/client/build /usr/share/nginx/html/
COPY --from=build /usr/src/app/package-lock.json /usr/share/nginx/html/package-lock.json
RUN rm -v /etc/nginx/conf.d/default.conf
EXPOSE 80
WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
