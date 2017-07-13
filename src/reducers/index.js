console.log("reduser/index")
export default function reducer(state, action){
  switch(action.type){
    case 'ADD':
console.log("reduser/index ADD")
console.log(state)
console.log(action)
      return {no: action.no, text: action.text}
    default:
console.log("reduser/index default")
      return {no: 0, text: "start"}
  }
}

