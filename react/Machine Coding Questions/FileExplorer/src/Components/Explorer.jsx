// import React from "react";
import { isValidElement, useState } from "react";

const Explorer = ({ src }) => {
  // console.log(src);
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [newFolderIcon, setNewFolderIcon] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [unnamedFiles, setUnnamedFiles] = useState(1);
  const [unnamedFolder, setUnnamedFolder] = useState(1);

  window.addEventListener("click", (e) => {
    // console.dir(e.target.tagName);
    if (
      e.target.tagName === "HTML" ||
      e.target.tagName === "DIV" ||
      e.target.tagName === "SPAN"
    )
      setShowInput(false);
  });

  function addBtn(name) {
    let fileName = name.trim();
    let temp;
    if (newFolderIcon) {
      // Its a folder that we are adding inside the parent folder
      let folderDetail = {
        name: fileName,
        isFolder: true,
        items: [],
      };
      for (const iterator of src.items) {
        if (iterator.name === fileName) {
          // ENTERED in this block because there is another file or folder with same name
          if (iterator.isFolder) {
            //Entered in this block because there is another folder with same name
            alert(
              "Folder with this name already exist!!\nPlease Enter another Name for the folder."
            );
            temp = false;
            break;
          } else {
            // Entered in this block because name
            temp = true;
          }
        } else {
          temp = true;
        }
      }

      if (temp) {
        if (fileName.length !== 0) {
          src.items.push(folderDetail);
          setShowInput(false);
        } else {
          folderDetail.name = `New Folder (${unnamedFolder})`;
          src.items.push(folderDetail);
          setShowInput(false);
          setUnnamedFolder(unnamedFolder + 1); // Why unnamedFolder++ isn't working but unnamedFolder+1 is working
        }
      }
    } else {
      // Its a file that we are adding inside the parent folder

      let fileDetail = {
        name: name,
        isFolder: false,
        items: [],
      };
      for (const iterator of src.items) {
        if (iterator.name === fileName) {
          // ENTERED in this block because there is another file or folder with same name
          if (!iterator.isFolder) {
            //Entered in this block because there is another folder with same name
            alert(
              "Folder with this name already exist!!\nPlease Enter another Name for the folder."
            );
            temp = false;
            break;
          } else {
            // Entered in this block because name
            temp = true;
          }
        } else {
          temp = true;
        }
      }
      if (temp) {
        if (fileName.length !== 0) {
          src.items.push(fileDetail);
          setShowInput(false);
        } else {
          fileDetail.name = `New File (${unnamedFiles})`;
          src.items.push(fileDetail);
          setShowInput(false);
          setUnnamedFiles(unnamedFiles + 1);
        }
      }
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
                setExpand(true);
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
                setShowInput(true);
                setExpand(true);
                // e.stopPropagation();
                setNewFolderIcon(false);
              }}
            >
              New File➕
            </button>
          </div>
        </div>
        {showInput && (
          <div id="inputContainer" className="flex items-center ml-6 w-fit">
            <span className="text-2xl w-fit">
              {newFolderIcon ? "📁 " : "📄 "}
            </span>
            <input
              className="rounded text-lg w-fit px-2"
              type="text"
              onChange={(e) => setFolderName(e.target.value)}
              placeholder={
                newFolderIcon ? "Enter Folder Name...." : "Enter File Name...."
              }
            />
            <button
              className="ml-2 bg-white px-2 rounded"
              onClick={() => addBtn(folderName)}
            >
              Add
            </button>
          </div>
        )}
        <div
          className="ml-14 w-fit"
          style={{ display: expand ? "block" : "none" }}
        >
          <div className="h-full w-1 bg-white mr-2"></div>
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
