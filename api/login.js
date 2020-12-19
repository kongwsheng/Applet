function auCode (data) {
  return uni.$u.http['post']('/au/code', data)
}

function auLogin (data) {
  return uni.$u.http['post']('/au/login', data)
}

// 获取面经分享列表
function articlesShare (params) {
  return _fetch({
    url: '/articles/share',
    params
  })
}
export { auCode, auLogin, articlesShare }
