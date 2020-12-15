'asdasdasdasdasdjkljkljkl'.split('').map((item, index) => {
  const arr = [{}]
  // item[index]
  if (arr[0][item]) {
    ++arr[0][item]
  } else {
    arr[0][item] = 1
  }
  console.log(arr)
  return arr
})
const arr = {}
'asdasdasdasdasdjkljkljkl'.split('').forEach(item => {
  if (arr[item]) {
    ++arr[item]
  } else {
    arr[item] = 1
  }
})
