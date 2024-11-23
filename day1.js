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

function practice2() {
  const boat = ["blue", 2024, false];
  let position = 0;
  for (position = 0; position < boat.length; position++) {
    output(`${boat[position]}, `);
  }
}

function practice3() {
  const soldier1 = {
    gender: "male",
    age: 25,
    deployed: true,
  };
  const soldier2 = {
    gender: "female",
    age: 26,
    deployed: true,
  };
  const soldier3 = {
    gender: "male",
    age: 27,
    deployed: false,
  };

  const soldiers = [soldier1, soldier2, soldier3];

  debugger;
  let position = 0;
  for (position = 0; position < soldiers.length; position++) {
    const soldierString = JSON.stringify(soldiers[position]);
    output(`<br>${soldierString}<br>`);
  }
}

function refresh() {
  outputTag.innerHTML = "";
}
