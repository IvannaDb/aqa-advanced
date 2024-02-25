import toDoFetcher from "./toDoFetcher.js"
import userFetcher from "./usersFetcher.js"

Promise.all([toDoFetcher.fetchTodo(), userFetcher.fetchUser()])
    .then(([todo, user]) => console.log('All result:', todo, user))
    .catch(error => console.error('Error:', error));

Promise.race([toDoFetcher.fetchTodo(), userFetcher.fetchUser()])
    .then(result => console.log('Race result:', result))
    .catch(error => console.error('Error:', error));