// pages/modalMaskUsecase/modalMaskUsecase.js
const words = 
`
本组件在gitee上开源 地址↓
https://gitee.com/izeya/wx_tools
点击复制
`
const code = 
`
<view class='e5-box modal-btn flex-rc' bindtap='showModal'>显示模态框</view>

<modal id='mask1' outer-class='modal-box flex-cc' >
  <view bindtap='copy' class='word-box'>{{words}}</view>
  <view class='ok-btn flex-rc' bindtap='hideModal'>确认</view>
</modal>
`
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask1: null,
    mask2: null,
    words: words,
    code: code
  },
  showModal: function () {
    this.data.mask1.show()
  },
  showModal2: function () {
    this.data.mask2.show()
  },
  hideModal: function () {
    this.data.mask1.hide()
  },
  hideModal2: function () {
    this.data.mask2.hide()
  },
  copy: function() {
    wx.setClipboardData({
      data: 'https://gitee.com/izeya/wx_tools',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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
    this.setData({
      mask1: this.selectComponent('#mask1'),
      mask2: this.selectComponent('#mask2')
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