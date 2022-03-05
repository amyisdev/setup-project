# Lang

## PHP - Composer

- Update apt repository with ondrej/php

  ```bash
  sudo apt install software-properties-common
  sudo add-apt-repository ppa:ondrej/php
  sudo apt update
  ```

- Install php and recommended modules (change version number at each 'php' if needed)

  ```bash
  sudo apt install php8.0 php8.0-curl php8.0-gd php8.0-mysql php8.0-sqlite3 php8.0-mbstring php8.0-mcrypt php8.0-zip php8.0-fpm php8.0-xml
  ```

- Install composer ([Official Docs](https://getcomposer.org/download/))

  ```bash
  php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
  php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
  php composer-setup.php
  php -r "unlink('composer-setup.php');"
  sudo mv composer.phar /usr/local/bin/composer
  ```

## Node.js - npm

- Install nvm ([Github](https://github.com/nvm-sh/nvm))

  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  exec zsh
  ```

- Install latest version of Node.js

  ```bash
  nvm install node
  ```
