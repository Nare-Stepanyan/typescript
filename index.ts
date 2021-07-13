import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
 id: number,
 title: string,
 completed: boolean

}

axios.get(url).then((response)=>
{ const data = response.data as Todo;
         const id = data.id;
         const title = data.title;
         const completed = data.completed
    logData(id, title, completed);
})   


const logData =(id:number, title: string, completed: boolean)=>{
    console.log(`Id is: ${id}, 
    Title is: ${title},
    Is it completed? ${completed}
    `)
}