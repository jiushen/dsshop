#!/bin/sh
###### 本地开发/测试环境使用 修改本地代码后会自动重新编译 ########
cd /src
/usr/local/bin/npm install
/usr/local/bin/npm install nuxt
/usr/local/bin/npm rebuild node-sass
chmod 755 /src/node_modules/.bin/*
/usr/local/bin/npm run dev
