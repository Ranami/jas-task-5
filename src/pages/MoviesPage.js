import { useEffect, useState } from "react";
import { Container, Pagination } from "@mui/material";
import ImgMediaCard from "../components/ImgMediaCard";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    total_pages: 0,
  });

  function searchMovies(page = 1, sortBy) {}

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  function searchMovies() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&page=1&include_adult=false&query=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      searchMovies();
    }
  }

  return (
    <Container maxWidth="xl">
      <div className="search_block">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button variant="contained" onClick={searchMovies}>
          Поиск
        </Button>
      </div>

      <h1>Movies</h1>

      <div className="movie_cards">
        {movies.map((movie) => (
          <ImgMediaCard movie={movie} key={movie.id} />
        ))}
      </div>
      <Pagination count={pageInfo.total_pages} />
    </Container>
  );
}
