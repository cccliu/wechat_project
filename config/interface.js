
/** 环境配置 */
const ENV = "DEV";// "DEV",//开发环境
//const ENV = "TEST";// "TEST",//测试环境
//const ENV = "PRO";// "PRO",//生产环境

/** 后台服务器地址 :域名 */
const HOST = {
  // 小程序后台，默认
   WXOPEN: {
   	   PRO: 'https://wxapi.csair.com/wxopen',//
   	   TEST: 'https://twx.csair.com/twx/testwxopen',
   	   DEV: 'http://10.79.1.171:8181/testwxopen'
   }
}

/**（接口管理） 接口名：接口路径 */
const URL = {
  LOGIN_WXUSERINFO: "/api/login/loadInfo", /*获取微信用户信息、unionId*/
  LOGIN_MEMBERINFO: "/api/login/memberInfo", /*获取明珠会员信息*/
  LOGIN_OPENID: "/api/login/loginInfo", /*获取openid信息*/
  LOGIN_USERINFO: "/api/login/info",//获取登录权限，请求后台获取openId，此时有基本的信息内容
  LOGIN_LOGINID: "/api/login/login", /*获取sessionId、openId、unionId(静默)*/

  LOGIN_MEMBERLOGIN: '/api/login/memberLogin',//会员登录
  LOGIN_MEMBERLOGINBYNAME: '/api/login/memberLoginByName',//多会员卡,卡号+姓名登录
  LOGIN_MOBILE_CODE: '/api/login/getVerificationCode',//E行登录，获取验证码
  LOGIN_MOBILELOGIN: '/api/login/eLogin',//E行登录
  LOGIN_LOGININFO: '/api/login/isLogin',//sso单点登录根据unionId查询用户信息接口
  LOGIN_SMSCODE: '/api/login/sendSms',//明珠登录获取验证码接口
  LOGIN_PM_BYCERT: '/api/login/loginByCert',//明珠证件登录接口
  REGISTER_SMS_CODE: "/api/member/getSMSValidateCode", //注册获取验证码
  REGISTER: "/api/member/submitJoinClub", //注册会员
  OPENCARD: "/api/cardPackage/getAssemblyParams",//开卡组件取参数
  CARDINFO: "/api/member/initMemberCardParams"
}



module.exports = {
  ENV: ENV,
  HOST_CONFIG: HOST,
  URL_CONFIG: URL
}






