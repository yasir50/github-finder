import { useParams } from "react-router-dom";
import { products } from "../Products/ProductsData";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const filterData = products.filter((item, index) => {
    return id == item.id;
  });
  console.log(filterData);

  return (
    <>
      {filterData &&
        filterData.map((item, index) => {
          return (
            <div key={index}>
              <Card
                sx={{ maxWidth: 345, margin: "auto", boxShadow: 6, padding: 2 }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {item.id}
                    </Avatar>
                  }
                  title={item.title}
                  subheader={"Category: " + item.category}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt="Paella dish"
                  sx={{ borderRadius: 5 }}
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                  <div style={{ marginTop: "12px" }}>
                    <Rating
                      name="read-only"
                      value={item.rating.rate}
                      readOnly
                    />
                    <Typography
                      variant="overline"
                      sx={{ display: "block", float: "right" }}
                    >
                      ${item.price}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </>
  );
}
