import logo from "./logo.svg";
import "./App.css";
import { directory } from "./constant";
import React, { useState } from "react";

function App() {
  const [showOuter, setShowOuter] = useState(false);
  const [showInner, setShowInner] = useState(false);
  const [folderID, setFolderId] = useState();
  const [showInput, setShowInput] = useState(false);
  const [showInnerInput, setShowInnerInput] = useState(false);
  const [inputId, setInputId] = useState();

  const openFolder = (directory) => {
    return (
      <div>
        {directory?.item?.map((item, index, arr) => {
          if (item.isFolder === true) {
            return (
              <div key={item?.id} className="columm">
                <div className="flexBox">
                  <div
                    onClick={() => {
                      {
                        if (item?.item?.length !== 0) {
                          setShowInner(!showInner);
                          setFolderId(item?.id);
                        }
                      }
                    }}
                  >{`📂 ${item?.name}`}</div>
                  <div className="buttonConatiner">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowInnerInput(!showInnerInput);
                        setInputId(item?.id);
                      }}
                    >
                      Add Folder
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowInnerInput(!showInnerInput);
                        setInputId(item?.id);
                      }}
                    >
                      Add File
                    </button>
                  </div>
                </div>
                {showInnerInput && inputId === item?.id && (
                  <input
                    type="text"
                    className="inputStyle"
                    autoFocus
                    onBlur={() => setShowInput(false)}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
                {showInner && folderID === item?.id && openFolder(item)}
              </div>
            );
          } else {
            return <div className="columm">{`📄 ${item?.name}`}</div>;
          }
        })}
      </div>
    );
  };

  return (
    <>
      <div className="row">
        📂
        <div className="folderName" onClick={() => setShowOuter(!showOuter)}>
          {directory.name}
          <div className="buttonConatiner">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowInput(!showInput);
              }}
            >
              Add Folder
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowInput(!showInput);
              }}
            >
              Add File
            </button>
          </div>
        </div>
      </div>
      {showInput && (
        <input
          type="text"
          className="inputStyle"
          autoFocus
          onBlur={() => setShowInput(false)}
        />
      )}

      {showOuter && openFolder(directory)}
    </>
  );
}

export default App;
