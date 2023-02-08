import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ToDoItemList = ({Token, reFetch, setReFetch}) => {    
    
    const [todoList, setTodoList] = useState([])
    

    useEffect(() => {
        const getTodo = async () => {
          try {
            const response = await axios.get(
              `https://pre-onboarding-selection-task.shop/todos`,
              { headers: {
                "Authorization": `Bearer ${Token}`,
                "Content-Type": "application/json"}  }
            );    
            setTodoList([...response.data]);
          } catch (error) {
            alert(error);
          }
        };             
        getTodo();
      }, [reFetch]);     
    
    
  return (
    <ToDoItemListStyle>
      <ul>
          {todoList && todoList.map((todo)=> (
              <ToDoItem
              key={todo.id}
              Token={Token}
              todo={todo}
              reFetch={reFetch}
              setReFetch={setReFetch}                                     
          />
          ))}        
      </ul>
    </ToDoItemListStyle>
  );
};

export default ToDoItemList;

const ToDoItemListStyle = styled.div``;
