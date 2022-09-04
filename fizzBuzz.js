const fizzBuzz=()=>{
  let max=100;
  for(let i=1;i<=max;i++){
    if((i%3===0)&&(i%5===0)){
      console.log('fizbuzz')
    }else if(i%3===0){
      console.log("fizz");
    }else if(i%5===0){
      console.log('buzz');
    }
  }
 }
 fizzBuzz();