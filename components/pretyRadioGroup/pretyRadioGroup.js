// components/pretyRadioGroup/pretyRadioGrop.js
const utils = require('../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['outer-class'],
  relations: {
    "/components/pretyRadio/pretyRadio": {
      type: 'child'
    }
  },
  properties: {
    isEdit: {
      type: [Boolean, String],
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: null,
    index: null
  },
  ready() {
    let canEdit = utils.printBoolean(this.data.isEdit)
    this.setData({
      canEdit: canEdit
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getNodes: function () {
      return this.getRelationNodes('/components/pretyRadio/pretyRadio')
    },
    changeSelected(index) {
      let children = this.getRelationNodes('/components/pretyRadio/pretyRadio')
      if(index == this.data.index){
        children[index].setData({
          isSelected: false
        })
        this.setData({
          index: null
        })
      }else{
        if(this.data.index != null){
          children[this.data.index].setData({
            isSelected: false
          })
        }
        children[index].setData({
          isSelected: true
        })
        this.setData({
          index: index
        })
      }
    }
  }
})
