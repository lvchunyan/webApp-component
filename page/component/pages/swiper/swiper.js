// page/component/pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [{
        title: 'A',
        color: '#1AAD19'
      },
      {
        title: 'B',
        color: '#2782D7'
      },
      {
        title: 'C',
        color: '#eee'
      },
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  changeIndicatorDots: function() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  durationChange:function(e){
    this.setData({
      duration:e.detail.value
    })
  },
  intervalChange:function(e){
    this.setData({
      interval: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})