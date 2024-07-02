import Image from "next/image";
import styles from "./page.module.css";
import AddUser from "./components/Adduser";
import DisplayUsers from "./components/DisplayUserList";

export default function Home() {
  return (
    <>
    <AddUser />
    <br />
    <DisplayUsers />
    </>
  );
}
