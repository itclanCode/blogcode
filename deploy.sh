#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'docs.itclan.cn' > CNAME

git init
git add -A
git commit -m '部署docs.itclan.cn'

# 如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/itclanCode/itclancode.github.io.git  master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -