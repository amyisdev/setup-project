- Add vitest

  ```bash
  pnpm i -D vitest c8
  ```

- Create vitest.config.ts

  ```ts
  import { defineConfig } from 'vitest/config'

  export default defineConfig({
    test: {
      // ...
    },
  })
  ```

- Update package.json

  ```json
  {
    "scripts": {
      "test": "vitest",
      "coverage": "vitest run --coverage"
    }
  }
  ```
