FROM node:18-alpine AS base
ARG APP
RUN npm install -g pnpm

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base as build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build $APP
RUN pnpm prune --prod

FROM base as deploy
WORKDIR /app
COPY --from=build /app/dist/apps/$APP ./
COPY --from=build /app/node_modules ./node_modules

CMD ["node", "main.js"]