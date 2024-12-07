function output(message = "", outputTag = "outputTag", shouldAppend = true) {
  debugger;
  if (shouldAppend) window[outputTag].innerHTML += message;
  else window[outputTag].innerHTML = message;
}

function refresh() {
  outputTag.innerHTML = "";
  outputTag2.innerHTML = "";
  outputTag3.innerHTML = "";
}
