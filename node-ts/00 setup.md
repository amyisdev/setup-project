- Create dir & init project

  ```bash
  mkdir example
  cd example
  pnpm init
  ```

- Add typescript (tsconfig.json)

  ```bash
  pnpm i -D typescript @tsconfig/node20 @types/node
  ```

- Update package.json

  ```json
  {
    "scripts": {
      "build": "tsc",
      "watch": "tsc --watch"
    }
  }
  ```

- Add eslint & prettier (.eslintrc.cjs, .prettierrc.json)

  ```bash
  pnpm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
  ```

- Add husky, commitlint & lint-staged

  ```bash
  pnpm i -D husky lint-staged @commitlint/{config-conventional,cli}
  ```

- Install husky

  ```bash
  pnpm husky install
  ```

- Update package.json

  ```json
  {
    "scripts": {
      "prepare": "husky install"
    }
  }
  ```

- Add commitlint & lint-staged hooks (commitlint.config.cjs, .lintstagedrc.cjs)

  ```bash
  pnpm husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

  pnpm husky add .husky/pre-commit "npx lint-staged"
  ```
