FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Copy all host content as it is
COPY . .

EXPOSE 5173

RUN chmod +x ./docker/dev/startcontainer.sh

CMD ./docker/dev/startcontainer.sh