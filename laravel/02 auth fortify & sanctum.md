- Setup fortify

  ```bash
  composer require laravel/fortify
  php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"
  ./vendor/bin/sail artisan migrate
  ```

- For now, only enable login. Set the key below in config/fortify.php

  ```php
  [
    'views' => false,
    'features' => [
      // Features::registration(),
      // Features::resetPasswords(),
      // Features::emailVerification(),
      // Features::updateProfileInformation(),
      // Features::updatePasswords(),
      // Features::twoFactorAuthentication([
      //   'confirmPassword' => true,
      // ]),
    ],
  ]
  ```

- Setup sanctum

  ```bash
  composer require laravel/sanctum
  php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
  ./vendor/bin/sail artisan migrate
  ```

- For first party SPA, add the middleware below to app/Http/Kernel.php

  ```php
  [
    'api' => [
      \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
      // others
    ]
  ]
  ```

- Add 2 var to .env

  ```
  SESSION_DOMAIN=.<domain>
  SANCTUM_STATEFUL_DOMAINS=<domain>
  ```

- Update config/cors.php

  ```php
  [
      // others
      'supports_credentials' => true,
  ]
  ```
