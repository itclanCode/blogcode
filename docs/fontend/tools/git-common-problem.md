## git-使用速查

### 快速导航

- [clone 远端代码失败](#使用-git-clone-克隆远端代码失败)

### 使用-git-clone-克隆远端代码失败

```
git clone xxx
cloning into 'xxx'..
remote: Coding提示:Authentication failed
remote: 认证失败: 请确认您输入了正确的账号密码
fatal: Authentication failed for 'https://xxx.git'
```

如下错误所示
<img class="medium-zoom lazy" loading="lazy"  src ="../images/tools-article-imgs/git-common-problem/clone-fail.png" alt="克隆代码错误" />
**原因**:这种情况很大原因是你的电脑以前用不同的 git 账号 clone 过代码,每次计算机会做记录 git 账号,在`clone`代码时候导致 git 时候计算机识别不出 git 账号是否匹配,输入正确的账户名和密码即可

**解决办法**:

- 方法-1:window 用户
- 打开电脑的控制面板(window+R-->control 可快速进入)--->进入用户账户-->管理 windows 凭据--->将您克隆的代码地址删掉,重新克隆,或者修改为正确的邮箱地址和用户密码登录即可(若输入用户名仍然报错,则输入注册的邮箱)
  <img class="medium-zoom lazy" loading="lazy"  src ="../images/tools-article-imgs/git-common-problem//open-control.png" alt="克隆代码错误" />
  <img class="medium-zoom lazy" loading="lazy"  src ="../images/tools-article-imgs/git-common-problem/open-control.png" alt="克隆代码错误" />
  <img class="medium-zoom lazy" loading="lazy"  src ="../images/tools-article-imgs/git-common-problem/re-clone.png" alt="克隆代码错误" />

* 方法-2:clone 的代码连接前加上 git 账号和密码
  git clone http://账户名:密码@192.168.0.00/xxxx/xxxx.git
