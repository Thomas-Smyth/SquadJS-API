FROM node:14.14.0

WORKDIR /usr/src/

# Copy client
COPY client ./client

# Copy shared libraries
COPY lib ./lib

# Copy the service across
COPY web-server ./web-server

# Copy main package.json
COPY package.json .

# Install dependencies
RUN yarn install --production

# Build client
RUN yarn run build

# Expose ports
EXPOSE 80

# Run servicce
CMD [ "node", "api/index.js" ]