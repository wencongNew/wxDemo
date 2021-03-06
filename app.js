//app.js
App({
  onLaunch: function () {
    //获取设备信息
    try {
      const res = wx.getSystemInfoSync();
      this.globalData.getSystemInfo = res;
      console.log(res.model)
      console.log(res.pixelRatio)
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)
    } catch (e) {
      // Do something when catch error
    }
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 获取右上角胶囊位置信息
    var height = this.globalData.getSystemInfo.statusBarHeight + 32;
    if (this.globalData.getSystemInfo.system.indexOf("Android"
    ) !== -1) {
      this.globalData.navigayionBarHeight = height + 8;
    } else {
      this.globalData.navigayionBarHeight = height + 6;
    }
    this.globalData.getMenuButtonBoundingClientRect = {
      bottom: this.globalData.navigayionBarHeight
    };
    this.globalData.navigayionBarHeight += "px";
        // 容器高度
    this.globalData.containterHeight = this.globalData.getMenuButtonBoundingClientRect ? this.globalData.getSystemInfo.windowHeight - this.globalData.getMenuButtonBoundingClientRect.bottom + 'px' :
      this.globalData.getSystemInfo.windowHeight + 'px';
    console.log(this.globalData.getSystemInfo);
  },
  globalData: {
    userInfo: null,
    getMenuButtonBoundingClientRect: null,
    getSystemInfo: null,
    containterHeight: null,
    topSwiperHeight: "150",
    navigayionBarHeight: "0px"
  }
})