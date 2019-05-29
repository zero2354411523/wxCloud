// components/markdown/code/code.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    codeText: null
  },
  ready: function() {
    this.print()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    print: function(){
      let codestr = usecaseCode.replace(/^\s+|\s+$/g, '')
      this.setData({
        codeText: encodeURI(codestr)
      })
    }
  }
})
const usecaseCode = 
`let gestureForPage = new gesture(this.$refs.testPage)
gestureForPage.swipeRight = () => {
      this.updateLog('右划了')
      }
gestureForPage.swipeLeft = () => this.updateLog('左滑了')
gestureForPage.longSwipeRight = () => this.updateLog('long右划了')
gestureForPage.longSwipeLeft = () => this.updateLog('long左滑了')`