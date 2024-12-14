class Column {
  openingTag = "<div class='col'>";
  closingTag = "</div>";
  innerHTML = "";

  info(columnNumber) {
    console.log("The column number is " + columnNumber);
  }

  content() {
    console.log("The content is: " + this.innerHTML);
  }

  constructor(content = "") {
    this.innerHTML = content;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
// BOOTSTRAP GRID SYSTEM WITH 1 ROW AND 3 COLUMNS WITH TEXT IN EACH COLUMN.
function practice1() {
  debugger;

  const gridSystem = `<div class="container">
            <div class="row">
              <div class="col">COLUMN 1</div>
              <div class="col">COLUMN 2</div>
              <div class="col">COLUMN 3</div>
            </div>
          </div>`;
  output(gridSystem);
}

// BOOTSTRAP GRID SYSTEM WITH 1 ROW AND A LOOP THAT ADDS 3 COLUMNS WITH TEXT.
function practice2() {
  debugger;

  let columns = "";
  for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
    columns += `<div class="col">COLUMN ${columnNumber}</div>`;
  }

  const gridSystem = `
    <div class="container">
      <div class="row">
        ${columns}
      </div>
    </div>`;

  output(gridSystem, "outputTag2");
}

// BOOTSTRAP GRID SYSTEM WITH 3 ROWS AND LOOP TO ADD 3 COLUMNS TO EACH ROW WITH TEXT.
function practice3() {
  debugger;

  let rows = "";
  for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
    let columns = "";

    for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
      columns += `<div class="col">COLUMN ${columnNumber}</div>`;
    }

    rows += `<div class="row">${columns}</div>`;
  }

  const gridSystem = `
    <div class="container">
      ${rows}
    </div>`;

  output(gridSystem, "outputTag3");
}

// USE PROPERTIES OF COLUMN OBJECT,
// USE LOOP TO CREATE BOOTSTRAP GRID SYSTEM WITH 3 ROWS.
// USE LOOP TO ADD 3 COLUMNS TO EACH ROW WITH SOME TEXT.
function practice4() {
  debugger;

  let rows = "";
  for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
    let columns = "";

    for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
      const column = new Column();
      column.info(columnNumber);
      column.innerHTML = `COLUMN ${columnNumber}`;
      column.content();
      columns += `${column.openingTag}${column.innerHTML}${column.closingTag}`;
    }

    rows += `<div class="row">${columns}</div>`;
  }

  const gridSystem = `
    <div class="container">
      ${rows}
    </div>`;

  output(gridSystem, "outputTag4");
}

// USE constructor AND toString METHOD TO OUTPUT ALL OBJECT PROPERTIES.'
// ADD LOOP TO DISPLAY BOOTSTRAP GRID SYSTEM WITH 3 ROWS
// ADD LOOP TO ADD 3 COLUMNS TO EACH ROW WITH TEXT.
function practice5() {
  debugger;

  let rows = "";
  for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
    let columns = "";
    for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
      const column = new Column(`COLUMN ${columnNumber}`);
      columns += column;
    }

    rows += `<div class="row">${columns}</div>`;
  }

  const gridSystem = `
    <div class="container">
        ${rows}
    </div>`;

  output(gridSystem, "outputTag5");
}
