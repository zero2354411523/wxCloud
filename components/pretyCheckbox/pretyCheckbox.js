// components/pretyRadio/pretyRadio.js
const utils = require('../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['outer-class', 'selected-class'],
  relations: {
    "/components/pretyCheckboxGroup/pretyCheckboxGroup": {
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
    },
    type: {
      type: String,
      value: 'normal'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isSelected: false,
    parents: null,
  },
  ready() {
    let nodes = this.getRelationNodes('/components/pretyCheckboxGroup/pretyCheckboxGroup')
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
    pickerTap () {
      if(this.data.type == 'allForOne'){
        this.allForOne()
      }else{
        this.checkOne()
      }
    },
    checkOne () {
      if (this.data.parents[0].data.isAllForOne){
        this.data.parents[0].resolveAllForOne()
      }
      let groupValue = this.data.parents[0].data.value
      let groupIndexList = this.data.parents[0].data.index
      let index = groupValue.indexOf(this.data.value)
      let type = 'add'
      if (index > -1) {
        groupValue.splice(index, 1)
        groupIndexList.splice(index, 1)
        type = 'del'
        this.setData({
          isSelected: false
        })
      } else {
        groupValue.push(this.data.value)
        groupIndexList.push(this.data.index)
        this.setData({
          isSelected: true
        })
      }
      this.data.parents[0].setData({
        value: groupValue,
        index: groupIndexList
      })
      this.data.parents[0].triggerEvent('change', {
        value: groupValue,
        changeItem: this.data.value,
        type: type
      })
    },
    allForOne () {
      this.data.parents[0].allForOne(this.data.index)
    }
  }
})
