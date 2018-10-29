// deploy开发配置
// var no_static_domain = process.env.npm_config_static_domain === 'no';
let no_static_domain = process.env.static_domain === 'no';
var password = require('./ftp-password.js')

if (!password) {
  console.log('**  没有ftp密码文件，需手动创建配置文件  **')
  console.log('**  密码文件保密，创建后请勿上传至git仓库  **')
}

module.exports = {
  // 测试CDN，域名：static.djtest.cn
  test: {
    host: 'ossftp.djdns.cn',
    port: '2048',
    user: password['test'].userName,
    password: password['test'].password,
    path: no_static_domain ? '/' : 'pt/project/xxx/',  // CDN部署路径，xxx替换成自己项目部署的路径
    domain: no_static_domain ? '' : '//static.djtest.cn/'
  },
  // 线上CDN，域名：static.daojia.com
  sandbox: {
    host: 'ftp-box.djdns.cn',
    port: '21',
    user: password['sandbox'].userName,
    password: password[ 'sandbox' ].password,
    path: no_static_domain ? '/' : 'pt/project/xxx/',  // CDN部署路径，xxx替换成自己项目部署的路径
    domain: no_static_domain ? '' : '//static-box.djtest.cn/'
  },
  // 线上CDN，域名：static.daojia.com
  production: {
    host: 'ossftp.djdns.cn',
    port: '2048',
    user: password['production'].userName,
    password: password['production'].password,
    path: no_static_domain ? '/' : 'pt/project/xxx/',  // CDN部署路径，xxx替换成自己项目部署的路径
    domain: no_static_domain ? '' : '//static.daojia.com/'
  }
}