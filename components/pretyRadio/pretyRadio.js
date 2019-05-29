// components/pretyRadio/pretyRadio.js
const utils = require('../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['outer-class','selected-class'],
  relations: {
    "/components/pretyRadioGroup/pretyRadioGroup": {
      type: 'parent'
    }
  },
  properties: {
    isEdit: {
      type: [Boolean, String]
    },
    value: {
      type: [String, Number]
    },
    index: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isSelected: false,
    parents: null,
    canEdit: false
  },
  ready(){
    let nodes = this.getRelationNodes('/components/pretyRadioGroup/pretyRadioGroup')
    let canEdit = utils.printBoolean(this.data.isEdit)
    this.setData({
      parents: nodes,
      canEdit: canEdit
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    pickerTap: function () {
      let result
      let groupValue = this.data.parents[0].data.value
      if(this.data.value == groupValue){
        result = null
      }else{
        result = this.data.value
      }
      this.data.parents[0].setData({
        value: result
      })
      this.data.parents[0].changeSelected(this.data.index)
      this.data.parents[0].triggerEvent('change', { value: result })

    }
  }
})
