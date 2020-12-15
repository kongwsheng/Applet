function setLocal (data) {
  return uni.setStorageSync('authorization', data)
}

function getLocal () {
  return uni.getStorageSync('authorization')
}

function removeLocal () {
  return uni.removeStorageSync('authorization')
}

export { setLocal, getLocal, removeLocal }
