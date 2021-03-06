import React from 'react'

let input
export default class App extends React.Component {
  render () {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if(!input.value.trim()) {
            return
          }
          this.props.onClickAdd(input.value)
          input.value = ""
        }}>
         <input ref={node =>{
           input = node
         }} />
         <button>
           add string
         </button>
       </form>
       <span>{this.props.no}:{this.props.text}</span>
      </div>
    )
  }
}
