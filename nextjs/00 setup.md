- Init next.js using create-t3-app

  ```bash
  pnpm dlx create-t3-app
  ```

- Add prettier (.prettierrc.js, .prettierignore, .eslintrc.json, .prettier-plugins.js)

  ```bash
  pnpm add -D eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier-plugin-tailwindcss @trivago/prettier-plugin-sort-imports
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

- Add to tsconfig.json and remove `next-auth.d.ts` from includes

  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    }
  }
  ```
- Move the next-auth.d.ts to src/types/ [or else](https://github.com/nextauthjs/next-auth/issues/4598)
