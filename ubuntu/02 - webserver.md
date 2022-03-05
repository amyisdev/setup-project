# Webserver

## Caddy

- Install caddy ([Official Docs](https://caddyserver.com/docs/install))

  ```bash
  sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo tee /etc/apt/trusted.gpg.d/caddy-stable.asc
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
  sudo apt update
  sudo apt install caddy
  ```

## Nginx

- Install nginx

  ```bash
  sudo add-apt-repository ppa:ondrej/nginx-mainline
  sudo apt install nginx
  ```

- Create nginx config for each site (check nginx/samplesite.conf)

  ```bash
  sudo nano /etc/nginx/sites-available/<domain>.conf
  ```

- Enable the site, check config is valid and reload

  ```bash
  sudo ln -s /etc/nginx/sites-available/<domain>.conf /etc/nginx/sites-enabled/
  sudo nginx -t
  sudo systemctl restart nginx
  ```

# After

- Add 80 & 443 or Nginx Full to firewall

  ```bash
  sudo ufw allow 80
  sudo ufw allow 443
  ```

- Install certbot for lets encrypt and create cert

  ```bash
  sudo apt install certbot python3-certbot-nginx
  sudo certbot --nginx -d <domain>
  ```
