export default function reducer(state, action){
  switch(action.type){
    case 'ADD':
      return {no: action.no, text: action.text}
    default:
      return {no: 0, text: "start"}
  }
}

