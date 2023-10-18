FROM node:16-alpine as builder

WORKDIR /application

COPY . /application

RUN npm install --legacy-peer-deps

ARG env

RUN npm run build:$env

FROM node:16-alpine

RUN apk add nginx

COPY .build/nginx.conf /etc/nginx/http.d/default.conf
COPY --from=builder /application/dist/finder /application/

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
