// pages/menu/menu.js
console.log('123');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg : 'Hello Word'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //设置加载数据
      this.setData({foo:'Hello Word'})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '菜单标题'
    })
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
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})