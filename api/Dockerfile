FROM node:14.14.0

WORKDIR /usr/src/

# Copy shared libraries
COPY lib ./lib

# Copy the service across
COPY api ./api

# Copy main package.json
COPY package.json .

# Install dependencies
RUN yarn install --production

# Expose ports
EXPOSE 80

# Run servicce
CMD [ "node", "api/index.js" ]