// module.exports -> export
// require -> import

const firstModule = require('./first')

console.log(firstModule.add(23,23));

try{
    console.log('trying to divide by zero');
    let result = firstModule.divide(0,0)
    console.log(result);
    
}catch(error){
    console.log("caught an error", error.message );
    
}



//  module wrapper
// (
    // function(exports,require,module,__filename, __dirname){
       // your module code goes here  
  //  }
//)