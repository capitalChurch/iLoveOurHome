FROM node:12.16.2 as build
WORKDIR /app
COPY ./ILoveMyHome/ClientApp .

RUN npm install
RUN npx ng build --prod --base-href /i-love-our-home/

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html/

EXPOSE 80
