## 学习资料
1. 书籍《Python编程从⼊门到实践》，已经下载到百度网盘
 （包含：
    Python.Crash.Course.3rd.Edition.pdf
    python编程从入门到实践.pdf
    代码.zip
    数据下载方法.pdf
    练习答案.zip
    配套PPT.zip
    配套视频二维码.png）
## 安装
1. 下载安装： https://www.python.org/downloads/, 下载PKG安装包， 双击打开安装。 一直继续即可安装完。
2. 检查是否安装成功： 打开终端"Terminal"， 输入python --version 或者python3 --version 查看安装的版本
3. 设置Python环境：
  1. 设置别名（可选）：mac os 可能会同时安装有python2 和 python3，所以可以设置别名区分：（1）打开终端，（2）输入nano ~/.zshrc，（3）保存并退出（按 Control + X，然后按 Y，最后按回车），（4）重新加载配置文件source ~/.zshrc
  2. 安装pip: 默认会和python一起安装，使用pip3 --version查看，若没有安装，使用sudo easy_install pip安装

## 基础知识
1. 字符串的方法：
```
 str = " hello world! "
 print(str.title()) # capitalize first letter. output: ' Hello World! '
 print(str.upper()) # capitalize all. output: ' HELLO WORLD! '
 print(str.lower()) # lower case. output: ' hello world! '
 print(str.lstrip()) # remove leading spaces. output: 'hello world! '
 print(str.rstrip()) # remove trailing spaces. output: ' hello world'
 print(str.strip()) # remove leading and trailing spaces. output: 'hello world'
```
