function articlesTechnic (data) {
  return uni.$u.http['get']('/articles/technic', data)
}

function chartDataHot () {
  return uni.$u.http['get']('/chart-data/hot')
}
// 获取面经分享列表
function articlesShare (params) {
  return uni.$u.http['get']('/articles/share', params)
}
export { articlesTechnic, chartDataHot, articlesShare }
