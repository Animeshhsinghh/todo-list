const inputText = document.getElementsByClassName("input-text");
const commentText = document.getElementById("comment-text");
const tableBody = document.getElementById("tableBody");
const addText = document.getElementsByClassName("btn");
addText[0].addEventListener("click", addFunc);
const clearListBtn = document.getElementsByClassName("btn");
clearListBtn[1].addEventListener("click", clearList);

let todoDataArr = [];

function addFunc() {
  todoDataArr.push([inputText[0].value, commentText.value]);
  // console.log(todoArr)
  let htmlStr = "";
  todoDataArr.map((todo, index) => {
    htmlStr += `
  <tr>
    <td>${index + 1}</td>
    <td>${todo[0]}</td>
    <td>${todo[1]}</td>
    <td>
      <button class="del-btn" onclick="delLine(${index})">delete</button>
    </td>
  </tr>
  `;
    tableBody.innerHTML = htmlStr;
  });
}

function clearList() {
  todoDataArr = [];
  tableBody.innerHTML = "";
}

function delLine(pos) {
  let x = todoDataArr.filter((val, i) => i !== pos);
  todoDataArr = x;

  if (todoDataArr.length === 0) {
    clearList();
  } else {
    let htmlStr = "";
    todoDataArr.map((todo, index) => {
      htmlStr += `
        <tr>
          <td>${index + 1}</td>
          <td>${todo[0]}</td>
          <td>${todo[1]}</td>
          <td>
            <button class="del-btn" onclick="delLine(${index})">delete</button>
          </td>
        </tr>
  `;
      tableBody.innerHTML = htmlStr;
    });
  }
}
