let selectBtn = document.getElementsByClassName("big-five-list-item");
selectBtn = Array.from(selectBtn);

selectBtn.forEach((button) => {
  button.addEventListener("click", () => {
    onClick(button.innerText);
  });
});

const onClick = (innerText) => {
  const newListItem = document.createElement("li");
  newListItem.innerText = innerText;
  newListItem.classList.add("spotted-animals-list-item");
  const destination = document.getElementById("spotted-animals-list");
  destination.appendChild(newListItem);
};

const removeFirstBtn = document.getElementById("remove-first-item-button");
removeFirstBtn.addEventListener("click", () => {
  deleteFirst();
});

const deleteFirst = () => {
  const destination = document.getElementById("spotted-animals-list");
  const child = destination.getElementsByTagName("li")[0];
  let removedItem = destination.removeChild(child);
};

const removeAllBtn = document.getElementById("remove-all-button");
removeAllBtn.addEventListener("click", () => {
  removeAll();
});

const removeAll = () => {
  let array = document.getElementsByClassName("spotted-animals-list-item");
  array = Array.from(array);
  const destination = document.getElementById("spotted-animals-list");

  array.forEach((item) => {
    const child = document.getElementsByClassName("spotted-animals-list-item")[0];
    let removedItem = destination.removeChild(child);
  });
};
