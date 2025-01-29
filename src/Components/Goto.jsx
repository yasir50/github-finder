import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Card
        sx={{
          minWidth: 345,
          boxShadow: 12,
          borderRadius: 0,
        }}
      >
        <CardActionArea onClick={() => navigate("/dashboard")}>
          <CardContent>
            <Typography variant="outlined" fontWeight="bold">
              Go to Dashboard
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
