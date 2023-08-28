"use strict"
function solveEquation(a, b, c) {
  let d = Math.pow(b, 2)-4*a*c
  if (d < 0) return []
  if (d == 0) return [-b/(2*a)]
  return [(-b + Math.sqrt(d) )/(2*a),(-b - Math.sqrt(d) )/(2*a)]
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}