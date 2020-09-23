const box = $('#moving-box')
const box2 = $('#moving-box2')
const pane = $('#pane')
const ball = $('#ball')

const moveBox = function (maxValue, currentValue, key) {
  // checks to make sure the box is still within bounds
  if (currentValue + 10 >= maxValue && (key === 40 || key === 39 || key === 83 || key === 68)) {
    return parseInt(maxValue, 10) + 'px'
    // prevents box from moving off screen (upwards or left)
  } else if (currentValue - 10 <= 10 && (key === 38 || key === 37 || key === 87 || key === 65)) {
    return '10px'
    // adds to the current top or left value (moves down or right)
  } else if (key === 40 || key === 39 || key === 83 || key === 68) {
    return (parseInt(currentValue, 10) + 10 + 'px')
    // removes from the current top or left value (moves up or left)
  } else if (key === 38 || key === 37 || key === 87 || key === 65) {
    return (parseInt(currentValue, 10) - 10 + 'px')
  }
}

let keys = []
let keysCount = 0
document.addEventListener('keydown', function(e) {
  let topValue = parseInt(box.css('top'), 10)
  let leftValue = parseInt(box.css('left'), 10)
  let topValueBall = parseInt(ball.css('top'), 10)
  let leftValueBall = parseInt(ball.css('left'), 10)
  const width = pane.width() - box.width() + 8
  const height = pane.height() - box.height() + 8

  keys.push(e.which)
  console.log(keys)
  if (keys.length > 1) {
    console.log('peen')
  }
  // moving down with up with W and down with S
  if (e.which === 83 || e.which === 87) {
    box.css('top', moveBox(height, topValue, e.which))
    // moving left with A and right with D
  } else if (e.which === 68 || e.which === 65) {
    box.css('left', moveBox(width, leftValue, e.which))
  }
  // Setting up conditionals to check if the box is close enough to the ball to move it
  // moves ball left
  if ((leftValueBall <= (leftValue + 80) && leftValueBall >= (leftValue - 40)) && (topValueBall <= (topValue + 60) && topValueBall >= (topValue - 20)) && e.which === 68) {
    ball.css('left', (parseInt(leftValueBall, 10) + 50 + 'px'))
    // moves ball right
  } else if ((leftValueBall >= (leftValue - 40) && leftValueBall <= (leftValue + 80)) && (topValueBall <= (topValue + 60) && topValueBall >= (topValue - 20)) && e.which === 65) {
    ball.css('left', parseInt(leftValueBall, 10) - 50 + 'px')
    // moves ball down
  } else if ((topValueBall <= (topValue + 80) && topValueBall >= (topValue - 40)) && (leftValueBall <= (leftValue + 60)) && leftValueBall >= (leftValue - 20) && e.which === 83) {
    ball.css('top', parseInt(topValueBall, 10) + 50 + 'px')
    // moves ball up
  } else if ((topValueBall >= (topValue - 40) && topValueBall <= (topValue + 80)) && (leftValueBall <= (leftValue + 60)) && leftValueBall >= (leftValue - 20) && e.which === 87) {
    ball.css('top', parseInt(topValueBall, 10) - 50 + 'px')
  }
})

document.addEventListener('keydown', function(e) {
  let topValue = parseInt(box2.css('top'), 10)
  let leftValue = parseInt(box2.css('left'), 10)
  let topValueBall = parseInt(ball.css('top'), 10)
  let leftValueBall = parseInt(ball.css('left'), 10)
  const width = pane.width() - box2.width() + 8
  const height = pane.height() - box2.height() + 8
  console.log(ball.css('left'))
  console.log(box.css('left'))
  // moves box up with up arrow and down with down arrow
  if (e.which === 40 || e.which === 38) {
    box2.css('top', moveBox(height, topValue, e.which))
    // moves box left with left arrow and right with right arrow
  } else if (e.which === 39 || e.which === 37) {
    box2.css('left', moveBox(width, leftValue, e.which))
  }
  // Setting up conditionals to check if the box is close enough to the ball to move it
  // moves ball left
  if ((leftValueBall <= (leftValue + 80) && leftValueBall >= (leftValue - 40)) && (topValueBall <= (topValue + 60) && topValueBall >= (topValue - 20)) && e.which === 39) {
    ball.css('left', (parseInt(leftValueBall, 10) + 50 + 'px'))
    // moves ball right
  } else if ((leftValueBall >= (leftValue - 40) && leftValueBall <= (leftValue + 80)) && (topValueBall <= (topValue + 60) && topValueBall >= (topValue - 20)) && e.which === 37) {
    ball.css('left', parseInt(leftValueBall, 10) - 50 + 'px')
    // moves ball down
  } else if ((topValueBall <= (topValue + 80) && topValueBall >= (topValue - 40)) && (leftValueBall <= (leftValue + 60)) && leftValueBall >= (leftValue - 20) && e.which === 40) {
    ball.css('top', parseInt(topValueBall, 10) + 50 + 'px')
    // moves ball up
  } else if ((topValueBall >= (topValue - 40) && topValueBall <= (topValue + 80)) && (leftValueBall <= (leftValue + 60)) && leftValueBall >= (leftValue - 20) && e.which === 38) {
    ball.css('top', parseInt(topValueBall, 10) - 50 + 'px')
  }
})
