var Enumeration = function() {}

// const ourForEach = function(array, callback) {
//   for(let item of array){
//     let result = callback(item);
//   }
//   return result;
//
// }

Enumeration.prototype.find = function(array, callback) {
  // code here that makes the test pass!
  // let result2 = ourForEach(array, function(item) {
  //   const isItem = callback(item);
  //
  //     if(isItem) {
  //       return item;
  //     }
  // });
  // return result2;

  for(let item of array) {
    const isItem = callback(item);

    if(isItem) {
      return item;
    }
  }
}

Enumeration.prototype.map = function(array, callback) {
  let numArray = [];
   for(let item of array) {
     result = callback(item);

     numArray.push(result);
   }

   return numArray;
}

Enumeration.prototype.filter = function(array, callback) {
  let numArray = [];
   for(let item of array) {
     result = callback(item);
      if (result === true){
        numArray.push(item);
      }
   }
   return numArray;
}


Enumeration.prototype.some = function(array, callback) {

   for(let item of array) {
     let result = callback(item);

     if(result) {
       return true;
     }
   }

   return false;
   //return result;
 }

 Enumeration.prototype.every = function(array, callback) {

   for(let item of array) {
     let result = callback(item);

     if(result === false) {
       return false;
     }
   }

   return true;
  }

 Enumeration.prototype.reduce = function(array, callback) {
   let sum = 0;

    for(var i = 0; i < array.length; i++) {
      sum = callback(sum,array[i]);
    }

    return sum;

  }



module.exports = Enumeration;
