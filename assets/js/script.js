let todos = []
document.querySelector(".btn.btn-primary").addEventListener("click", function(){
 let value = document.querySelector(".form-custom-control").value
 if(value === ""){
  document.querySelector("#errorMessage").innerHTML = `<p class="text-center text-danger">Please enter your to do list</p>`
  return false
 }else{
   document.querySelector("#errorMessage").innerHTML = ""
   todos.push(value)
   getTodoList(todos)
   document.querySelector(".form-custom-control").value = "" 
 }
})

function getTodoList(todos){
  let todo = "<div class='row p-2'>"
   todos.forEach(function(output){
    todo += `<div class="col-lg-12 col-md-12 col-sm-12">
      <div class="card mt-2">
        <div class="d-flex justify-content-center">
          <h1 class="text-center text-secondary">${output}</h1>
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

// Delete todo list
function deleteToDoList(index){
  swal({
   title:"Are you sure you want to delete this to do list ?",
   icon:"warning",
   buttons:true,
   dangerMode:true,
  })
  .then((willDelete) => {
    if(willDelete) {
     setTimeout(function(){
      todos.splice(index, 1)
      getTodoList(todos)
     },1000)
    }
  });
}

function filterActivities(){
  let value = document.querySelector(".form-custom-control").value
  let filterTodo = todos.filter((i) => i?.includes(value))
  getTodoList(filterTodo)
}

document.querySelector(".form-custom-control").addEventListener("change", function(){
  // Reset to do list
  let value = document.querySelector(".form-custom-control").value
  if(value === ""){
   getTodoList(todos)
  }
})
