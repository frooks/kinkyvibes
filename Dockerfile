# Usar la imagen base de Nginx
FROM nginx:alpine

# Copiar el contenido de la carpeta dist en el directorio de Nginx
COPY ./dist/kinkyvibes/browser /usr/share/nginx/html

# Exponer el puerto 4200
EXPOSE 4200

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
