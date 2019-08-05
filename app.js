const {_require, getLogin} = require('./utils/req'); // 全局设置请求
const events = require('./utils/event'); // 全局事件管理

App({
  globalData: {
    userInfo: null,
    _require: _require,
    _getLogin: getLogin
  },
  events: events
})