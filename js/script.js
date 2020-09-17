
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
  box.style.left = '100px'
  // box.style.right++
  console.log(box.style)
}
