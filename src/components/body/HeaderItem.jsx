import React from 'react'

function HeaderItem({active, itemName}) {
  return (
    <div className={`m-4 ${active ? 'font-bold underline' : 'font-normal'}`}>
      {itemName}
    </div>
  )
}

export default HeaderItem
