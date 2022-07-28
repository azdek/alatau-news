FROM node:lts as dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci install

FROM node:lts as builder
ARG api_port=8456
ENV API_PORT=$api_port
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /app
ARG api_port=8456
ENV API_PORT=$api_port
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD [ "npm", "start" ]
