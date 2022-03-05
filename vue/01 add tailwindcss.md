- Install tailwindcss

  ```bash
  npm install -D tailwindcss postcss autoprefixer @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography
  npx tailwindcss init -p
  ```

- Replace tailwind.config.js

  ```js
  /* eslint-env node */

  module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/aspect-ratio'),
    ],
  };
  ```

- Add to postcss.config.js

  ```js
  /* eslint-env node */

  // others...
  ```

- Create src/index.css

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Add line to src/main.ts

  ```js
  import './index.css';
  ```
