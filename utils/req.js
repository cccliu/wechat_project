const {ENV, HOST_CONFIG, URL_CONFIG} = require('../config/interface.js');

const basic_Settings = {
   baseUrl: HOST_CONFIG.WXOPEN[ENV], //请求的域名
   URL_CONFIG: URL_CONFIG //请求的路由
}

 // 请求域名
const _require = (datas = {}, URL, _methods = 'GET') => {
  return new Promise((resolve, reject) => {
    	  x.request({
    	    url: basic_Settings.baseUrl + URL_CONFIG[URL], 
    	    method: _methods,
    	    data: datas,
    	    header: { 'content-type': 'application/json' }, // 默认值
  	   success: function (res) {
  	     resolve(res)
  	   },
  	   fail: function(error){
  		   reject(error);
  	   }
    	})
  })
}

const getLogin = () => { // 登录
    wx.login({  
      success: res => {
        const code = res.code;
        console.log(code);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
}

module.exports = {
   getLogin: getLogin,
   _require: _require
}