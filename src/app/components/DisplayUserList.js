"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";
export default function DisplayUsers() {
  const usersData = useSelector((data) => data);
  const updatedData = usersData.usersData.users
  // console.log("User Data",usersData.usersData.users);
  const dispatch = useDispatch();

  return (
    <div className="user-list">
      <h3>Users List</h3>
      {updatedData.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}
