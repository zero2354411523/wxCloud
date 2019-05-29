// components/modalMask/modalMask.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['outer-class'],
  properties: {
    position: {
      type: String,
      value: 'center'
    },
    isUseSelfClose: {
      type: [Boolean,String],
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDisplay: false,
    isHideClose: false
  },
  ready() {
    if (this.data.position == 'none') {
      this.setData({
        isHideClose: true
      })
    }
    if (this.data.isUseSelfClose != 'false' && this.data.isUseSelfClose) {
      this.setData({
        isHideClose: true
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      this.setData({
        isDisplay: true
      })
    },
    hide() {
      this.setData({
        isDisplay: false
      })
    },
    block() {}
  }
})
