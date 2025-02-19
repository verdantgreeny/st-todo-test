import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/todosSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("타이틀과 내용을 모두 입력해야합니다.");
      return;
    }

    dispatch(addTodo({ id: new Date().getTime(), title, content }));
    setTitle("");
    setContent("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="title"
        value={title}
        placeholder="할 일 제목을 입력하세요"
        onChange={(e) => setTitle(e.target.value)}
      />
      <StyledInput
        type="text"
        name="content"
        value={content}
        placeholder="할 일 내용을 입력하세요"
        onChange={(e) => setContent(e.target.value)}
      />
      <StyledButton type="submit">추가</StyledButton>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledButton = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
