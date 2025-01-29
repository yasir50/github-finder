import React, { useEffect, useState } from "react";
import Card from "./UserCard";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function User() {
  const [userData, setUserData] = useState(null);
  const getData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        rowGap: "40px",
        columnGap: "40px",
        justifyContent: "center",
      }}
    >
      {userData ? (
        userData.map((item, index) => {
          return <Card userName={item.name} email={item.email} id={item.id} />;
        })
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
