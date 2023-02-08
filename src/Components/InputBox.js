import styled from "styled-components";
import { useRef, useState } from "react";
import axios from "axios";

const InputBox = ({ Token,reFetch ,setReFetch }) => {

    const [text, setText] = useState("")
    const inputRef = useRef(null)

    const onChangeInput = (e) => {
        setText(e.target.value)
    }

    const onClickAddButton = () => {

        axios({
            url :"https://pre-onboarding-selection-task.shop/todos",
            method : "POST",
            data : JSON.stringify({                
                "todo" : text,                            
            }), 
            headers: {
                "Authorization": `Bearer ${Token}`,
                "Content-Type": "application/json"}            
        })
        .then((res) => {
            if(res.status === 201) {
                setReFetch(!reFetch)
            }            
        })
        .catch((err) => alert(err))

        
        setText("")
        inputRef.current.focus();
    }

  return (
    <InputBoxStyle>
      <input data-testid="new-todo-input" type="text" value={text} ref={inputRef} onChange={onChangeInput} name="todoItem" placeholder="리스트를 작성해주세요" />
      <button data-testid="new-todo-add-button" type="submit" onClick={onClickAddButton}>추가</button>
    </InputBoxStyle>
  );
};

export default InputBox;

const InputBoxStyle = styled.div``;
