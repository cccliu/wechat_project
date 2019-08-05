
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.events.formatTime(new Date());
    app.globalData.userInfo = 'default-初始化信息';
    app.globalData._require
    app.globalData._getLogin
  }
})