export default class ToDoFetcher {
    static async fetchTodo() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            return await response.json();
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
    }
}