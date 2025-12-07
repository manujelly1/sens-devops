# ---------------------------
# 1) Build environment
# ---------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copier package.json et installer les deps
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Lancer les tests
RUN npm test

# ---------------------------
# 2) Production image
# ---------------------------
FROM node:20-alpine

WORKDIR /app

# Copier seulement les fichiers nécessaires
COPY --from=builder /app ./

# Exposer le port
EXPOSE 3000

# Lancer l'app
CMD ["npm", "start"]
