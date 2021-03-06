// 2.8.9+ 支持
uni.navigateTo({
    url: 'pages/test?id=1',
    events: {
      // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      acceptDataFromOpenedPage: function(data) {
        console.log(data)
      },
      someEvent: function(data) {
        console.log(data)
      }
    //   ...
    },
    success: function(res) {
      // 通过eventChannel向被打开页面传送数据
      res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
    }
  })
  
  // uni.navigateTo 目标页面 pages/test.vue
  onLoad: function(option) {
    console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    eventChannel.emit('someEvent', {data: 'test'});
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
    })
  }