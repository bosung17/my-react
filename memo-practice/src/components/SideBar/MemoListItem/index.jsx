import './index.css'

function MemoList({ memo, onClickSelect, onClickDelete }) {
  return (
    <div className="memoListItem">
      <div
        className="memoListItemTitle"
        onClick={() => {
          onClickSelect()
        }}
      >
        {memo.title}
      </div>
      <button
        className="deleteButton"
        onClick={() => {
          onClickDelete()
        }}
      >
        X
      </button>
    </div>
  )
}

export default MemoList
