const box = $('#moving-box')
const pane = $('#pane')

const checkHeight = function (maxValue, currentValue, keyPressed) {
  if (currentValue + 10 >= maxValue && keyPressed === 40) {
    return parseInt(maxValue, 10) + 'px'
  } else if (currentValue - 10 <= 10 && keyPressed === 38) {
    return '10px'
  } else if (keyPressed === 40) {
    return (parseInt(currentValue, 10) + 10 + 'px')
  } else if (keyPressed === 38) {
    return (parseInt(currentValue, 10) - 10 + 'px')
  }
}

document.addEventListener('keydown', function(e) {
  let topValue = parseInt(box.css('top'), 10)
  let leftValue = box.css('left')
  const width = pane.width() - box.width() + 8
  const height = pane.height() - box.height() + 8
  console.log(checkHeight(height, topValue, e.which))
  // moving down with down arrow or S
  if (e.which === 40 || e.which === 38 || e.which === 83 || e.which === 87) {
    box.css('top', checkHeight(height, topValue, e.which))
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
