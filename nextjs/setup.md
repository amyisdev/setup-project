- Init next.js

  ```bash
  yarn create next-app --typescript
  ```

- Add prettier (.prettierrc.json, .prettierignore, .eslintrc.json)

  ```bash
  yarn add -D eslint-config-prettier prettier
  ```

- Add husky, commitlint & lint-staged

  ```bash
  yarn add -D husky lint-staged @commitlint/{config-conventional,cli}
  ```

- Install husky

  ```bash
  yarn husky install
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
  yarn husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

  yarn husky add .husky/pre-commit "yarn lint-staged"
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

- Add tailwindcss and stuff

  ```bash
  yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography
  ```

- Init tailwindcss

  ```bash
  yarn tailwindcss init -p
  ```

- Copy tailwind.config.js

- Copy globals.css to styles/

- Add clsx

  ```bash
  yarn add clsx
  ```
