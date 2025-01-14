import "./App.css";
import SideBar from "./components/SideBar/SideBar.jsx";
import MemoContainer from "./components/MemoContainer/MemoContainer.jsx";
import { useEffect, useState } from "react";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [memos, setMemos] = useState([]);

  useEffect(() => {
    if (selectedIndex === 4) {
      alert("예?");
    }
    return () => {};
  }, [selectedIndex]);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];

    newMemos[selectedIndex] = newMemo;

    setMemos(newMemos);
  };

  const addMemo = () => {
    const newMemos = [
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      },
    ];

    setSelectedIndex(memos.length);

    setMemos(newMemos);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);

    if (index === selectedIndex) {
      setSelectedIndex(0);
    } else if (selectedIndex > index) {
      setSelectedIndex(selectedIndex - 1);
    }

    setMemos(newMemos);
  };

  return (
    <>
      <div className="app">
        <SideBar
          memos={memos}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          setMemo={setMemo}
          addMemo={addMemo}
          deleteMemo={deleteMemo}
        ></SideBar>
        <MemoContainer
          memo={memos[selectedIndex]}
          setMemo={setMemo}
        ></MemoContainer>
      </div>
    </>
  );
}

export default App;
