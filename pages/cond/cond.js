// pages/cond/cond.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isLoading : true,
      foo : 'hello word',
      stuList : [
        {
          "id": 10005,
          "name": "吴杰"
        }, {
          "id": 10006,
          "name": "白勇"
        }, {
          "id": 10007,
          "name": "汪艳"
        }
      ]


  },
  bindHandle : function (e){
      console.log(e);
  },
  viewBindHandle (e){
    console.log(1,e);
  },
  removeHandle(e){
    console.log(e);
  },
  inputChangeHandle(e){
    console.log(e.detail.value);
    this.data.foo = e.detail.value;
    //1.改变数据源
    //2. 通知框架，数据源变了，需要重新渲染页面
    this.setData({
      foo: e.detail.value

    })
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout( ()=>{
        this.setData({
          isLoading: false
        });
    },2000)
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