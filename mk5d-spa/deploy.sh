#!/bin/bash
npm run build && \
sudo cp dist/index.html /var/www/mk5d.ru/ && \
sudo cp -r dist/assets/* /var/www/mk5d.ru/assets/ && \
echo "✅ Деплой завершён!"
