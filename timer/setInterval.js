// SetInterval roda a função por N vezes depois de X milessegundos

const timeout = 1000
const checking = () => console.log('Checking!')

// setInterval(checking, timeout)

let interval = setInterval (checking, timeout)

setTimeout( () => clearInterval(interval), 3000)