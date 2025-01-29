import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  CircularProgress,
} from "@mui/material";

export default function UserDetails() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const getData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUserData(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(userData);
  return (
    <>
      {userData ? (
        <Card
          sx={{
            maxWidth: 600,
            margin: "auto",
            padding: 5,
            boxShadow: 10,
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {userData.name}
            </Typography>
            <Typography variant="overline" color="text.secondary">
              User name: {userData.username}
            </Typography>
            <Typography
              variant="overline"
              color="text.secondary"
              sx={{ display: "block" }}
            >
              Company: {userData.company.name}
            </Typography>
            <Typography
              variant="overline"
              color="text.secondary"
              sx={{ display: "block" }}
            >
              City: {userData.address.city}
            </Typography>

            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Contact Us:
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  marginTop: "12px",
                  justifyContent: "space-around",
                }}
              >
                <Chip
                  label={userData.email}
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  label={userData.phone}
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  label={userData.website}
                  color="primary"
                  variant="outlined"
                />
              </Box>
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}
