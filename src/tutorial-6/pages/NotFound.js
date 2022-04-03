import React from "react";
import {useNavigate} from "react-router-dom";

export default function NotFound() {

  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  }, []);

  return (
    <h1 style={{textAlign: 'center'}}>404</h1>
  )
}