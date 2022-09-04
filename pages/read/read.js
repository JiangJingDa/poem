// pages/read/read.js
var t = require("../index/data/mryw_articles/" + Math.floor(291 * Math.random() + 0) + ".js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    read_title: t.dL.t,
    read_author: t.dL.a,
    read_content: t.dL.c
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(t) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  

 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  read_change: function() {
    t = require("../index/data/mryw_articles/" + Math.floor(291 * Math.random() + 0) + ".js"), 
    this.setData({
        read_title: t.dL.t,
        read_author: t.dL.a,
        read_content: t.dL.c
    }), wx.pageScrollTo({
        scrollTop: 0
    });
},
/**
   * 页面相关事件处理函数--监听用户下拉动作
   */
 
onPullDownRefresh: function() {
  t = require("../home/data/mryw_articles/" + Math.floor(291 * Math.random() + 0) + ".js"), 
  this.setData({
      read_title: t.dL.t,
      read_author: t.dL.a,
      read_content: t.dL.c
  }), wx.stopPullDownRefresh();
},
 /**
   * 页面上拉触底事件的处理函数
   */
onReachBottom: function() {},
})