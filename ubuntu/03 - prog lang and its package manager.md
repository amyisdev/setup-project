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
  sudo apt install php8.1 php8.1-curl php8.1-gd php8.1-mysql php8.1-sqlite3 php8.1-mbstring php8.1-mcrypt php8.1-zip php8.1-fpm php8.1-xml
  ```

- Install composer ([Official Docs](https://getcomposer.org/download/))

  ```bash
  php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
  php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
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
