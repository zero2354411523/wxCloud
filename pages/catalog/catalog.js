//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    bgColorList: ['F4E0E9', 'CE93C3', 'FDF4CD', 'FFCEBF', '80E5F7', 'EB505E', 'F7C4A7', 'EAECA1', 'DDE0E7', 'CEE1EF', 'A0C9E9', 'D1D7E5'],
    routerList: ['laterPicker', 'modal','pretyRadio','pretyCheckbox','rate'],
    // userAgent: navigator.userAgent
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  goUseCase(e) {
    let index = e.currentTarget.dataset.index
    let path = '/pages/' + this.data.routerList[index] + 'Usecase/' + this.data.routerList[index] + 'Usecase'
    wx.navigateTo({ 
      url: path,
    })
  }
})
