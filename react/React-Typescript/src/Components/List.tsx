import React from "react";
type listProps<T> = {
  arrayInput: T[];
  onClick: (value: T) => void;
};

function List<T extends {}>(props: listProps<T>) {
  return (
    <>
      <h2>List will render here: </h2>
      <ul>
        {props.arrayInput.map((ele, idx) => (
          <li key={idx} onClick={() => props.onClick(ele)}>
            {ele}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
