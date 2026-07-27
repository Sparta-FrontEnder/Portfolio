import {useState} from 'react';
import './todoList.css';

const TodoList = () => {
const [task, setTask] = useState('');
const [submitTask, setSubmitTask] = useState([]);

const handleSubmit = () => {
  if(task){
    setSubmitTask(preTask => [...preTask, task]);
    setTask('');
  }
}

const handleKeyPress = (e) => {
  if(e.key === 'Enter'){
    handleSubmit();
  }
}

const handleDelete = (index) =>{
  setSubmitTask(preTask => preTask.filter((_, i) => i !== index));
}

  return (
    <div>
        <input 
        type="text" 
        placeholder='Please Enter Task'
        value={task}
        onChange={(e)=>{setTask(e.target.value)}}
        onKeyDown={handleKeyPress}
        />
        <button onClick={handleSubmit}>Submit</button>
        <br></br>


        <div>
        <h3>Task</h3>
        <ul>
            {submitTask.map((todo, index)=>(
              <li className = "taskItems" key={index}>
                {todo}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
            
        </ul>
        </div>
    </div>
  )
}

export default TodoList
