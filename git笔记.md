1. 使用ssh key， 教程： https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
    1. 先生成ssh的公钥和私钥， 命令： ssh-keygen -t ed25519 -C "your_email@example.com"， 一路回车， 直到生成 .../.ssh/id_ed25519 和 .../.ssh/id_ed25519.pub
    2. 把公钥添加到远程你的账号的SSH key 中： 点击头像-> setting -> SSH and GPG keys -> NEW SSH KEY -> 输入名字， 选择Authentication Key， 最后把公钥粘贴进输入框，保存。 SSH key就配好了
    3. 在项目的终端： git remote set-url origin 远程仓库的SSH路径
    4. 在终端： git pull, 回车往下， 即成功啦
