# Use Node image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies first
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Expose app port 
EXPOSE 8080

# Run the app
CMD ["npm", "start"]