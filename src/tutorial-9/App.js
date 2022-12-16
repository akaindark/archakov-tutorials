import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "./components/UseDebounce";
import Form from "./components/Form";
import UserInfoBox from "./components/UserInfoBox";

import "./index.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(inputValue, 500);

  async function searchUser(search) {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${search}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsLoading(true);

      searchUser(debouncedSearchTerm).then((userInfo) => {
        setIsLoading(false);
        setUserInfo(userInfo);
      });
    } else {
      setUserInfo(null);
    }
  }, [debouncedSearchTerm]);

  function clearInput() {
    setUserInfo(null);
    setInputValue("");
  }
  return (
    <div id="app">
      <div className="app-container">
        <Form
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={clearInput}
        />
        {isLoading && <div>Searching ...</div>}
        {!userInfo && !isLoading && inputValue && <div> Юзер не найден!</div>}
        {userInfo && <UserInfoBox results={userInfo} />}
      </div>
    </div>
  );
}
