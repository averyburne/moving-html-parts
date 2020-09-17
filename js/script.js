
function moveDown() {
  const box = document.getElementById('moving-box')
  box.style.position = 'absolute'
  box.style.top = '100px'
  // box.style.right++
  console.log(box.style)
}

function moveUp() {
  const box = document.getElementById('moving-box')
  box.style.position = 'absolute'
  box.style.top = '0px'
  // box.style.right++
  console.log(box.style)
}

function moveRight() {
  const box = document.getElementById('moving-box')
  box.style.position = 'absolute'
  box.style.right = '100px'
  // box.style.right++
  console.log(box.style)
}

function moveLeft() {
  const box = document.getElementById('moving-box')
  box.style.position = 'absolute'
  box.style.right = '0px'
  // box.style.right++
  console.log(box.style)
}
