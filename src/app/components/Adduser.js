"use client"
import { useState } from "react"
import { addUser } from "../redux/slice"
import { useDispatch } from "react-redux"
import Link from "next/link"

export default function AddUser(){
    const [name,setName] = useState("")
    const dispatch = useDispatch()
    const userDispatch = () => {
        dispatch(addUser(name))
    }
    return(
        <div className="add-user">
            <h3>Add User</h3>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter User" />
            <button onClick={userDispatch}>ADD</button>
            <Link href={"/removeuser"}>Remove User</Link>
            <br />
            <br />
            <Link href={"/todolist"}>Todo List</Link>
            <br />
            <Link href={"/apiusers"}>Users Api</Link>
        </div>
    )
}