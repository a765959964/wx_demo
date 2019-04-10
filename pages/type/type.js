// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cur : 0,
      types : [{
        name : '手机'
      },{
        name : '电脑'
      },{
        name : '电器'
      }],
      foodTrees : [{
        id : 1,
        image : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4116781183,3909317223&fm=26&gp=0.jpg',
        name : 'iphone X',
        price : '6999',
        kucun : 40,
        detail : 'iphone 7手感细腻顺滑，还有多种颜色可选，总有一种是你的最爱，需要的朋友试试吧'
      },{
        id : 2,
        image : 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3121082349,737941555&fm=26&gp=0.jpg',
        name : 'iphone 8',
        price : '5999',
        kucun : 40,
        detail : 'iphone 7手感细腻顺滑，还有多种颜色可选，总有一种是你的最爱，需要的朋友试试吧'
      },{ id : 3,image : 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4104343967,636970359&fm=26&gp=0.jpg',
        name : 'iphone 7',
        price : '5599',
        kucun : 40,
        detail : 'iphone 7手感细腻顺滑，还有多种颜色可选，总有一种是你的最爱，需要的朋友试试吧'
      }]
  },

  
  // 获取当前选择的分类
  getCur : function (e){
    this.setData({
      cur : e.currentTarget.dataset.index
    })
    console.log(e.currentTarget.dataset.index)    
  },

  // 获取详情页面
  getDetail : function (e){
    let index = e.currentTarget.dataset.index;
    let shop = this.data.foodTrees[index];
    wx.setStorageSync("shop",shop);
    wx.navigateTo({
      url: '/pages/detail/detail'
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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