// pages/pretyCheckboxUsecase/pretyCheckboxUsecase.js
const code =
  `
  <prety-radio-group bindchange='changeValue'>
    <prety-radio wx:for='{{dataList}}' value='{{item.name}}' index='{{index}}'>
      {{item.name}}({{item.count}})
    </prety-radio>
  </prety-radio-group>
  `
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      { name: '群攻'},
      { name: '削弱'},
      { name: '快速复活'},
      { name: '支援'},
      { name: '辅助'},
      { name: '输出'},
      { name: '生存' }
    ],
    choosingValue: null,
    code: code
  },
  changeValue: function (e) {
    this.setData({
      choosingValue: e.detail.value
    })
    console.log(e.detail)
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