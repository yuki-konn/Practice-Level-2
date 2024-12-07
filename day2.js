function practice1() {
  debugger;
  const bookObject = {
    property1: ["Green rice and Ham", 1999, true],
  };
  const myArray = bookObject.property1;
  output(myArray[0] + "<br>");
  output(myArray[1] + "<br>");
  output(myArray[2] + "<br>");
}

function practice2() {
  debugger;

  const bookObject = {
    property1: ["Green rice and Ham", 1991, true],
    property2: ["Yellow rice and Ham", 1997, false],
    property3: ["Pink rice and Ham", 2001, true],
  };

  const myArray1 = bookObject.property1;
  const myArray2 = bookObject.property2;
  const myArray3 = bookObject.property3;

  for (let i = 0; i < 3; i++) {
    const array1Item = myArray1[i];
    const array2Item = myArray2[i];
    const array3Item = myArray3[i];
    output(`${array1Item}, ${array2Item}, ${array3Item}<br>`, "outputTag2");
  }
}

function practice3() {
  debugger;
  const bookObject = {
    property1: ["Green rice and Ham", 1991, true],
    property2: ["Yellow rice and Ham", 1997, false],
    property3: ["Pink rice and Ham", 2001, true],
  };

  for (let propertyNumber = 1; propertyNumber <= 3; propertyNumber++) {
    const propertyName = `property${propertyNumber}`;
    const array = bookObject[propertyName];
    const myString = array[0];
    const myNumber = array[1];
    const myBoolean = array[2];
    output(`${myString}, ${myNumber}, ${myBoolean}<br>`, "outputTag3");
  }
}
