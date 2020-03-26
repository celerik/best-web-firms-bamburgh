
FROM composer AS builder

FROM php:7.3-apache

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    libpq-dev \
&& rm -rf /var/lib/apt/lists/*

# Install php extensions
RUN docker-php-ext-install \
    pdo \
    pdo_pgsql \
    pgsql

# Prepare workdir
WORKDIR /var/www
COPY . /var/www
RUN chmod -R 777 /var/www/storage

# Install Laravel dependencies
RUN composer install

RUN php artisan key:generate

# Run the Laravel artisan serve
CMD php artisan serve --host=0.0.0.0 --port=8181
