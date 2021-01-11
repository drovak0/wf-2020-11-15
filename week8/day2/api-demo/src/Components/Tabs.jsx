import { useState } from 'react'

const Tabs = ({ items }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            onClick={(_event) => setCurrentTabIndex(index)}
            style={
              currentTabIndex === index ? { border: "1px solid red" } : null
            }
          >
            {item.label}
          </div>
        )
      })}
      <p>Content</p>
      {items.map((item, index) => {
        return currentTabIndex === index ? <div key={index}>{item.content}</div> : null
      })}
    </div>
  )
}
export default Tabs
