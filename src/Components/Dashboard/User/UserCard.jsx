import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserCard({ userName, email, id }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 500,
        minWidth: 500,
        minHeight: 320,
        textAlign: "center",
        justifyItems: "center",
        alignContent: "center",
        borderRadius: 1,
        boxShadow: 4,
      }}
    >
      <Avatar
        sx={{
          bgcolor: "#f2f2f2",
          height: 100,
          width: 100,
          marginBottom: "12px",
        }}
        src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
      ></Avatar>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {userName}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {email}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "26px" }}>
        <Button
          variant="outlined"
          size="small"
          sx={{ width: "200px" }}
          onClick={() => {
            navigate(`/dashboard/user_dashboard/userdetails/${id}`);
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
