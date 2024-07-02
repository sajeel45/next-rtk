"use client";
import { useEffect } from "react";
import { fetchApiUsers } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const dispatch = useDispatch();
  const usersData = useSelector((data) => data.usersData.userApiData);
  //   const updatedUsers = usersData.usersData.userApiData
  useEffect(() => {
    dispatch(fetchApiUsers());
  }, []);
  return (
    <>
      <h2>Users List from API</h2>

      {usersData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
}
