const BASE_URL = 'https://jsonplaceholder.typicode.com/'

function fetchTodo() {
    return fetch(BASE_URL + 'todos/1')
        .then(response => response.json());
}
    // .then(data => {
    //     console.log('GET Response of Todo:', data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // })

function fetchUser () {
    return fetch (BASE_URL+'users/1')
    .then (response => response.json())
}
    // .then (data => {
    //     console.log ('GET Responce of User:', data)
    // })
    // .catch(e=> {
    //     console.e ('Error:', e)
    // })

    
    Promise.all([
        fetch(BASE_URL+'todos/1').then(response => response.json()),
        fetch(BASE_URL+'users/1').then(response => response.json())
    ])
    .then(data => {
        console.log('Response from promise.all', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

      Promise.race([
        fetch(BASE_URL+'todos/1').then(response => response.json()), 
        fetch(BASE_URL+'users/1').then(response => response.json())
    ])
    .then(data => {
        console.log('Responce from promise.race', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });