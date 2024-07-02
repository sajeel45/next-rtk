"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos } from "../redux/todoSlice"

export default function Page(){
    const [todo,setTodo] = useState("")
    const dispatch = useDispatch()
    const todoData = useSelector((data)=>data)
    console.log(todoData);
    const todoDispatch = () =>{
        dispatch(addTodos(todo))
    }

    return(
        <div>
            <h3>Add Todos</h3>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter Todo Item" />
            <button onClick={todoDispatch}>Add</button>
        </div>
    )
}