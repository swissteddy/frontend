FROM node:10

# Create app directory
WORKDIR /usr/src/app

# install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

RUN npm install

# IF you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["npm", "start"]