import "./SideBar.css";

import { MemoList, SideBarHeader, SideBarFooter } from "../../components";
function SideBar({
  memos,
  selectedIndex,
  setSelectedIndex,
  addMemo,
  deleteMemo,
}) {
  return (
    <>
      <div className="sideBar">
        <SideBarHeader></SideBarHeader>
        <MemoList
          memos={memos}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          deleteMemo={deleteMemo}
        ></MemoList>
        <SideBarFooter addMemo={addMemo}></SideBarFooter>
      </div>
    </>
  );
}

export default SideBar;
// 18줄
