- Add dependency

  ```bash
  composer require sentry/sentry-laravel
  ```

- Add to `app/Exceptions/Handler.php`

  ```php
  public function report(Throwable $exception)
  {
      if (app()->bound('sentry') && $this->shouldReport($exception)) {
          app('sentry')->captureException($exception);
      }

      parent::report($exception);
  }
  ```

- Setup sentry

  ```
  php artisan sentry:publish --dsn=<dsn here>
  ```
