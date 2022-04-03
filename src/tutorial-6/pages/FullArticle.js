import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {posts} from "./Home";

export default function FullArticle() {
  let { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(obj => obj.id === Number(id));

  React.useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  }, []);

  if (!post) {
    return <h1>Статья не найдена :(</h1>;
  }

  return(
    <div className="full-post">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt='image post' />
      <p>{post.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  )
}