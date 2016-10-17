<h1 style="color:'#0f9';"> 基本Git Command使用</h1>

- ctrl + alt + T   打开命令窗口

`sudo apt-get install git curl  ` //安装git 和 curl        sudo是最高权限

`sudo apt-get install atom  `     //安装atom

直接输入atom  则会直接打开atom

`cd xxxxxxx `   //进入xxxxxx文件夹

`cd ../ `        // 返回上一级



## 推送 步骤  ：

`git status`
`git diff  `          (这俩可选)


- `git add . `       或者  git add -A

- `git commit -m ""`

- `git push`



`git init`           把项目变成仓库文件

`git add -A`         添加内容到下一个版本去

`rm -rf 文件名`       强制删除文件

`git checkout xxxx.xx`  恢复删除文件（之前必须存在于版本历史内）

当创建一个空项目，未勾选readme时，     在本地创建完项目后，做完新版本后。执行：
`git remote add arigin https://github.com/zhouxuanpo/xxxxxxxx.git`

`git push -u origin master`



## 安装node 和npm   

`nvm ls-remote`

#### npm  gulp

`npm install gulp `            通过npm安装gulp

`npm install -g gulp  `          -g是全局安装


git 忽略某个文件并上传其他文件：    只需要在根目录创建一个    .gitignore   并且在里面写需要忽略的文件名。他会自动向下搜索相关文件名 并且忽略。
