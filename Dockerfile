FROM node:14

WORKDIR /app

COPY css ./css
COPY images ./images
COPY product_pages ./product_pages
COPY about-us.html .
COPY collection.html .
COPY contact.html .
COPY dynamic-links.js .
COPY index.html .
COPY package.json .
COPY server.js .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
