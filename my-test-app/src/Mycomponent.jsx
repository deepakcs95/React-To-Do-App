import { useState } from "react";
import SavedForm from "./SavedForm";

function Mycomponent() {
  const initialList = [
    {
      id: 1,
      checked: true,
      todo: "Learn React 😍",
    },
    {
      id: 2,
      checked: false,
      todo: "Eat healthy 😜 ",
    },
    {
      id: 3,
      checked: true,
      todo: "Hit the gym 😤",
    },
  ];
  const [display, setdisplay] = useState("");
  const [list, setList] = useState(initialList);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // list items for various states

  const filtereditems = (() => {
    switch (filter) {
      case "active":
        return list.filter((list) => !list.checked);

      case "completed":
        return list.filter((list) => list.checked);
      case "search":
        return list.filter((list) => list.todo.includes(searchQuery));

      default:
        return list;
    }
  })();

  // calculate number of tasks completed vs remaining

  let taskCount = filtereditems.reduce(
    (count, li) => {
      if (li.checked == true) {
        return { ...count, trueCount: count.trueCount + 1 };
      } else return { ...count, falseCOunt: count.falseCOunt + 1 };
    },
    { trueCount: 0, falseCOunt: 0 }
  );

  // handle add items
  function handlerSubmit() {
    if (display.length > 0) {
      setList([
        { id: list.length + 1, checked: false, todo: display },
        ...list,
      ]);
      setdisplay("");
      console.log(list);
    }
  }

  // handle checkmark
  function handleEdit(iD, check) {
    setList(
      list.map((obj) => {
        if (obj.id === iD) {
          obj.checked = check;
        }
        return obj;
      })
    );
  }

  function deleteList(iD) {
    setList(list.filter((items) => items.id != iD));
  }

  // component
  return (
    <div className="card">
      <span className="material-symbols-outlined"></span>
      <div className="card-body">
        <h1>THINGS TO DO</h1>
        <form action="">
          <input
            value={display}
            onChange={(e) => {
              setdisplay(e.target.value);
              setSearchQuery("");
            }}
            type="text"
            placeholder="Add new"
          />
          <div className="list">
            <>
              {filtereditems.map((list) => (
                <SavedForm
                  className={"list"}
                  onChange={handleEdit}
                  onDelete={deleteList}
                  key={list.id}
                  {...list}
                />
              ))}
            </>
          </div>
        </form>
      </div>

      {/* //footer  */}
      <div className="footer">
        <div>
          <div className="footer-left">
            <span
              className="material-symbols-outlined"
              onClick={(e) => {
                e.preventDefault();
                handlerSubmit();
              }}
            >
              add
            </span>
            <span
              className="material-symbols-outlined search"
              onClick={(e) => {
                e.preventDefault();
                setSearchQuery(display);
                setFilter("search");
              }}
            >
              search
            </span>
            <p> {taskCount.falseCOunt} items remaining</p>
          </div>
        </div>
        <div className="footer-right">
          <button
            onClick={(e) => {
              e.preventDefault();
              setFilter("all");
            }}
          >
            All
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFilter("active");
            }}
          >
            Active
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFilter("completed");
            }}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}
export default Mycomponent;
