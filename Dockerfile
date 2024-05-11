# Use Nginx base image
FROM nginx:alpine

# Copy built Angular app to Nginx directory
COPY dist/kinkyvibes/browser /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]