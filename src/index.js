function doubleLetter(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str[i] + str[i];
    }
    return result;
  }
  
  const input = 'hello';
  const doubledString = doubleLetter(input);
  console.log(doubledString);
  