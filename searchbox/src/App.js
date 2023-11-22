import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./components/card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [debounceTime, setDebounceTime] = useState(null);

  useEffect(() => {
    clearTimeout(debounceTime);

    setDebounceTime(
      setTimeout(() => {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/posts" +
              (search ? "?userId=" + search : "")
          )
          .then((res) => res.data)
          .then((data) => setPosts(data));
      }, 300)
    );
  }, [search]);

  function handleOnChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        value={search}
        label="Search for posts"
        variant="outlined"
        margin="normal"
        onChange={handleOnChange}
      />
      {!posts.length ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item xs={12} md={4} lg={3} key={`${post.userId}-${post.id}`}>
              <PostCard
                title={post.title}
                userId={post.userId}
                body={post.body}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default App;
