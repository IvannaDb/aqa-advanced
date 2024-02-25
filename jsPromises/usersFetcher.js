export default class userFetcher {
    static async fetchUser() {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            return await response.json();
        }
        catch (e){
            console.log ('Error fetching users:', e)
        }
    }
}