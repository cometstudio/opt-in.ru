FROM node:lts-alpine as build-stage

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

COPY . .

RUN npm install npm@latest -g
RUN npm install
RUN npm run build

FROM httpd:2.4 as production-stage

WORKDIR /usr/local/apache2

COPY ./docker/prod/.htaccess ./htdocs

# VHosts
COPY ./docker/prod/httpd/extra/httpd-vhosts.conf ./conf/extra/httpd-vhosts.conf

# Apache
COPY ./docker/prod/httpd/httpd.conf ./conf/httpd.conf

COPY --from=build-stage /app/dist ./htdocs

EXPOSE 80