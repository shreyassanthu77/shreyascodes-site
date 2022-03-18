FROM node:16 AS build-env
WORKDIR /app
COPY package.json ./package.json
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production

FROM gcr.io/distroless/nodejs:16
COPY --from=build-env /app /app
ENV NODE_ENV=production
WORKDIR /app
EXPOSE 3000
CMD [ "node_modules/@remix-run/serve/cli.js", "build" ]