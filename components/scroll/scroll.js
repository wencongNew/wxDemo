// components/scroll/scroll.js
const order = ['red', 'yellow', 'blue', 'green', 'red'];
const app = getApp();
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
    toView: 'red',
    scrollTop: 100,
    height: app.globalData.containterHeight
  },
  /**
   * 组件的方法列表
   */
  methods: {
    upper(e) {
      console.log(e)
      wx.startPullDownRefresh();
    },
    lower(e) {
      console.log(e)
    },
    scroll(e) {
      console.log(e)
    },
    tap(e) {
      for (let i = 0; i < order.length; ++i) {
        if (order[i] === this.data.toView) {
          this.setData({
            toView: order[i + 1]
          })
          break
        }
      }
    },
    tapMove(e) {
      this.setData({
        scrollTop: this.data.scrollTop + 10
      })
    }
  }
})
