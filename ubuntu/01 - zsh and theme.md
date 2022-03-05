- Install zsh

  ```bash
  sudo apt install zsh
  ```

- Install ohmyzsh

  ```bash
  sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
  ```

- Install powerlevel10k

  ```bash
  git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
  ```

- Then change ZSH_THEME in ~/.zshrc

  ```
  ZSH_THEME="powerlevel10k/powerlevel10k"
  ```
