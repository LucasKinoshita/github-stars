import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import { InputToken } from "../components/InputToken";
import {InputUser} from "../components/InputUser";

export const Search = () => {
  const { hasToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleUsername(event: FormEvent, username: string) {
    event.preventDefault();
    const hasUsername = username !== "";

    if (hasUsername) navigate(`/explorer-repositories/${username}`);
  }

  return (
    <>
      {!hasToken && <InputToken />}
      {hasToken && <InputUser handleUsername={handleUsername} />}
    </>
  );
};
