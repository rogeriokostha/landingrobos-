FROM node:18-alpine

WORKDIR /app

# Copiar apenas package.json primeiro
COPY package.json ./

# Instalar dependências (sem usar package-lock.json)
RUN npm install

# Copiar resto do código
COPY . .

# Build da aplicação
RUN npm run build

EXPOSE 3000

# Iniciar aplicação
CMD ["npm", "start"]