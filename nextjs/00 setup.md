- Init next.js using create-t3-app

  ```bash
  pnpm create t3-app@latest
  ```

- Add prettier types & update prettier.config.cjs

  ```bash
  pnpm add -D @types/prettier
  ```

- Add husky, commitlint & lint-staged

  ```bash
  pnpm add -D husky lint-staged @commitlint/{config-conventional,cli}
  ```

- Install husky

  ```bash
  pnpm husky install
  ```

- Add to package.json

  ```json
  {
    "scripts": {
      "prepare": "husky install"
    }
  }
  ```

- Add commitlint & lint-staged hooks (commitlint.config.js, .lintstagedrc.js)

  ```bash
  pnpm husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

  pnpm husky add .husky/pre-commit "npx lint-staged"
  ```

- Add `.eslintcache` to .gitignore

- Add .editorconfig
