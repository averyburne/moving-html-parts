const box = $('#moving-box')

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
  let topValue = box.css('top')
  console.log(topValue)
  if (e.which === 40) {
    // let leftNumbers = box.style.left.replace('px', '')
    // let left = parseInt(leftNumbers, 10)
    //
    // box.style.left = `${left + 1}px`
    console.log(parseInt(topValue, 10) + 10 + 'px')
    box.css('top', parseInt(topValue, 10) + 10 + 'px')
  } else if (e.which === 38) {
    box.style.top = '0px'
  } else if (e.which === 37) {
    box.style.right = '100px'
  } else if (e.which === 39) {
    box.style.left = '100px'
  }
})
