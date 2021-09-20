//challenge1
// clicking either acceptt or decline button will remove
// connection request element
var requestNum = document.querySelector("#request-number");
var connectedNum = document.querySelector("#connected-number");

console.log(requestNum.innerText, connectedNum.innerText);

function removeList(element1, element2) {
  // to delete only inside the list1 or list2 not the whole element
  // because if we rremove the whole element it will give an error that the list1 is undefined when we already remove it.
  if (element1 == list1) {
    if (element2 === accepted1) {
      let num = parseInt(connectedNum.innerText);
      connectedNum.innerText = num + 1;
    }
    requestNum.innerText = parseInt(requestNum.innerText) - 1;
    list1.innerHTML = "";
  } else if (element1 == list2) {
    if (element2 === accepted2) {
      let num = parseInt(connectedNum.innerText);
      connectedNum.innerText = num + 1;
    }
    requestNum.innerText = parseInt(requestNum.innerText) - 1;
    list2.innerHTML = "";
  }
}

function changeText(element) {
  element.innerText = "Nuanjan Piamarun";
}
