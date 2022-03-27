import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function ImgMediaCard({ movie }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background: `linear-gradient(rgba(0,0,0,0.4),
        rgba(0,0,0,0.4)),url(${
          "https://image.tmdb.org/t/p/original" + movie.poster_path
        })`,
        color: "#ffffff",
        backgroundSize: "cover",
        position: "relative",
      }}
      className="movie_card"
    >
      <CardContent
        style={{
          position: "absolute",
          bottom: 0,
          textShadow: "1px 1px 1px #000",
          marginLeft: "10px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="span"
          style={{
            color: "#0FEFFD",
            backgroundColor: "#000000",
            borderTopLeftRadius: "3px",
            borderBottomRightRadius: "3px",
          }}
        >
          {movie.genre_ids[0]}
          <br />
        </Typography>
        <Rating
          name="read-only"
          value={(movie.vote_average / 10) * 5}
          readOnly
        />
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
