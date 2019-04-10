// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    shops : [{
      id : 1,
      name:'iphone X',
      image : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4116781183,3909317223&fm=26&gp=0.jpg',
      price : '6999',
      kucun : 30,
      detail : 'iphone x手感细腻顺滑，还有多种颜色可选，总有一种是你的最爱，需要的朋友试试吧'
    },
    {
      id : 2,
      name:'iphone 8',
      image : 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3121082349,737941555&fm=26&gp=0.jpg',
      price : '5999',
      kucun : 20,
      detail : 'iphone 8手感细腻顺滑，还有多种颜色可选，总有一种是你的最爱，需要的朋友试试吧'


    },{
      id : 3,
      name:'iphone 7',
      image : 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4104343967,636970359&fm=26&gp=0.jpg',
      price : '5599',
      kucun : 40,
      detail : 'iphone 7手感细腻顺滑，还有多种颜色可选，总有一种是你的最爱，需要的朋友试试吧'

    },{
      id: 4,
      name:'iphone 6',
      image : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=499012949,1990265805&fm=26&gp=0.jpg',
      price : '4999',
      kucun : 50,
      detail : 'iphone 6手感细腻顺滑，还有多种颜色可选，总有一种是你的最爱，需要的朋友试试吧'
    }
  ]
  },


  getDetail:function(e){
    let index = e.currentTarget.dataset.index;
    let shop = this.data.shops[index];
    //添加到缓存里面
    wx.setStorageSync('shop',shop);
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