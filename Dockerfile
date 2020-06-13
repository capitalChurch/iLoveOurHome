FROM node:alpine as build
WORKDIR /app
COPY ./ILoveMyHome/ClientApp .

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html/

EXPOSE 80