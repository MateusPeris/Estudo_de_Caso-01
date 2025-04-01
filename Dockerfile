# Usa a imagem oficial do Nginx
FROM nginx:latest

# Remove o HTML padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do projeto para o diretório correto
COPY index1.html /usr/share/nginx/html/index.html
COPY script1.js /usr/share/nginx/html/script1.js

# Expõe a porta padrão do Nginx
EXPOSE 80