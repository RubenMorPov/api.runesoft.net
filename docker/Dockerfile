FROM node:18-slim
WORKDIR /app
# DEPENDENCY INSTALL
COPY package*.json ./
ENV NODE_ENV=production
RUN npm ci --only=production
# APP INSTALL
COPY . .
USER node
EXPOSE 3000
CMD ["node", "index.js"]