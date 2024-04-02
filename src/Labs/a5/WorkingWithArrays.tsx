import axios from "axios";
import { useEffect, useState } from "react";
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithArrays() {
    const API = `${API_BASE}/a5/todos`;
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });

    const [todos, setTodos] = useState<any[]>([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const removeTodo = async (todo: { id: any; }) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
      };
    const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
    };
    const fetchTodoById = async (id: any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
      }; 
    
    const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
    };
    
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
      };    

    const deleteTodo = async (todo: { id: any; }) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
    };

    const updateTodo = async () => {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      };
    
    
    
    useEffect(() => {
        fetchTodos();
    }, []);

    
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Fetching Todos</h4>
        <input type="number" value={todo.id}    onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })} />
        <input value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
        <input value={todo.description} type="text'" onChange={(e) => setTodo({ ...todo,
          description: e.target.value })} />
        <input value={todo.due} type="date"
            onChange={(e) => setTodo({
            ...todo, due: e.target.value })} />
        <label>
            <input type="checkbox"
            onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })} /> Completed
        </label>
        <br/>
        <button className="btn btn-danger me-1 mb-1" onClick={postTodo}> Post Todo </button>
        <button className="btn btn-success mb-1" onClick={updateTodo}>
            Update Todo
        </button>
        <br/>
        <button className="btn btn-primary" onClick={createTodo} >
            Create Todo
        </button>
        <button className="btn btn-success ms-1" onClick={updateTitle} >
            Update Title
        </button>
        <ul>
            {todos.map((todo) => (
            <li className="d-flex flex-row column-gap-3" key={todo.id}>
                {todo.title}
                <button className="btn btn-danger my-1" onClick={() => removeTodo(todo)} >
                    Remove
                </button>
                <button onClick={() => deleteTodo(todo)}
                    className="btn btn-danger float-end my-1">
                    Delete
                </button>
                <button className="btn btn-success my-1" onClick={() => fetchTodoById(todo.id)} >
                    Edit
                </button>
                <input checked={todo.completed}
                type="checkbox" readOnly />
                <p>{todo.description}</p>
                <p>{todo.due}</p>
            </li>
            ))}
        </ul>
        <h4>Retrieving Arrays</h4>
        <a href={API}>
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input type="number" value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: parseInt(e.target.value) })}/>
        <a href={`${API}/${todo.id}`}>
            Get Todo by ID
        </a>
        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}>
            Get Completed Todos
        </a>
        <h3>Creating new Items in an Array</h3>
        <a href={`${API}/create`}>
            Create Todo
        </a>
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}>
            Delete Todo with ID = {todo.id}
        </a>

        <h3>Updating an Item in an Array</h3>
        <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/>
        <a href={`${API}/${todo.id}/title/${todo.title}`} >
            Update Title to {todo.title}
        </a>

        <h3>Modifying Todo Completion</h3>
        <a href={`${API}/${todo.id}/completed/${todo.completed}`}>
            Change Todo Completed 
        </a>
        <input type="checkbox" 
            onChange={(e) => setTodo({ ...todo,
                completed: e.target.value !== 'true' })} />

        <h3>Modifying Todo Description</h3>
            <a href={`${API}/${todo.id}/description/${todo.description}`}>
                Update Todo Description
            </a>
            <input type="text" 
                onChange={(e) => setTodo({ ...todo,
                    description: e.target.value })}
                value={todo.description}/>
      </div>
    );
  }
  export default WorkingWithArrays;