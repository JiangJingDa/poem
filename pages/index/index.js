// index.js
// 获取应用实例
var n = require("data/one_sens/" + Math.floor(500 * Math.random() + 1500) + ".js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    main_sen: n.dL.s,
    main_senAuthor: "—— " + n.dL.a,
    main_img_src: "https://bing.ioliu.cn/v1/rand?&t=json&w=1920&h=1080"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (n) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  onPullDownRefresh: function() {
    n = require("data/one_sens/" + Math.floor(500 * Math.random() + 1500) + ".js"), 
    this.setData({
        main_sen: n.dL.s,
        main_senAuthor: "—— " + n.dL.a,
        main_img_src: "https://bing.ioliu.cn/v1/rand?&t=json&w=1920&h=1080"
    }), wx.stopPullDownRefresh();
}
})