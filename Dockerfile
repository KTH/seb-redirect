# Stage 1. Build the actual image
FROM kthse/kth-nodejs:16.0.0
WORKDIR /usr/src/app
COPY . .
RUN node -v
RUN npm ci --only=production

EXPOSE 3000
CMD ["node", "app.js"]
