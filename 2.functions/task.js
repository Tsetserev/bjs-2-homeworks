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

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
