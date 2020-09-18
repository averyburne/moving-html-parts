const box = $('#moving-box')
const pane = $('#pane')

const checkHeight = function (maxValue, currentValue, key) {
  if (currentValue + 10 >= maxValue && (key === 40 || key === 39 || key === 83 || key === 68)) {
    return parseInt(maxValue, 10) + 'px'
  } else if (currentValue - 10 <= 10 && (key === 38 || key === 37 || key === 87 || key === 65)) {
    return '10px'
  } else if (key === 40 || key === 39 || key === 83 || key === 68) {
    return (parseInt(currentValue, 10) + 10 + 'px')
  } else if (key === 38 || key === 37 || key === 87 || key === 65) {
    return (parseInt(currentValue, 10) - 10 + 'px')
  }
}

document.addEventListener('keydown', function(e) {
  let topValue = parseInt(box.css('top'), 10)
  let leftValue = parseInt(box.css('left'), 10)
  const width = pane.width() - box.width() + 8
  const height = pane.height() - box.height() + 8
  // moving down with up or down with arrows/WS
  if (e.which === 40 || e.which === 38 || e.which === 83 || e.which === 87) {
    box.css('top', checkHeight(height, topValue, e.which))
    // moving left with left arrow or A
  } else if (e.which === 39 || e.which === 37 || e.which === 68 || e.which === 65) {
    box.css('left', checkHeight(width, leftValue, e.which))
  }
})
