import { useState } from 'react'
import './App.css'

import icon from './assets/react.svg'

function App() {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)

  const openModal = (count: number) => () => {
    setOpen(true)
    setCount(count)
  }

  const closeModal = () => {
    setOpen(false)
    setCount(0)
  }

  return (
    <>
      <div className="card">
        <button onClick={openModal(1)}>Open</button>
        <button onClick={openModal(2)}>Open</button>
        <button onClick={openModal(5)}>Open</button>
      </div>

      {open && (
        <div className="modal" role="dialog">
          <div className="modal-content-wrapper" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {`Running side effects with reactions Reactions are an important concept to understand, as
            it is where everything in MobX comes together. The goal of reactions is to model side
            effects that happen automatically. Their significance is in creating consumers for your
            observable state and automatically running side effects whenever something relevant
            changes. However, with that in mind, it is important to realize that the APIs discussed
            here should rarely be used. They are often abstracted away in other libraries (like
            mobx-react) or abstractions specific to your application. But, to grok MobX, let's take
            a look at how reactions can be created. The simplest way is to use the autorun utility.
            Beyond that, there are also reaction and when. The autorun function accepts one function
            that should run every time anything it observes changes. It also runs once when you
            create the autorun itself.`.repeat(count)}
            </div>
          </div>

          <img
            className="modal-close-icon"
            src={icon}
            alt="close"
            onClick={closeModal}
            role="button"
          />
        </div>
      )}
    </>
  )
}

export default App
