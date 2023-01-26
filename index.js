//Helper function to check if collection is array or object
//If object, uses Object.values to create array
function standardizeInput(collection) {
  if (collection instanceof Array){
    return [...collection]
  } else {
    return Object.values(collection)
  }
    // return (collection instanceof Array) ? [...collection] : Object.values(collection);
  }

function myEach(collection, callback) {
    let newCollection = standardizeInput(collection)

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    // let i = 0
    // while (i < newCollection.length) {
    //   callback(newCollection[i])
    //   i++
    // }

    return collection
}

function myMap(collection, callback){
    let newCollection = standardizeInput(collection)

    let updatedArray = []

    for (let i = 0; i < newCollection.length; i++) {
        updatedArray.push(callback(newCollection[i]))
    }

    return updatedArray
}

function myReduce(collection, callback, accumulator) {
    let newCollection = standardizeInput(collection)
  // The if statement below handles the case where no start value is passed in 
  // for the accumulator
  // If acc is null, it is set equal to the first value in newCollection
  // That first value is then sliced out of newCollection since it has already
  // been accounted for
  if (!accumulator) {
    accumulator = newCollection[0];
    newCollection = newCollection.slice(1);
  }


    for (let i = 0; i < newCollection.length; i++) {
        accumulator = callback(accumulator, newCollection[i], newCollection)
    }

    return accumulator

}

function myFind(collection, predicate){
    let newCollection = standardizeInput(collection)
    
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) return newCollection[i];
      }
    
      return undefined;
}

function myFilter(collection, predicate){
    let newCollection = standardizeInput(collection)

    const newArray = [];

  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) newArray.push(newCollection[i]);
  }

  return newArray;
}

function mySize(collection) {
    let newCollection = standardizeInput(collection)

    return newCollection.length;
}

function myFirst(array, n){
    if (n){
        return array.slice(0, n)
    } else {
        return array[0]
    }
}
 

function myLast(array, n){
    if (n){
        return array.slice(array.length - n, array.length)
    }
    else {
        return array[array.length - 1]
    }
}

function mySortBy(array, callback) {
    const newArray = [...array];
    return newArray.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  function myFlatten(collection, shallow, newArray=[]){
    
    function unpack(newArray, oldArray){
      for (let value of oldArray) {
        newArray.push(value);
      }}

    if (shallow){
      for (let value of collection){
        Array.isArray(value) ? unpack(newArray, value) : newArray.push(value);
      }
    } else {
        for (let value of collection){
          if (Array.isArray(value)){
            myFlatten(value, false, newArray);
          } else {
            newArray.push(value);
          }
        }
    }
    return newArray
  }

  function myKeys(object){
    return Object.keys(object)
  //   const keys = [];
  // for (let key in obj){
  //   keys.push(key);
  // }
  // return keys;
  }

  function myValues(object){
    return Object.values(object)
    // const values = [];
    // for (let key in obj){
    //   values.push(obj[key]);
    // }
    // return values;
  }