import { useState } from "react";
import styled from "styled-components";
import InputBox from "../Components/InputBox";
import ToDoItemList from "../Components/ToDoItemList";

const Todo = () => {
  const [reFetch, setReFetch] = useState(false);

  let Token = "";
  if (!localStorage.getItem("access_Token")) {    
    window.location.replace("/signin");
  } else {
    Token = localStorage.getItem("access_Token");
  }

  return (
    <ToDoStyle>
      {/* ToDo생성 */}
      <InputBox Token={Token} reFetch={reFetch} setReFetch={setReFetch} />

      {/* ToDo리스트 */}
      <ToDoItemList Token={Token} reFetch={reFetch} setReFetch={setReFetch} />
    </ToDoStyle>
  );
};

export default Todo;

const ToDoStyle = styled.div``;
