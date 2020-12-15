function auCode(data) {
  return uni.$u.http['post']('/au/code', data)
}

function auLogin(data) {
  return uni.$u.http['post']('/au/login', data)
}
export { auCode, auLogin }
