// components/pretyRadioGroup/pretyRadioGrop.js
const utils = require('../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['outer-class'],
  relations: {
    "/components/pretyCheckbox/pretyCheckbox": {
      type: 'child'
    }
  },
  properties: {
    isEdit: {
      type: [Boolean, String]
    }
  },
  ready() {
    let canEdit = utils.printBoolean(this.data.isEdit)
    let children = this.getRelationNodes('/components/pretyCheckbox/pretyCheckbox')
    this.setData({
      canEdit: canEdit,
      children: children
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    children: null,
    value: [],
    index: [],
    allBtnIndex: 0,
    isAllForOne: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getNodes () {
      return this.getRelationNodes('/components/pretyCheckbox/pretyCheckbox')
    },
    resolveAllForOne () {
      this.setData({
        isAllForOne: false,
        value: [],
        index: []
      })
      this.data.children[this.data.allBtnIndex].setData({
        isSelected: false
      })
    },
    allForOne (allBtnIndex) {
      let children = this.data.children
      let allValue = []
      children[allBtnIndex].setData({
        isSelected: true
      })
      for(let index of this.data.index){
        children[index].setData({
          isSelected: false
        })
      }
      for(let child of children){
        allValue.push(child.data.value)
      }
      this.setData({
        value: allValue,
        isAllForOne: true,
        allBtnIndex: allBtnIndex
      })
      this.triggerEvent('change', {
        value: this.data.value,
        changeItem: '全部',
        type: 'allForOne'
      })
    }
  }
})
