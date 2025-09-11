#!/usr/bin/node
console.log('Recursive');

const fibsRec = (num) => {   
    if (num==1)return [0]
    if (num ==2) return [0,1]    
    else {
        let prev = fibsRec(num-1)
        let newNum = prev[prev.length-2]+prev[prev.length-1]
        prev.push(newNum)
        return prev       
    }    
}
console.log(fibsRec(9))
