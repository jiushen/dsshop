#!/bin/sh
###### 本地开发/测试环境使用 修改本地代码后会自动重新编译 ########
cd /src
/usr/local/bin/yarn install
/usr/local/bin/npm rebuild node-sass
/usr/local/bin/npm run watch
