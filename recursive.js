#!/usr/bin/node
console.log('test');

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

// console.log(fibs(8))

// const fibsRec = (num, arr =[0,1]) => {
//     if (num<2) {
//         return arr
//     } 
    
    
   
// }

// let arr=[]
// const fibRec = (num) => {
   
  
//     if(num<2)  {
       
      
//   arr.unshift(num)
//         return arr
          
//     } else {
     
//       const newNum = ((num-1) + (num-2));
//       arr.unshift(newNum)
//      return fibRec(num-1)
    
       
//     }
      

  
    
// }



// console.log(fibRec(11))

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
