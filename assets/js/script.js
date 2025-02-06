let baseUrl = "https://jsonplaceholder.typicode.com"
let endpoint = "todos"
let todos = []
async function getTodoList(){
  let res = await fetch(`${baseUrl}/${endpoint}`)
  let todoList = await res?.json()
  getTodoItem(todoList)
}
getTodoList()
// Delete todo list
function deleteToDoList(){
  let listEle = document.querySelector(".row > .col-lg-12.col-md-12.col-sm-12")
  swal({
   title:"Are you sure you want to delete this to do list ?",
   icon:"warning",
   buttons:true,
   dangerMode:true,
  })
  .then((willDelete) => {
   if(willDelete){
    listEle.remove()
   }
  })
}
 // Get todo item
 function getTodoItem(i){
  let todo = "<div class='row p-2'>"
   i?.forEach(function(output){
    todo += `<div class="col-lg-12 col-md-12 col-sm-12">
     <div class="card mt-2">
       <div class="d-flex justify-content-center">
         <h1 class="text-center text-info text-truncate">${output.completed ? `<del>${output?.title}</del>` : `<h2 class="text-danger align-middle">${output?.title}</h2>`}</h1>
         <button class="btn btn-danger m-2" onclick="deleteToDoList()">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
             <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
           </svg>
          </button>
      </div>
    </div>
   </div>
   `
   })
  todo += "</div>"
  document.querySelector("#todoList").innerHTML = todo
 }
 
 function getSelectTodoList(){
   fetch(`${baseUrl}/${endpoint}`)
   .then(function(res){
     return res?.json()
   })
  .then(function(i){
     todos = i?.slice(0, 100)
     let select = "<select class='form-custom-control form-control' onchange='filterTodoList(this.value)'>"
      todos?.forEach(function(i){
       select += `<option value=${i?.id}>${i?.title}</option>`
      })
     select += "</select>"
     document.querySelector("#filter").innerHTML = select
  })
 }
 getSelectTodoList()

 async function filterTodoList(id){
  let res = await fetch(`${baseUrl}/${endpoint}?id=${id}`)
  let filterTodo = await res?.json()
  getTodoItem(filterTodo)
 }