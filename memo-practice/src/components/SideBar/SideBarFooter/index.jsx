import './index.css'

function SideBarFooter({ addMemo }) {
  return (
    <div className="sideBarFooter">
      <button
        className="addButton"
        onClick={e => {
          addMemo()
        }}
      >
        +
      </button>
    </div>
  )
}

export default SideBarFooter
