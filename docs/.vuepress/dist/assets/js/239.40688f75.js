(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{1758:function(s,a,t){"use strict";t.r(a);var e=t(11),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"如何将代码部署到腾讯云网站静态托管"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何将代码部署到腾讯云网站静态托管"}},[s._v("#")]),s._v(" 如何将代码部署到腾讯云网站静态托管")]),s._v(" "),t("h2",{attrs:{id:"快速导航"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),t("TOC"),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("之前将网站代码部署到 coding 上,并成功迁移到腾讯云上存储桶 cos,但依旧发现很麻烦,而且主要是对象存储"),t("code",[s._v("cos")]),s._v("是收费的,每天看账号余额不足,着实难受")]),s._v(" "),t("p",[s._v("看到腾讯云今年推出的静态网站托管,于是跃跃欲试,试过后,果然是强大")]),s._v(" "),t("h2",{attrs:{id:"前提准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前提准备"}},[s._v("#")]),s._v(" 前提准备")]),s._v(" "),t("p",[s._v("⒈ 登录腾讯云平台,"),t("a",{attrs:{href:"https://console.cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("进入控制台"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("⒉ 在顶部菜单栏的"),t("strong",[s._v("云产品")]),s._v("中找到"),t("strong",[s._v("云开发")]),s._v("下的静态网站托管(如下图所示)")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/tencent-cloud-website-host/1607482256991-01-state-websit-host.png",alt:"腾讯云"}})]),s._v(" "),t("h2",{attrs:{id:"创建云开发坏境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建云开发坏境"}},[s._v("#")]),s._v(" 创建云开发坏境")]),s._v(" "),t("p",[s._v("如果使用腾讯云的静态网站托管,需要先创建一个云坏境,它会自动的构建初始化一个坏境")]),s._v(" "),t("p",[s._v("在你创建好后,你只需要把本地打包好的 dist 文件扔到该坏境的根目录下就可以了,相当于只是做了一个上传代码的操作,而背后的部署,容器等处理,静态网站托管自动帮你处理了的")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/tencent-cloud-website-host/1607483176290-02-create-env.png",alt:"腾讯云"}})]),s._v(" "),t("h2",{attrs:{id:"将本地打包的代码放置到根目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将本地打包的代码放置到根目录"}},[s._v("#")]),s._v(" 将本地打包的代码放置到根目录")]),s._v(" "),t("p",[s._v("当你创建好坏境后,并且添加成功自定义域名(需要备案),并且解析成功后,可以配置 ssl 证书,以 https 安全访问")]),s._v(" "),t("p",[s._v("你就可以将本地打包后的代码扔到你创建好的坏境当中去了的(如下所示)")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:"https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/tencent-cloud-website-host/1607483251946-03-push-code.png",alt:"腾讯云"}}),s._v(" "),t("p",[s._v("(你可以手动上传代码文件,也可以通过命令行cli工具方式上传)")])]),s._v(" "),t("h2",{attrs:{id:"使用-cloudbase-cli-工具部署文件到-cloudbase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-cloudbase-cli-工具部署文件到-cloudbase"}},[s._v("#")]),s._v(" 使用 cloudbase cli 工具部署文件到 cloudBase")]),s._v(" "),t("h3",{attrs:{id:"科普一下静态网站托管"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#科普一下静态网站托管"}},[s._v("#")]),s._v(" 科普一下静态网站托管")]),s._v(" "),t("p",[t("code",[s._v("cloudBase")]),s._v("是腾讯云提供的一个新的能力,使用"),t("code",[s._v("cloudBase")]),s._v("静态网站托管可以为自己创建的 web 应用,静态资源提供快速,安全的托管服务")]),s._v(" "),t("p",[s._v("只需要输入一个命令,就可以快速部署静态资源,并且使用"),t("code",[s._v("cdn")]),s._v("(内容分发网络)加快资源的访问速度(这个是要收费的,如果不清楚的,不要随意使用,是有代价的)")]),s._v(" "),t("h3",{attrs:{id:"主要功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要功能"}},[s._v("#")]),s._v(" 主要功能")]),s._v(" "),t("p",[t("strong",[s._v("HTTPS")]),s._v(":cloudBase 静态网站托管内置了"),t("code",[s._v("HTTP")]),s._v("与"),t("code",[s._v("HTTPS")]),s._v(",无需额外配置就可以使用,可以申请免费的 ssl 证书,有效期一年,这个确实挺方便的")]),s._v(" "),t("p",[t("strong",[s._v("自定义域名")]),s._v(":"),t("code",[s._v("cloudBase")]),s._v(" 静态网站支持自定义域名,可以通过自己的私有域名访问静态资源,但前提要准备好备案的域名,否则无法实现自定义域名")]),s._v(" "),t("p",[t("strong",[s._v("快速分发")]),s._v(":静态资源将会被缓存在遍布各地的 cdn 边缘服务器上,无论你的用户身处何处,内容都可以快速加载(这个也是我比较看重的)")]),s._v(" "),t("p",[t("strong",[s._v("命令行部署")]),s._v(": 利用"),t("code",[s._v("cloudBase cli")]),s._v("可以轻松部署文件到"),t("code",[s._v("cloudBase")])]),s._v(" "),t("h3",{attrs:{id:"安装-cloudbase-cli-工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-cloudbase-cli-工具"}},[s._v("#")]),s._v(" 安装 cloudBase cli 工具")]),s._v(" "),t("ol",[t("li",[s._v("安装 Node.js,可以从官网下载,选择版本 LTS,并且版本大于 8.6.0+")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" v"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以查看到安装的node版本")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("使用 npm 安装 cli")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g @cloudbase"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cli\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("或使用 Yarn 安装")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("yarn global add @cloudbase"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cli\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("如果"),t("code",[s._v("npm install -g @cloudbase/cli")]),s._v("失败,可能需要修改"),t("code",[s._v("npm")]),s._v("权限,或者以系统管理员身份运行如下代码")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("sudo npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g @cloudbase"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cli\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("测试 cloudbase-cli 是否安装成功")])]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("cloudbase -v")]),s._v("可以查看"),t("code",[s._v("cli")]),s._v("的版本,若终端有输出,那么就表示成功了的")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cloudbase "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" v"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个 cloudbase 命令可以简写成"),t("code",[s._v("tcb")]),s._v(",是云开发产品的简称(即 Tencent cloud base),可以使用"),t("code",[s._v("tcb -h")]),s._v("查看所有 tcb 的命令")]),s._v(" "),t("h2",{attrs:{id:"确保已成功开通云开发服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#确保已成功开通云开发服务"}},[s._v("#")]),s._v(" 确保已成功开通云开发服务")]),s._v(" "),t("p",[s._v("在开始使用云开发服务之前，需要登录腾讯云"),t("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[s._v("云开发控制台"),t("OutboundLink")],1),s._v("，确保已经开通了云开发服务，并且已经创建了可以使用的环境")]),s._v(" "),t("h3",{attrs:{id:"登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[s._v("#")]),s._v(" 登录")]),s._v(" "),t("p",[s._v("登录腾讯云账号,获取到授权后,"),t("code",[s._v("cloudBase cli")]),s._v("才能操作资源,"),t("code",[s._v("cloudBase cli")]),s._v("提供了两种授权方式")]),s._v(" "),t("p",[s._v("⒈ 腾讯云-云开发控制台")]),s._v(" "),t("p",[s._v("⒉ 云 API 密钥授权")]),s._v(" "),t("h3",{attrs:{id:"腾讯云-云开发控制台授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云-云开发控制台授权"}},[s._v("#")]),s._v(" 腾讯云-云开发控制台授权")]),s._v(" "),t("p",[s._v("在终端中输入下面命令")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("tcb login\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当你输入这行命令后,会自动打开云开发控制台获取授权,并同意授权按钮允许"),t("code",[s._v("cloudBase cli")]),s._v("获取授权")]),s._v(" "),t("h2",{attrs:{id:"腾讯云-云-api-密钥授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云-云-api-密钥授权"}},[s._v("#")]),s._v(" 腾讯云-云 API 密钥授权")]),s._v(" "),t("p",[s._v("首先要腾讯云官网获取"),t("a",{attrs:{href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"}},[s._v("获取云 API 密钥"),t("OutboundLink")],1),s._v(",然后在终端中输入如下命令")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("tcb login "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("key\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("紧接着,输入云 API 密钥的"),t("code",[s._v("SecretId")]),s._v("和"),t("code",[s._v("SecretKey")]),s._v("即可完成登录")]),s._v(" "),t("h3",{attrs:{id:"ci-中的登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ci-中的登录"}},[s._v("#")]),s._v(" ci 中的登录")]),s._v(" "),t("p",[s._v("在 ci(持续集成)构建中,可以使用下面的方式通过 API 密钥直接登录")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("tcb login "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("apikeyId xxx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("apiKey xxx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("至此 cloudbase-cli 坏境已经完成")]),s._v(" "),t("h2",{attrs:{id:"全量部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全量部署"}},[s._v("#")]),s._v(" 全量部署")]),s._v(" "),t("p",[s._v("云开发 cli 提供了直接部署网站文件的命令,在需要部署的文件夹目录下,直接运行"),t("code",[s._v("hosting:deploy")]),s._v("命令即可")]),s._v(" "),t("p",[s._v("将当前目录下所有文件部署到静态网站中，如下所示")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("$ cd dist\n$ cloudbase hosting deploy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("envId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("此为坏境的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("在自己的云坏境中可以查看到"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("当你执行这条命令时,可以部署成功,但会提示这条命令即将被废弃的,只需要按照提示")]),s._v(" "),t("p",[s._v("重新输入指定的命令就可以了的")]),s._v(" "),t("h2",{attrs:{id:"部署文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署文件"}},[s._v("#")]),s._v(" 部署文件")]),s._v(" "),t("p",[s._v("有时候,并不想要全量的部署,只需要上传某单个指定的文件,那么就可以使用下面的命令,当不指定"),t("code",[s._v("cloudPath")]),s._v("时,文件会上传到根目录")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cloudbase hosting deploy "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("localPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("本地路径"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cloudpath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("云坏境目录的路径"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e envId\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如下示例所示")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("# 将当前目录的文件部署到根目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("即将 hosting 目录下的所有文件部署到根目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("如果不指明hosting本地目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("默认时上传当前目录下的所有文件\ncloudbase hosting deploy "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e envId\n\n# 将 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" 目录下的 index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js 文件部署到 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\ncloudbase hosting deploy "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e envId\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("当您使用 vue.history 模式时，需要在静态网站-设置栏中配置错误页面为 App 依赖的页面。\n部署文件单个文件理论最大值为 50TB，文件数量无限制，具体以实际情况为准")])]),s._v(" "),t("h2",{attrs:{id:"查看云开发环境的信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看云开发环境的信息"}},[s._v("#")]),s._v(" 查看云开发环境的信息")]),s._v(" "),t("p",[s._v("使用下面的命令展示静态网站的状态,访问域名等信息")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cloudbase hosting detail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e envId\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[s._v("#")]),s._v(" 删除文件")]),s._v(" "),t("p",[s._v("使用下面的命令可以删除静态网站的存储空间中的文件或文件夹")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cloudbase hosting "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cloudPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("云环境路径"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e envId\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"查看文件列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件列表"}},[s._v("#")]),s._v(" 查看文件列表")]),s._v(" "),t("p",[s._v("使用下面的命令部署展示静态网站存储空间中的文件")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cloudbase hosting list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e envId\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"路径说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径说明"}},[s._v("#")]),s._v(" 路径说明")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("localPath")]),s._v(" 为本地文件或文件夹的路径，为 目录/文件名 的形式，如 "),t("code",[s._v("./index.js")]),s._v("、"),t("code",[s._v("static/css/index.css")]),s._v(" 等")]),s._v(" "),t("li",[t("strong",[s._v("cloudPath")]),s._v(" 为云存储文件或文件夹的相对根目录的路径，为 目录/文件名 的形式，如 "),t("code",[s._v("index.js")]),s._v("、"),t("code",[s._v("static/css/index.js")]),s._v("等")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("Windows 系统中 "),t("code",[s._v("localPath")]),s._v(" 为本地路径形式，是系统可以识别的路径，通常使用 "),t("code",[s._v("\\")]),s._v(" 分隔符。"),t("code",[s._v("cloudPath")]),s._v(" 是云端文件路径，均需要使用 "),t("code",[s._v("/")]),s._v("分隔符")]),s._v(" "),t("p",[s._v("在上传文件时,路径时要格外注意的")])]),s._v(" "),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),t("p",[s._v("⒈ 如果使用 wordpress 创建了一个初始化坏境,它的云数据库 TencentDB 的 CynosDB 是收费的")]),s._v(" "),t("p",[s._v("⒉ 若坏境中没有部署任何应用,可以将"),t("code",[s._v("cynosDB")]),s._v("删除掉,不删除,会一直占用资源,每小时都会扣费,土豪的,随意")]),s._v(" "),t("p",[s._v("⒊ 静态网站托管也是收费的,它是按量进行扣费,如果你想完全使用免费的托管,可以选择使用 github pages,但是访问速度,不一定能够得到保障.")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("总得来说,使用静态网站托管网站还是挺方便,快捷的,这个云开发 "),t("code",[s._v("CloudBase")]),s._v("很厉害,能够部署很多应用")]),s._v(" "),t("p",[s._v("像"),t("code",[s._v("Express应用")]),s._v(","),t("code",[s._v("Vue应用")]),s._v(","),t("code",[s._v("Nuxt SSR应用")]),s._v(","),t("code",[s._v("React应用")]),s._v(","),t("code",[s._v("Koa应用")]),s._v("."),t("code",[s._v("Nodejs云托管")]),s._v("等应用,甚至自己在上面搭建一个坏境,都可以.")]),s._v(" "),t("p",[s._v("确实是厉害,一键部署,无感知,不需要去操心 docker 容器,以及担心坏境的混淆等,省去了运维的操作,弱化后端,运维的能力,让开发者专注自身业务开发,达到快速上线,实现自己想要的能力")]),s._v(" "),t("p",[s._v("静态网站托管本身就是依赖云开发"),t("code",[s._v("cloudBase")]),s._v("的,如今,市面上的技术框架服务,基本上都覆盖了的,不得不承认")]),s._v(" "),t("p",[s._v("腾讯云云开发在这方面的先进")]),s._v(" "),t("h2",{attrs:{id:"相关参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关参考文档"}},[s._v("#")]),s._v(" 相关参考文档")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cloud.tencent.com/document/product/876/40270",target:"_blank",rel:"noopener noreferrer"}},[s._v("静态网站托管"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://cloud.tencent.com/document/product/876/47142",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 cli 静态网站托管"),t("OutboundLink")],1)])]),s._v(" "),t("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),s._v(" "),t("footer-FeedBack")],1)}),[],!1,null,null,null);a.default=r.exports}}]);