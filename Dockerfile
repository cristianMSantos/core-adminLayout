FROM node:20

LABEL maintainer "Cristian <cristianjobs@outlook.com.br>"

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
