// pages/cart/cart.js
Page({

  data: {
      selected : false,
      totalPrice : 0.0,
      carts : []
  },

  //加入选中状态
  selectItem : function(e){
      let index = e.currentTarget.dataset.index;
      let carts = this.data.carts;
      //取值的相反数
      carts[index].checked = !carts[index].checked;
      
      this.setData({["carts["+index+"]"]:this.data.carts[index] })
      // this.setData({
      //   carts
      // });


      let flag = true;
      for(let i=0;i<carts.length;i++){
        if(carts[i].checked!=carts[index].checked){ 
          flag = false;
          break;
        }
      }
      if(flag){
        this.setData({selected :carts[index].checked})
      }
      this.totalPrice();
  },

  //增加全选事件
  selectAll : function(){
    let selected = this.data.selected;
    let carts = this.data.carts;
    selected = !selected;
    for(let i=0;i<carts.length;i++){
        carts[i].checked = selected;
    }
    this.setData({selected,carts});
    this.totalPrice();

  },
  // 减事件
  prep : function (e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if(num<=1){
      return 1;
    }
    carts[index].num--;    
    this.setData({
      carts
    })
    this.totalPrice();
  },
  // 添加事件
  add : function (e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts[index].num++;
    this.setData({carts});
    this.totalPrice();
  },
  del : function (e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index,1);
    this.setData({carts});
    this.totalPrice();
  },
  //总价格
  totalPrice : function(e){
    let carts = this.data.carts;
    let total = 0;
    for(let i=0;i<carts.length;i++){
        if(carts[i].checked){
          total += carts[i].price * carts[i].num;
        }
    }
    this.setData({totalPrice : total})

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
    if(wx.getStorageSync('newShop') !='isNull'){
      let cartFlag = false;

      for(let i=0;i<this.data.carts.length;i++){
        if(wx.getStorageSync('newShop').id == this.data.carts[i].id){
            cartFlag = true;
            break;
        }
      }
      if(!cartFlag){
        let carts=wx.getStorageSync('newShop');
        this.data.carts.push(carts);
        this.setData({
          carts : this.data.carts
        })
      }
    }
    wx.setStorageSync('newShop','isNull');
    this.totalPrice();
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