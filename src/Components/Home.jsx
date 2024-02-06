import React,{useState,useEffect} from 'react'
import Task from './Task'

const Home = () => {

    const intialsearch=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    const [tasks,setTasks]=useState(intialsearch);
    const [title,setTitle]=useState("");
    const [desription,setdesription]=useState("");
    const submitadder=(e)=> {
        e.preventDefault();
        setTasks([...tasks,{title,desription}]);
        setTasks("");
        setdesription("");
    };

    const deletetask=(index)=> {
        const filterarr=tasks.filter((val,i)=>{
            return i!==index;
        });
        console.log(filterarr);
        setTasks(filterarr);
    }

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks]);
  return (
    <div className="container">
        <h1>Welcome to the To-Dos</h1>
        <form onSubmit={submitadder}>
            <input type="text" placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder="Describe"
            value={desription}
            onChange={(e)=>setdesription(e.target.value)}></textarea>
            <button type="submit">ADD</button>
        </form>
    {tasks.map((item,index)=> (
        <Task key={index} title={item.title} description={item.description}
        deletetask={deletetask} index={index}/>
    ))}
    </div>
  )
}

export default Home