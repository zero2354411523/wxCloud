// components/rate/rate.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['outer-class', 'selected-class'],
  properties: {
    isEdit: {
      type: [Boolean,String],
      value: false
    },
    size: {
      type: Number,
      value: 5
    },
    name: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    rate: 0,
    rateList: [],
    canEdit: false
  },
  ready() {
    let array = []
    for(let i = 0;i < this.data.size;i++){
      array.push(2*(i+1))
    }
    if(this.data.isEdit == 'false'){
      this.setData({
        canEdit: false
      })
    }else{
      this.setData({
        canEdit: this.data.isEdit
      })
    }
    this.setData({
      rateList: array
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeRate: function (e) {
      this.setData({
        rate: e.currentTarget.dataset.rate
      })
      this.triggerEvent('change',{value: this.data.rate})
    }
  }
})
