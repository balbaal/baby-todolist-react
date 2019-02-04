import React from "react";
import FlipMove from "react-flip-move";

const TodoItem = props => {
  let lists =
    props.items.length === 0 ? (
      <h3 style={{ color: "#333" }}>no item list . . .</h3>
    ) : (
      props.items.map((item, index) => {
        return (
          <li onClick={() => props.onDeleteItem(index)} key={index}>
            {item}
          </li>
        );
      })
    );

  return (
    <div>
      <ul>
        <FlipMove duration={250} easing='ease-out'>{lists}</FlipMove>
      </ul>
    </div>
  );
};

export default TodoItem;
