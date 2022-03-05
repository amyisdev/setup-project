# Database

## Mysql

- Install mysql

  ```bash
  sudo apt install mysql-server
  sudo mysql_secure_installation
  ```

- Add non root super user

  ```bash
  sudo mysql
  ```

  ```sql
  CREATE USER 'amy'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
  GRANT ALL PRIVILEGES ON *.* TO 'amy'@'%';
  FLUSH PRIVILEGES;
  ```
