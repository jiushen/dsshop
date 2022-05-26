#!/bin/sh
###### 本地开发/测试环境使用 修改本地代码后会自动重新编译 ########
cd /src
#所有依赖已经在git上了，如果进行install会更新不同的版本反而跑不通
#/usr/local/bin/yarn install
chmod 755 /src/node_modules/.bin/*
/usr/local/bin/npm rebuild node-sass
/usr/local/bin/npm run watch
