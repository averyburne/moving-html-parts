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
  let leftValue = box.css('left')
  console.log(e.which)
  if (e.which === 40 || e.which === 83) {
    // let leftNumbers = box.style.left.replace('px', '')
    // let left = parseInt(leftNumbers, 10)
    //
    // box.style.left = `${left + 1}px`
    box.css('top', parseInt(topValue, 10) + 10 + 'px')
    console.log('hello')
  } else if (e.which === 38 || e.which === 87) {
    box.css('top', parseInt(topValue, 10) - 10 + 'px')
  } else if (e.which === 37 || e.which === 65) {
    box.css('left', parseInt(leftValue, 10) - 10 + 'px')
  } else if (e.which === 39 || e.which === 68) {
    box.css('left', parseInt(leftValue, 10) + 10 + 'px')
  }
})
