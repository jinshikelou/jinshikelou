1. 安装jdk: 双击jdk-17_macos-aarch64_bin.dmg 打开一步步往下安装
2. 打开终端terminal，输入：java -version
3. 安装完成后我们需要查看所在的路径，在终端terminal输入命令：/usr/libexec/java_home -V
4. 配置环境： 在终端terminal，输入：ls -a （此命令的作用是显示当前目录下的所有文件及文件夹）
   查看一下是否有.bash_profile文件，此文件用于配置环境的（如果有此文件则跳过下一步）
5. 若没有则需要新建此文件，在终端terminal输入命令：touch .bash_profile 此命令就是创建一个文件
6. 新建了上述文件之后使用命令打开文件 在终端terminal输入命令：open -e .bash_profile 此命令是打开文件，新建的文件打开后是一个空白的
7. 在空白的文件里输入以下的代码：
    JAVA_HOME=这里输入您前面复制的路径
    PATH=$JAVA_HOME/bin:$PATH:.
    CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
    export JAVA_HOME
    export PATH
    export CLASSPATH

   例如： JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
         PATH=$JAVA_HOME/bin:$PATH:.
         CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
         export JAVA_HOME
         export PATH
         export CLASSPATH
   （跳过上一步的，不需要新建文件的小伙伴，打开.bash_profile文件后可能会发现里面并不是空白的，是有了一些代码的。不要慌张，无视那些代码，换行后直接粘贴并保存我们的代码即可。）
8. 使配置生效：重新打开终端terminal输入命令： source .bash_profile（此命令的作用是读取和执行.bash_profile文件，使我们刚才的配置生效）
9. 接着在终端terminal输入命令：echo $JAVA_HOME（此命令的作用是显示刚才配置的信息）
 如图显示即代表成功！

10. terminal 命令执行结果：
  vn52j4j@m-d36mvv54vt ~ % java -version
  java version "17.0.8" 2023-07-18 LTS
  Java(TM) SE Runtime Environment (build 17.0.8+9-LTS-211)
  Java HotSpot(TM) 64-Bit Server VM (build 17.0.8+9-LTS-211, mixed mode, sharing)
  vn52j4j@m-d36mvv54vt ~ % /usr/libexec/java_home -V
  Matching Java Virtual Machines (1):
      17.0.8 (arm64) "Oracle Corporation" - "Java SE 17.0.8" /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
  /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
  vn52j4j@m-d36mvv54vt ~ % ls -a
  .			.lesshst		.zsh_sessions
  ..			.m2			.zshrc
  .CFUserTextEncoding	.npm			.zshrc.save
  .DS_Store		.npm-global		.zshrcy
  .Trash			.npmrc			Applications
  .android		.snipaste		Desktop
  .angular-config.json	.sonarlint		Documents
  .bash_history		.viminfo		Downloads
  .bash_profile		.vpn			Library
  .cache			.vscode			Movies
  .cisco			.walmartnotifier	Music
  .codeium		.xmlresolver.org	Pictures
  .cups			.zprofile		Public
  .gitconfig		.zprofile.pysave
  .idlerc			.zsh_history
  vn52j4j@m-d36mvv54vt ~ % open -e .bash_profile
  vn52j4j@m-d36mvv54vt ~ % source .bash_profile
  vn52j4j@m-d36mvv54vt ~ % echo $JAVA_HOME
  /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
  vn52j4j@m-d36mvv54vt ~ % echo $MAVEN_HOME
  /Users/vn52j4j/Documents/softwares/maven/apache-maven-3.9.6
  vn52j4j@m-d36mvv54vt ~ % 

11. .bash_profile内容
    export MAVEN_HOME=/Users/vn52j4j/Documents/softwares/maven/apache-maven-3.9.6
    PATH=${PATH}:${MAVEN_HOME}/bin
    JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
    PATH=$JAVA_HOME/bin:$PATH:.
    CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
    export JAVA_HOME
    export PATH
    export CLASSPATH

