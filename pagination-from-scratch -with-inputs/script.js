import { totalItems } from "./form.js";
import { itemsPerPage } from "./form.js";



console.log(totalItems)


const previousBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageList = document.getElementById("paginated-list");
// const listItems = pageList.querySelectorAll("li");
const newBtns = document.getElementById("new-btns");



console.log(listItems);
// const itemsPerPage = 10;
const noOfBtn = Math.ceil(totalItems / itemsPerPage);
const pageCount = Math.ceil(totalItems / itemsPerPage);
let currentPage;
// let pageId;
let pageNo;

const appendListItems = () => {
  let ul = document.createElement("ul");
  for (let i = 0; i < totalItems; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(`${item + i}`);
    li.appendChild(text);
    ul.appendChild(li);
  }
};

appendListItems();

for (let i = 1; i <= noOfBtn; i++) {
  let button = document.createElement("button");
  let text = document.createTextNode(i);
  button.setAttribute("id", i);
  button.className = "btnClass";
  console.log(button.id);
  button.appendChild(text);
  button.addEventListener("click", () => {
    pageNo = button.id;
    setCurrentPage(pageNo);
    // handleButtonsStatus()
  });
  newBtns.appendChild(button);
}

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handleButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(previousBtn);
  } else {
    enableButton(previousBtn);
  }

  if (pageCount === currentPage) {
    disableButton(nextBtn);
  } else {
    enableButton(nextBtn);
  }
};

const handleActivePageNumber = () => {
  listItems.forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("i"));
    // console.log(pageIndex);
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const setCurrentPage = (pageNo) => {
  currentPage = pageNo;
  console.log(currentPage);

  handleButtonsStatus();
  handleActivePageNumber();

  startindex = (pageNo - 1) * itemsPerPage;
  endindex = pageNo * itemsPerPage;

  listItems.forEach((item, pageNo) => {
    item.classList.add("hidden");
    if (pageNo >= startindex && pageNo < endindex) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", function () {
  setCurrentPage(1);
  // showPage(pageNo);
  previousBtn.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextBtn.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".btnClass").forEach((button) => {
    const pageNo = Number(button.getAttribute("id"));
    if (pageNo) {
      button.addEventListener("click", () => {
        console.log("last thing");
        setCurrentPage(pageNo);
      });
    }
  });
});
