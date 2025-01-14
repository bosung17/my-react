import './MemoContainer.css';

function MemoContainer({memo, setMemo}) {

  if(memo == undefined) {
    return (
      <div className="memoContainer">
        메모가 없어용
      </div>
    )
  }

  return (
  <div className="memoContainer">
    <div>
      <input className='title' type="text" value={memo.title} onChange={(e) => 
        {setMemo(
          {
            ...memo,
            title: e.target.value,
          }
        )}}/>
    </div>
    <div>
      <textarea className='content' name="" id="" value={memo.content} onChange={(e) => {
        setMemo(
          {
            ...memo,
            content: e.target.value,
          }
        )
      }} placeholder='내용을 입력하세요'></textarea>
    </div>
  </div>
  );
}

export default MemoContainer;