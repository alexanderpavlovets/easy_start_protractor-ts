
function sleep(timeInMs) {
  return new Promise(res => setTimeout(res, timeInMs))
}

export {sleep}
