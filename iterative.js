#!/usr/bin/node
console.log("Iterative")

const fibs = (num) => {
    let fibSequence =[]
    for(let i = 0; i<num ;i++){
        if(i==0 || i==1){
            fibSequence.push(i)  
        } else {
            const newNum = (fibSequence[i-2] + fibSequence[i-1])
            fibSequence.push(newNum)     
        }
    }   
return fibSequence
}

console.log(fibs(5))