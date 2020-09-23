FROM node:12

# Create app directory
WORKDIR ./

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied

RUN npm install --only=production
# If you are building your code for production
# RUN npm install --only=production


EXPOSE 3000
CMD [ "npm", "start" ]