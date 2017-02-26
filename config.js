var _config = {
    blog_name       : 'FatliTalk 李庆权的博客',         // 博客名称
    owner           : 'FatliTalk',           // github 用户名
    repo            : 'blog',// github 中对应项目名 
    duoshuo_id      : 'fatlitalk',            // 在第三方评论插件多说申请站点的子域名
    access_token : 'c06072611476522c'+'beb7dafc1fb735afd490b04c',       // 请求量大时需要在 github 后台单独设置一个读取公开库的 token, 注意将token 拆成两个字符串，否则会被系统自动删除掉（例如：// access_token : 'abcde'+'fghijk',）
    per_page        : '15'                    // 默认一页显示几篇文章
}

var duoshuoQuery = {short_name:_config['duoshuo_id']};
