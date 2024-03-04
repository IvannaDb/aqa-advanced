const BASE_URL = 'https://jsonplaceholder.typicode.com/'
async function fetchTodoById(id) {
    const response = await fetch(BASE_URL+`todos/${id}`)
    const body = await response.json()
    return body;
}
async function fetchUserById(id) {
    const responce = await fetch (BASE_URL+`users/${id}`)
    const body = await responce.json()
    return body
}
Promise.all([
    fetchTodoById(3),
    fetchTodoById(5),
  ])
    .then((values) => console.log(values))
    .catch ((e) => console.log('Error:', e))
  
  Promise.race([
    fetchTodoById(3),
    fetchTodoById(5),
  ])
    .then((values) => console.log(values))
    .catch ((e) => console.log('Error:', e))