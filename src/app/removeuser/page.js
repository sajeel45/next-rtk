"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";
export default function Page() {
  const usersData = useSelector((data) => data);
  const updatedData = usersData.usersData.users
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Remove User Page</h1>
      {updatedData.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}
