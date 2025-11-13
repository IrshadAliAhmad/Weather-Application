# Use a small stable nginx image to serve static files
FROM nginx:stable-alpine

# Remove default nginx index (optional but keeps image clean)
RUN rm -rf /usr/share/nginx/html/*

# Copy site files into nginx html folder
# Assume your project has: index.html, style.css, script.js (if used), images/ folder, etc.
COPY . /usr/share/nginx/html/

# Ensure correct permissions (optional on alpine)
RUN chown -R nginx:nginx /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Use default nginx entrypoint/CMD (keeps it simple)
# nginx will run in foreground because of default command in image
