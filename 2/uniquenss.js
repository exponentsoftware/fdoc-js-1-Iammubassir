function checkUniqueness(array) {
    const arr = array.filter((value, index) => array.indexOf(value) === index);
    if (array.length !== arr.length) {
      console.log("false");
    } else {
      console.log("true");
    }

    
  }
  const arrOne = [1, 4, 6, 2, 6];
  checkUniqueness(arrOne);