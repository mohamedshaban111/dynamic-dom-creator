let l = console.log;

document.forms[0].onsubmit = function (e) {
  e.preventDefault(); // prevent page reload

  // Get fresh values inside the handler
  let dubNum = +this.elements.value;
  let word = this.texts.value;
  let type_ele = this.type.value;

  let results = this.querySelector(".results");
  results.innerHTML = ""; // clear old results

  for (let i = 0; i < dubNum; i++) {
    let myElement = document.createElement(type_ele.toLowerCase());
    myElement.className = "box";
    myElement.title = "Element";
    myElement.id = `id-${i}`;
    myElement.textContent = word;

    results.appendChild(myElement);
  }
};
