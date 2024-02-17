var inputName = document.getElementById("inputName");
var inputUrl = document.getElementById("inputUrl");
var listAdd = [];

if (localStorage.getItem("product") != null) {
  listAdd = JSON.parse(localStorage.getItem("product"));
  dasplayAdd();
}
function addInput() {
  var total = {
    name: inputName.value,
    source: inputUrl.value,
  };
  listAdd.push(total);
  localStorage.setItem("product", JSON.stringify(listAdd));
  dasplayAdd();
  clearInput();

  console.log(listAdd);
}
function dasplayAdd() {
  var cartona = "";
  for (var i = 0; i < listAdd.length; i++) {
    cartona += ` <tr>
    <td>${i}</td>
      <td>${listAdd[i].name}</td>

  <td>
  <a href="${listAdd[i].source}"> 
  <button class="btn btn-warning  btn-sm px-3"><i class="fa-regular fa-eye"></i>  Visti </button> 
  </a>
  </td>
      <td><button  onclick="deletItme(${i})"  class="btn btn-danger btn-sm px-3"> <i class="fa-solid fa-trash-can"></i>  Delet</button></td>
   </tr>`;
  }
  document.getElementById("tBody").innerHTML = cartona;
}
function deletItme(trem) {
  listAdd.splice(trem, 1);
  localStorage.setItem("product", JSON.stringify(listAdd));
  dasplayAdd();
}

function clearInput() {
  inputName.value = "";
  inputUrl.value = "";
}
