#DockerFile

#Base Image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy source files
COPY . ./

# Install dependencies
RUN yarn install

# Start app
EXPOSE 3000
CMD ["yarn","run", "dev"]