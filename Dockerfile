FROM node:22.16.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install -g @nestjs/cli
COPY . .
RUN npm run build

FROM node:22.16.0-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env .
RUN npm install --legacy-peer-deps --omit=dev
EXPOSE 3009
CMD ["npm", "run", "start:prod"]