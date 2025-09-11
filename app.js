#!/usr/bin/node
console.log('test');
 let fibSequence = []
const fibs = (num) => {
   
    for(let i = 0; i<num ;i++){
        if(i==0 || i==1){
            fibSequence.push(i)
        } else {
            const newNum = (fibSequence[i-2] + fibSequence[i-1])
            fibSequence.push(newNum)
        }
        
        
    }   
   console.log(fibSequence)
return fibSequence
}


