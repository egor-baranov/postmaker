/** @type {import('next').NextConfig} */

async function headers() {
  return [
    {
      reactStrictMode: true,
      source: '/',
      headers: [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self' https: ; " +
              "script-src https://pay.yandex.ru ; " +
              "object-src 'none' ; " +
              "frame-src: https://pay.yandex.ru; " +
              "img-src: https://pay.yandex.ru; " +
              "connect-src: https://pay.yandex.ru; " +
              "style-src: 'unsafe-inline'"
        }
      ]
    }
  ]
}

module.exports = headers()