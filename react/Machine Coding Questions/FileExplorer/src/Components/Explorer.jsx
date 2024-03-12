// import React from "react";
import { useState } from "react";

const Explorer = ({ src }) => {
  // console.log(src);
  const [expand, setExpand] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [newFolderIcon, setNewFolderIcon] = useState(false);
  const [folderName, setFolderName] = useState("");

  window.addEventListener("click", (e) => {
    // console.dir(e.target.tagName);
    if (e.target.tagName === "HTML" || e.target.tagName === "DIV")
      setShowInput(false);
  });

  function addBtn(name) {
    console.log(name);
    if (newFolderIcon) {
      // Its a folder that we are adding inside the parent folder

      let folderDetail = {
        name: name,
        isFolder: true,
        items: [],
      };
      src.items.push(folderDetail);
    } else {
      // Its a file that we are adding inside the parent folder

      let fileDetail = {
        name: name,
        isFolder: false,
        items: [],
      };
      src.items.push(fileDetail);
    }
  }

  if (src.isFolder) {
    // Enter in this block if displaying a folder
    return (
      <>
        <div className="flex items-center gap-1 bg-gray-500 w-fit px-2 my-1 rounded">
          <div
            className="flex items-center gap-x-10 bg-white w-fit px-2 my-1 ml-px text-lg rounded cursor-pointer py-1"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <span>
              {"📁"}
              {src.name}
            </span>
          </div>
          <div className="flex gap-x-1 w-fit h-8">
            <button
              id="newFolder"
              className="bg-gray-300 px-2 rounded"
              onClick={(e) => {
                // e.stopPropagation();
                setExpand(false);
                setShowInput(true);
                setNewFolderIcon(true);
              }}
            >
              New Folder➕
            </button>
            <button
              id="newFile"
              className="bg-gray-300 px-2 rounded w-fit"
              onClick={(e) => {
                setExpand(false);
                setShowInput(true);
                // e.stopPropagation();
                setNewFolderIcon(false);
              }}
            >
              New File➕
            </button>
          </div>
        </div>
        <div
          id="inputContainer"
          className="flex items-center ml-6 w-fit"
          style={{ display: expand ? "none" : "block" }}
        >
          {showInput && (
            <span
              className="text-2xl w-fit"
              style={{ display: expand ? "none" : "inline" }}
            >
              {newFolderIcon ? "📁 " : "📄 "}
            </span>
          )}
          {showInput && (
            <input
              className="rounded text-lg w-fit px-2"
              type="text"
              onChange={(e) => setFolderName(e.target.value)}
            />
          )}
          {showInput && (
            <button
              className="ml-2 bg-white px-2 rounded"
              onClick={() => addBtn(folderName)}
            >
              Add
            </button>
          )}
        </div>
        <div
          className="ml-6 w-fit"
          style={{ display: expand ? "none" : "block" }}
        >
          {src.items.map((ele) => {
            return <Explorer src={ele} />;
          })}
        </div>
      </>
    );
  } else {
    // Enter in this block if dispalying file.
    return (
      <>
        <div className="bg-slate-300 my-2 text-lg w-fit px-2 py-px rounded cursor-default">
          <span>📄</span>
          {src.name}
        </div>
      </>
    );
  }
};

export default Explorer;
