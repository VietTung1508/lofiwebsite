import style from "./ToDoListBoard.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMarker,
  faPlus,
  faPlusCircle,
  faX,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  setCompleted,
} from "../../../../redux/Action/actions";

const cx = className.bind(style);

function ToDoList() {
  const [inp, setInp] = useState("");

  const inpRef = useRef();

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.toDoList.todos);

  const handleAdd = () => {
    if (inp === "" || inp.startsWith(" ")) {
      return;
    }
    dispatch(
      addTodo({
        job: inp,
        isCompleted: false,
      })
    );
    setInp("");
    inpRef.current.focus();
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheck = (id) => {
    dispatch(setCompleted(id));
  };

  return (
    <div className={cx("board")}>
      <div className={cx("header")}>
        <h4>ToDo List</h4>
      </div>

      <form
        className={cx("action")}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={inpRef}
          type="text"
          placeholder="Add a task . . ."
          value={inp}
          required
          maxlength="25"
          onChange={(e) => {
            setInp(e.target.value);
          }}
        />
        <button onClick={handleAdd} formNoValidate>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>

      <div className={cx("container-header")}>
        <h4>Tasks</h4>
      </div>

      {todos.length === 0 && (
        <div className={cx("noTask")}>
          <h3>You don't have any Task yet ...</h3>
        </div>
      )}

      {todos.length !== 0 && (
        <div className={cx("container")}>
          {todos.map((todo, i) => (
            <div key={i} className={cx("todo")}>
              <span
                className={cx("splash", todo.isCompleted ? "done" : "")}
              ></span>
              <p>- {todo.job}</p>
              <button
                className={cx("check", todo.isCompleted ? "out" : "")}
                onClick={() => handleCheck(i)}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button className={cx("delete")} onClick={() => handleDelete(i)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ToDoList;
