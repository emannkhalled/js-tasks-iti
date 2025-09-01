var userBody = document.getElementById("userBody");
var addForm = document.getElementById("addForm");
var editForm = document.getElementById("editForm");
var currentRow = null;

var apiUrl = "https://68b591b0e5dc090291af78c5.mockapi.io/users";


function createRow(user){
  var tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${user.id}</td>
    <td class="user-name">${user.fullName}</td>
    <td>${user.username}</td>
    <td>${user.role}</td>
    <td>${user.department}</td>
    <td class="actions">
      <a class="edit" onclick="openEdit(this)">^</a>
      <a class="delete" onclick="removeRow(this)">X</a>
    </td>
  `;

 
  tr.querySelector(".user-name").onclick = function(e){
    Array.from(userBody.rows).forEach(r=>r.classList.remove("selected"));
    tr.classList.add("selected");
    goToProfile(user);
    e.stopPropagation();
  }

  userBody.appendChild(tr);
}


function loadUsers(){
  userBody.innerHTML = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);
  xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status < 300){
      var data = JSON.parse(xhr.responseText);
      data.forEach(u => createRow(u));
    } else { alert("Failed to load users: "+xhr.status); }
  };
  xhr.onerror = function(){ alert("Network error while loading users."); };
  xhr.send();
}


function goToProfile(user){
  function setCookie(n,v){ document.cookie = n+"="+encodeURIComponent(v)+"; path=/"; }
  setCookie("user_id", user.id);
  setCookie("user_fullName", user.fullName);
  setCookie("user_username", user.username);
  setCookie("user_role", user.role);
  setCookie("user_department", user.department);
  setCookie("user_img", "https://via.placeholder.com/100");
  window.open("profile.html", "_blank");
}

document.getElementById("addUserForm").onsubmit = function(e){
  e.preventDefault();
  var fullName = document.getElementById("addFullName").value.trim();
  var username = document.getElementById("addUsername").value.trim();
  var role = document.getElementById("addRole").value.trim();
  var dept = document.getElementById("addDepartment").value.trim();

  if(!fullName || !username || !role || !dept){ alert("All fields required"); return; }

  var xhr = new XMLHttpRequest();
  xhr.open("POST", apiUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status < 300){
      createRow(JSON.parse(xhr.responseText));
      addForm.style.display = "none";
      document.getElementById("addUserForm").reset();
      alert("User added successfully!");
    } else { alert("Failed to add user: "+xhr.status); }
  };
  xhr.send(JSON.stringify({fullName, username, role, department: dept}));
}


function openEdit(el){
  currentRow = el.parentNode.parentNode;
  editForm.style.display = "block";
  document.getElementById("editFullName").value = currentRow.cells[1].innerText;
  document.getElementById("editUsername").value = currentRow.cells[2].innerText;
  document.getElementById("editRole").value = currentRow.cells[3].innerText;
  document.getElementById("editDepartment").value = currentRow.cells[4].innerText;
}

document.getElementById("editUserForm").onsubmit = function(e){
  e.preventDefault();
  var fullName = document.getElementById("editFullName").value.trim();
  var username = document.getElementById("editUsername").value.trim();
  var role = document.getElementById("editRole").value.trim();
  var dept = document.getElementById("editDepartment").value.trim();
  if(!fullName || !username || !role || !dept){ alert("All fields required"); return; }

  var id = currentRow.cells[0].innerText;
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", apiUrl+"/"+id, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status < 300){
      currentRow.cells[1].innerText = fullName;
      currentRow.cells[2].innerText = username;
      currentRow.cells[3].innerText = role;
      currentRow.cells[4].innerText = dept;
      cancelEdit();
      alert("User updated successfully!");
    } else { alert("Failed to update user: "+xhr.status); }
  };
  xhr.send(JSON.stringify({fullName, username, role, department: dept}));
}


function removeRow(el){
  if(confirm("Delete this user?")){
    var id = el.parentNode.parentNode.cells[0].innerText;
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", apiUrl+"/"+id, true);
    xhr.onload = function(){
      if(xhr.status >= 200 && xhr.status < 300){
        userBody.removeChild(el.parentNode.parentNode);
      } else { alert("Failed to delete user: "+xhr.status); }
    };
    xhr.send();
  }
}


function cancelAdd(){ addForm.style.display="none"; }
function cancelEdit(){ editForm.style.display="none"; }


document.getElementById("loadUsersBtn").onclick = loadUsers;
document.getElementById("showAddBtn").onclick = ()=> addForm.style.display="block";



document.getElementById("searchInput").onkeyup = function(){
  var filter = this.value.toLowerCase();
  Array.from(userBody.rows).forEach(row=>{
    var match = false;
    for(var j=1;j<=4;j++){ if(row.cells[j].innerText.toLowerCase().includes(filter)) match=true; }
    row.style.display = match ? "" : "none";
  });
};


loadUsers();
