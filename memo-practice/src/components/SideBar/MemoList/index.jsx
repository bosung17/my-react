import "./index.css";
import MemoListItem from "../MemoListItem";

function MemoList({ memos, setSelectedIndex, deleteMemo }) {
  return (
    <div className="memoList">
      {memos.map((memo, index) => (
        <MemoListItem
          key={index}
          onClickSelect={() => {
            setSelectedIndex(index);
          }}
          memo={memo}
          onClickDelete={() => {
            console.log("여긴 옴");
            deleteMemo(index);
          }}
        ></MemoListItem>
      ))}
    </div>
  );
}

export default MemoList;
