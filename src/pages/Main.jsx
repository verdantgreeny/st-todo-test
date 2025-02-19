import { useState } from "react";
import styled from "styled-components";
import Form from "../components/Form";
import List from "../components/List";

const MainPage = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할 일 1",
      content: "할 일 1 내용",
      isDone: false,
    },
    {
      id: 2,
      title: "할 일 2",
      content: "할 일 2 내용",
      isDone: true,
    },
    {
      id: 3,
      title: "할 일 3",
      content: "할 일 3 내용",
      isDone: false,
    },
  ]);
  
  return (
    <StContainer>
      <StHeader>
        <h1>내일배움캠프 스탠다드반 투두리스트</h1>
      </StHeader>
      <StMain>
        <Form setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </StMain>
      <StFooter>
        <p>Copyright 2025 스파르타 내일배움캠프</p>
      </StFooter>
    </StContainer>
  );
};

export default MainPage;

const StContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const StHeader = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
`;

const StMain = styled.main`
  padding: 20px;
`;

const StFooter = styled.footer`
  background-color: #282c34;
  padding: 10px;
  color: white;
`;
