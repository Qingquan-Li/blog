> [基于 GitHub Issues 的静态博客：](https://FatliTalk.github.io/blog) http://FatliTalk.com

利用 Github 提供的 API 来实现一个只有一个静态页面的博客，具体思路如下：

1. 作者在 Github Issues 上写文章（写 Issues）
2. 博客页面通过 JS Ajax 请求 Github API 来获取文章内容，进行页面的渲染
3. 通过社会化评论插件实现评论功能

Demo： http://FatliTalk.com

[FatliTalk 李庆权的博客](https://FatliTalk.github.io/blog) 的内容是读取的 [FatliTalk blog 的 Issues](https://github.com/FatliTalk/blog/issues)

## 一、部署方法(方案1)

① Fork 本项目，然后再新建一个用于存放博客内容（即 Issues）的 repo 。 （Fork 的项目是没有 Issues 的，所以得新建个仓库）

② 修改 gh-pages 分支下根目录的 config.js，填写好对应的博客名称，你自己的 GitHub 用户名、对应仓库名、多说 ID ，保存。多说账号在这里申请 http://duoshuo.com/

```javascript
var _config = {
  blog_name : 'FatliTalk 李庆权的博客',  // 博客名称
  owner: 'FatliTalk',           // GitHub 用户名
  repo: 'blog',                 // 用于存放博客（Issues）的仓库名
  duoshuo_id : 'FatliTalk',     // 在第三方评论插件多说申请站点的子域名名称
  // access_token: '填写令牌',   // 请求量大时需要在 GitHub 后台单独设置一个读取公开库的 token
  per_page: '15'                // 默认一页显示几篇文章
}
```

③ 保存后即可通过 `http://用户名.github.io/blog` 即可访问

注意：至少得有一次提交， [GitHub Pages](https://github.com/FatliTalk/blog/issues/12) 功能才会生效，直接 Fork 没有任何修改是不行的。

如果你想绑定独立域名：修改根目录的 CNAME 文件，将其中的网址修改为你的域名，并把你的域名放在域名解析商进行解析，即可使用你的域名进行访问。参考： https://github.com/FatliTalk/blog/issues/12

## 二、部署方法(方案2)

① `Clone or download` 本仓库，

② 修改根目录的 config.js ，填写好对应的博客名称，你自己的 GitHub 用户名、对应仓库名、多说 ID ，保存。多说账号在这里申请 http://duoshuo.com/

```javascript
var _config = {
  blog_name : 'FatliTalk 李庆权的博客',  // 博客名称
  owner: 'FatliTalk',           // GitHub 用户名
  repo: 'blog',                 // 用于存放博客（Issues）的仓库名
  duoshuo_id : 'FatliTalk',     // 在第三方评论插件多说申请站点的子域名名称
  // access_token: '填写令牌',   // 请求量大时需要在 GitHub 后台单独设置一个读取公开库的 token
  per_page: '15'                // 默认一页显示几篇文章
}
```

③ 接下来就是在对应的 repo 的 Issues 下写文章了

其它同上。

## 三、提高 API 访问次数的配额

> 默认情况下你是用匿名权限访问 GitHub 接口的， GitHub 的访问限制是一个小时最多 60 次请求，如何提高限制呢？ 

1. 到个人设置 Settings 下的 Personal access tokens 页（ https://github.com/settings/tokens ），点击右上角的 生成新的令牌  `Generate new token`
2. 填写名称，只勾选 `public_repo` ,然后保存，GitHub 会生成一个可访问你公开项目的令牌 access_token，将它填入到配置文件 config.js 的 access_token 的值中，并取消注释。
3. 打开 app.js ,取消大概在第 17 行和 88 行的 access_token 注释。

<br />

_参考教程：https://github.com/wuhaoworld/github-issues-blog_
