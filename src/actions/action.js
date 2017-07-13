let noCount = 1
export const ioData = (text) => ({
  type: 'ADD',
  no: noCount++,
  text
})
