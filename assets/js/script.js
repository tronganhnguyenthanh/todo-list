let todos = []
document.querySelector(".btn.btn-primary").addEventListener("click", function(){
 let value = document.querySelector(".form-custom-control").value
 todos.push(value)
 getTodoList(todos)
 document.querySelector(".form-custom-control").value = ""
})

function getTodoList(todos){
  let todo = "<div class='row p-2'>"
   todos.forEach(function(output){
    todo += `<div class="col-lg-12 col-md-12 col-sm-12">
      <div class="card mt-2">
        <div class="d-flex justify-content-center">
          <h1 class="text-center text-secondary">${output}</h1>
          <button class="btn btn-success m-2" onclick="isCompleted('${output}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
            </svg>
          </button>
          <button class="btn btn-danger m-2" onclick="deleteToDoList()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>`
   })
  todo += "</div>"
  document.querySelector("#todoList").innerHTML = todo
}

function isCompleted(output){
 document.querySelector("#todoList").innerHTML = `
  <del class="d-flex justify-content-center">
   <h1 class="text-center text-info">${output}</h1>
  </del>
 `
}

document.querySelector(".btn.btn-secondary").addEventListener("click", function(){
 getTodoList(todos)
})

function deleteToDoList(index){
  todos.splice(index, 1)
  getTodoList(todos)
}