# load image php 8.0.3
FROM php:8.0.3-fpm-buster

# ติดต้ัง Extension bcmatch
RUN docker-php-ext-install pdo_mysql
# RUN docker-php-ext-install bcmatch

# สั่ง update image และ ติดตั้ง git zip และ unzip pacakage
RUN apt-get update
RUN apt-get install -y git zip unzip

# ติดตั้ง NodeJS
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - 
RUN apt-get install -y nodejs

# Copy file composer:latest ไว้ที่ /usr/bin/composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

EXPOSE 9000