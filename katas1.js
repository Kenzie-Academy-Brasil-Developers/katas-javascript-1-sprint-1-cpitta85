 
 function oneThroughTwenty() {
  
  let arr = []

  for (let i = 1; i <= 20; i++) {
    arr.push(i)
    
   }
   return arr
} 

console.log(oneThroughTwenty())



 function evensToTwenty() {

  let arr = []

  for (let i = 2; i <= 20; (i+=2)) {
    arr.push(i)

  }
    return arr
}

console.log(evensToTwenty())



function oddsToTwenty() {

  let arr = []

  for (let i = 1; i <= 20; (i+=2)) {
    arr.push(i)

  }
    return arr
 
 }

 console.log(oddsToTwenty())



function multiplesOfFive() {
    
  let arr = []

  for (let i = 5; i <= 100; (i+=5)) {
    arr.push(i)

  }
    return arr

}

console.log(multiplesOfFive())



function squareNumbers() {
    
 let arr = []

 for (let i = 1; (i*i) <= 100; i++) {
   arr.push(i*i)
   
 }
   return arr

}

console.log(squareNumbers())



function countingBackwards() {
    
  let arr = []

  for(let i = 20; i >= 1; --i) {
    arr.push(i)

  }
    return arr
}

console.log(countingBackwards())



function evenNumbersBackwards() {

  let arr = []
    
  for(let i = 20; i >= 1; (i-=2)) {
    arr.push(i)

  }
    return arr
 }

 console.log(evenNumbersBackwards())



function oddNumbersBackwards() {
    
 let arr = []

 for(let i = 19; i >= 1; (i-=2)) {
   arr.push(i)

 }
   return arr

}

console.log(oddNumbersBackwards())



function multiplesOfFiveBackwards() {

  let arr = []

  for(let i = 100; i >= 5; (i-=5)) {
    arr.push(i)
  }
    return arr
    
}

console.log(multiplesOfFiveBackwards())



function squareNumbersBackwards() {

  let arr  = []

  for(let i = 10; i >= 1; --i) {
    arr.push(i*i)
  }
    return arr
   
}

console.log(squareNumbersBackwards())
