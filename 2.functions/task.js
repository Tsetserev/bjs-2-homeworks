function getArrayParams(...arr) {
  let min = arr[0]
  let max = arr[0]
  let avg = 0

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i]
    if (max < arr[i]) max = arr[i]
    avg = avg + arr[i] 
    if (i == arr.length - 1) {
      avg = avg / arr.length
      avg = parseFloat(avg.toFixed(2)) 
    }
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc,item)=>acc+item, 0)
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0
 return Math.max.apply(null, arr) - Math.min.apply(null, arr)
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0
  let sumEvenElement = 0
  let sumOddElement = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) sumEvenElement = sumEvenElement + arr[i]
    else sumOddElement = sumOddElement + arr[i]
  }
  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0
  let sumEvenElement = 0
  let countEvenElement = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement = sumEvenElement + arr[i]
      countEvenElement++
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i])
    if (result > maxWorkerResult) maxWorkerResult = result 
  }
  return maxWorkerResult
}
