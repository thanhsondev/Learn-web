import { useCallback, useState, useEffect } from "react";
import "./index.css";
import ToDoList from "./components/ToDoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = "TODO_APP";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const storageTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storageTodoList) {
      setTodoList(JSON.parse(storageTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  },
    []);

  const onAddBtnClick = useCallback((e) => {
    setTodoList([{ id: v4(), name: textInput, isCompleted: false }, ...todoList])
    setTextInput("");
  },
    [textInput, todoList]);

  const onCheckBtnClick = useCallback((id) => {
    setTodoList(prevState => prevState.map(todo => todo.id === id ? { ...todo, isCompleted: true } : todo))
  },
    []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TextField
        name="add-todo"
        placeholder="Add a new todo here"
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance='primary'
            onClick={onAddBtnClick}
          >
            Add
          </Button>
        }
        css={
          { padding: "2px 4px 2px" }
        }
        value={textInput}
        onChange={onTextInputChange}
      />
      <ToDoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </div>
  );
}

export default App;
