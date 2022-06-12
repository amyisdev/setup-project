- Install tailwindcss

  ```bash
  npm install -D tailwindcss postcss autoprefixer @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography
  npx tailwindcss init -p
  ```

- Rename tailwind.config.js -> .cjs and replace the content

  ```js
  const defaultTheme = require('tailwindcss/defaultTheme');

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/aspect-ratio'),
    ],
  };
  ```

- Add font to index.html

  ```html
  <head>
    <!-- Other stuff -->
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </head>
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
