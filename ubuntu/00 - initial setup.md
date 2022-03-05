- Create new sudo user

  ```bash
  adduser amy
  usermod -aG sudo amy
  ```

- Enable firewall

  ```bash
  ufw allow OpenSSH
  ufw enable
  ```

- Add ssh public key to new user (~/.ssh/authorized_keys)

- Then switch to new user & generate ssh key

  ```bash
  ssh-keygen -t ed25519 -C "amy.azmim@gmail.com"
  ```
