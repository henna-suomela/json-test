import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import "./styles.css";

function App() {
  const [posts, setPosts] = useState([]);
  const urlPosts = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(urlPosts)
      .then((res) => {
        if (!res.ok) {
          return Error("Can't get the data required.");
        }
        return res.json();
      })
      .then((data) => setPosts(data));
  });
  return (
    <div className="App">
      <Heading />
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <h3>
            <em>{post.title}</em>:
          </h3>
          {post.body}
        </div>
      ))}
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);