FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
ENV PORT=5000
EXPOSE 5000
CMD ["npm", "start"]

