const box = document.getElementById('moving-box')

function moveDown() {
  box.style.position = 'absolute'
  box.style.top = '100px'
  // box.style.right++
  console.log(box.style)
}

function moveUp() {
  box.style.position = 'absolute'
  box.style.top = '0px'
  // box.style.right++
  console.log(box.style)
}

function moveRight() {
  box.style.position = 'absolute'
  box.style.right = '100px'
  // box.style.right++
  console.log(box.style)
}

function moveLeft() {
  box.style.position = 'absolute'
  box.style.right = '1px'
  // box.style.right++
  console.log(box.style)
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    let leftNumbers = box.style.left.replace('px', '')
    let left = parseInt(leftNumbers, 10)

    box.style.left = `${left + 1}px`
  }
})
