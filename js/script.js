const box = $('#moving-box')
const pane = $('#pane')

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
  const width = pane.width() - box.width() + 8
  const height = pane.height() - box.height() + 8
  console.log(width)
  // moving down with down arrow or S
  if (e.which === 40 || e.which === 83) {
    if (parseInt(topValue, 10) >= height) {
      box.css('top', height + 'px')
    } else {
      box.css('top', parseInt(topValue, 10) + 10 + 'px')
    }
    // moving up with the up arrow or W
  } else if (e.which === 38 || e.which === 87) {
    if (parseInt(topValue, 10) <= 10) {
      box.css('top', '10px')
    } else {
      box.css('top', parseInt(topValue, 10) - 10 + 'px')
    }
    // moving left with left arrow or A
  } else if (e.which === 37 || e.which === 65) {
    if (parseInt(leftValue, 10) <= 10) {
      box.css('left', '10px')
    } else {
      box.css('left', parseInt(leftValue, 10) - 10 + 'px')
    }
    // moving right with right arrow or D
  } else if (e.which === 39 || e.which === 68) {
    if (parseInt(leftValue, 10) >= width) {
      box.css('left', width + 'px')
    } else {
      box.css('left', parseInt(leftValue, 10) + 10 + 'px')
    }
  }
})
