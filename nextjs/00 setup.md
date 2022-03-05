- Init next.js

  ```bash
  npx create-next-app@latest --typescript
  ```

- Add prettier (.prettierrc.json, .prettierignore, .eslintrc.json)

  ```bash
  npm i -D eslint-config-prettier prettier
  ```

- Add husky, commitlint & lint-staged

  ```bash
  npm i -D husky lint-staged @commitlint/{config-conventional,cli}
  ```

- Install husky

  ```bash
  npx husky install
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
  npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

  npx husky add .husky/pre-commit "npx lint-staged"
  ```

- Add `.eslintcache` to .gitignore

- Add .editorconfig

- Add to tsconfig.json

  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./*"]
      }
    }
  }
  ```
