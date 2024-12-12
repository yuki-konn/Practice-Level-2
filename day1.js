// OBJECT WITH STRING, NUMBER, AND BOOLEAN TAHT IS DISPLAYED.
function practice1() {
  debugger;
  const car = {
    color: "red",
    year: 2024,
    onSale: true,
  };

  const carString = JSON.stringify(car);
  const carProperty = JSON.parse(carString);

  output(`
    <br>
    <div class="border-double">
    <h3><u>Car</u></h3>
    <span>Color: ${carProperty.color}</span>
    <br><span>Year: ${carProperty.year}</span>
    <br><span>On Sale: ${carProperty.onSale}</span>
    </div>
    `);
}

// ALTERNATIVE FUNCTION DOING SAME THING AS PRACTICE 1
function practice1Alt() {
  debugger;
  const car = {
    color: "red",
    year: 2024,
    onSale: true,
  };

  output(`
    <br>
    <div class="border-double">
    <h3><u>Car</u></h3>
    <span>Color: ${car.color}</span>
    <br><span>Year: ${car.year}</span>
    <br><span>On Sale: ${car.onSale}</span>
    </div>
    `);
}

// ARRAY WITH STRING, NUMBER, AND BOOLEAN THAT IS DISPLAYED.
function practice2() {
  debugger;
  const boat = ["blue", 2024, false];
  let position = 0;
  for (position = 0; position < boat.length; position++) {
    output(`${boat[position]}, `);
  }
}

// ALTERNATIVE FUNCTION DOING SAME THING AS PRACTICE 2
function practice2Alt() {
  debugger;
  const boat = [];
  boat.push("blue");
  boat.push(2024);
  boat.push(false);

  const count = boat.length;
  for (let position = 0; position < count; position++) {
    const value = boat[position];
    output(`The value at position ${position} is ${value}<br>`);
  }
}

// ARRAY WITH 3 OBJECTS WITH 3 PROPERTIES EACH THAT IS DISPLAYED.
function practice3() {
  debugger;
  const human1 = {
    occupation: "soldier",
    age: 25,
    deployed: true,
  };
  const human2 = {
    gender: "female",
    age: 26,
    married: true,
  };
  const human3 = {
    gender: "male",
    income: 30000,
    married: false,
  };

  const human = [human1, human2, human3];

  let position = 0;
  for (position = 0; position < human.length; position++) {
    const humanString = JSON.stringify(human[position]);
    output(`<br>${humanString}<br>`);
  }
}

// ALTERNATIVE FUNCTION DOING SAME THING AS PRACTICE 3
function practice3Alt() {
  debugger;
  const boat1 = {
    color: "yellow",
    year: 2022,
    forSale: true,
  };
  const boat2 = {
    color: "blue",
    year: 2010,
    forSale: true,
  };
  const boat3 = {
    color: "gold",
    year: 1850,
    forSale: false,
  };

  const boats = [];
  boats.push(boat1);
  boats.push(boat2);
  boats.push(boat3);

  const count = boats.length;
  for (let i = 0; i < count; i++) {
    const boat = boats[i];
    const color = boat.color;
    const year = boat.year;
    const forSale = boat.forSale;
    output(`The color is ${color}<br>`);
    output(`The year is ${year}<br>`);
    output(`Is the boat for sale? ${forSale}<br>`);
  }
}
