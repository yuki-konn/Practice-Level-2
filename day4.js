function handleSubmit(event = new Event()) {
  event.preventDefault();
  debugger;
  const inputs = event.target;
  const redInput = inputs[0];
  const greenInput = inputs[1];
  const blueInput = inputs[2];
  const whiteInput = inputs[3];

  const redChecked = redInput.checked;
  const greenChecked = greenInput.checked;
  const blueChecked = blueInput.checked;
  const whiteChecked = whiteInput.checked;

  // manual output
  output("<hr>");
  output("<b><u>Manual Color Checks</u></b><br>");
  output(`redChecked: ${redChecked}<br>`);
  output(`greenChecked: ${greenChecked}<br>`);
  output(`blueChecked: ${blueChecked}<br>`);
  output(`whiteChecked: ${whiteChecked}<br>`);

  // Loop to display name property
  output(
    "<br><b><u>All radio button Name properties</u></b><br>",
    "outputTag1"
  );
  const count = inputs.length;
  for (let i = 0; i < count; i++) {
    const radioInput = inputs[i];
    const name = radioInput.name;
    output(`${name}, `, "outputTag1");
  }

  // Loop to display value property
  output(
    "<br><b><u>All radio button Value properties</u></b><br>",
    "outputTag2"
  );
  for (let i = 0; i < count; i++) {
    const radioInput = inputs[i];
    const value = radioInput.value;
    output(`${value}, `, "outputTag2");
  }

  // Loop to display only checked radio buttons
  output("<br><b><u>Checked Radio Buttons</u></b><br>", "outputTag3");
  for (let i = 0; i < count; i++) {
    const radioInput = inputs[i];
    const value = radioInput.value;
    const isChecked = radioInput.checked;
    if (isChecked) output(`${value}<br>`, "outputTag3");
  }

  // Loop to display only checked data types
  output("<br><b><u>Checked Data Type</u></b><br>", "outputTag4");
  for (let i = 0; i < count; i++) {
    const radioInput = inputs[i];

    const value = radioInput.value;
    const name = radioInput.name;

    const isChecked = radioInput.checked;
    const isDataType = name === "dataType";

    if (isChecked && isDataType) {
      output(`${value}<br>`, "outputTag4");
    }
  }
}
