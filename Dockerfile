FROM nginx:alpine

# Xóa config mặc định (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy toàn bộ file web vào nginx
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]