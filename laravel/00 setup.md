- Init laravel

  ```bash
  curl -s "https://laravel.build/laravel-app?with=pgsql,redis,meilisearch,minio,mailhog" | bash
  ```

- Remove package.json then add prettier (.prettierrc.json, .prettierignore)

  ```bash
  rm package.json
  npm i -D prettier @prettier/plugin-php
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

- Add .editorconfig

- Add laravel related dx packages

  ```bash
  composer require barryvdh/laravel-ide-helper nunomaduro/larastan wulfheart/pretty_routes --dev
  ```

- Add config for phpstan (phpstan.neon)

- Add to .gitignore

  ```
  # laravel-ide-helper
  _ide_helper.php
  _ide_helper_models.php
  ```

- Add custom stubs (stubs/)

- Create storage symlink

  ```bash
  ./vendor/bin/sail artisan storage:link
  ```

- Install pest

  ```bash
  composer require pestphp/pest --dev --with-all-dependencies
  composer require pestphp/pest-plugin-laravel --dev
  composer require pestphp/pest-plugin-parallel --dev --with-all-dependencies
  composer require pestphp/pest-plugin-faker spatie/pest-plugin-test-time --dev
  php artisan pest:install
  ```
