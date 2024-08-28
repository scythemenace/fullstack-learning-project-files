let state = {
  counter: 0,
};

const onButtonPress = () => {
  state.counter++;
  reRenderButton();
};

const reRenderButton = () => {
  document.getElementById("button_parent").innerHTML = ""; // removes the innerHTML content of the div plus all its children
  const component = buttonComponent(state.counter);
  document.getElementById("button_parent").appendChild(component);
};

const buttonComponent = (count) => {
  const button = document.createElement("button");
  button.innerHTML = "Count " + count;
  button.setAttribute("onClick", "onButtonPress()");
  return button;
};

reRenderButton();
