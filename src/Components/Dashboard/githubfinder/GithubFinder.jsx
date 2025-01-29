import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import axios from "axios";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function GithubFinder() {
  const [userData, setUserData] = useState(null);
  const [searchData, setSearchData] = useState("");
  const getData = async () => {
    searchData === ""
      ? alert("Empty Input")
      : await axios
          .get(`https://api.github.com/users/${searchData}`)
          .then((res) => setUserData(res.data))
          .catch((e) => alert(e.status));
    setSearchData("");
  };

  return (
    <>
      {/* text field */}
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          mb: 5,
          display: "flex",
          alignItems: "center",
          width: "70%",
          justifySelf: "center",
          boxShadow: 6,
          borderRadius: 1,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search github user"
          onChange={(e) => setSearchData(e.target.value)}
          value={searchData}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={getData}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* Card */}
      {userData && (
        <Box
          sx={{
            width: "70%",
            justifySelf: "center",
          }}
        >
          <Card
            orientation="horizontal"
            sx={{
              width: "100%",
              flexWrap: "wrap",
              overflow: "auto",
              boxShadow: "20px",
              borderRadius: 6,
            }}
          >
            <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
              <img src={userData.avatar_url} />
            </AspectRatio>
            <CardContent>
              <Typography sx={{ fontSize: "xl", fontWeight: "lg" }}>
                {userData.login}
              </Typography>
              <Typography
                level="body-sm"
                textColor="text.tertiary"
                sx={{ fontWeight: "lg" }}
              >
                {userData.updated_at}
              </Typography>
              <Sheet
                sx={{
                  bgcolor: "background.level2",
                  borderRadius: "sm",
                  p: 1.5,
                  my: 1.5,
                  display: "flex",
                  gap: 2,
                  "& > div": { flex: 1 },
                }}
              >
                <div>
                  <Typography level="body-xs" sx={{ fontWeight: "lg" }}>
                    Id
                  </Typography>
                  <Typography sx={{ fontWeight: "lg" }}>
                    {userData.id}
                  </Typography>
                </div>
                <div>
                  <Typography level="body-xs" sx={{ fontWeight: "lg" }}>
                    Followers
                  </Typography>
                  <Typography sx={{ fontWeight: "lg" }}>
                    {userData.followers}
                  </Typography>
                </div>
                <div>
                  <Typography level="body-xs" sx={{ fontWeight: "lg" }}>
                    Following
                  </Typography>
                  <Typography sx={{ fontWeight: "lg" }}>
                    {userData.following}
                  </Typography>
                </div>
              </Sheet>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
}
