# 部署文件

## 创建分支

- git branch   查看分支

- git checkout -b gh-pages 创建分支

然后可以再次git branch查看一下当前所在分支

再删除原先的文件 用rm -rf *

git add -A

commit 做一下版本

再往里放入文件，git add -A 和commit

### 真正上传为：
` git push -u origin gh-pages `上传并创建分支


#### 切换分支

`git checkout master`

#### 执行webpack命令 ，获得bandle.js

`webpack --config webpack.config.prod.js`
