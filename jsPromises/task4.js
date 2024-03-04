import ToDoFetcher from "./toDoFetcher.js"
import UserFetcher from "./usersFetcher.js"

Promise.all([ToDoFetcher.fetchTodo(), UserFetcher.fetchUser()])
    .then(([todo, user]) => console.log('All result:', todo, user))
    .catch(error => console.error('Error:', error));

Promise.race([ToDoFetcher.fetchTodo(), UserFetcher.fetchUser()])
    .then(result => console.log('Race result:', result))
    .catch(error => console.error('Error:', error));