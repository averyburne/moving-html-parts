const box = $('#moving-box')
const box2 = $('#moving-box2')
const pane = $('#pane')
const ball = $('#ball')

$("#finalize-btn").hide()

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

  if (keys.includes(e.which) == false) {
    keys.push(e.which)
  }
  // move right and down
  if (keys.includes(83) && keys.includes(68)) {
    box.css('top', moveBox(height, topValue, 83))
    box.css('left', moveBox(width, leftValue, 68))
    // move left and down
  } else if (keys.includes(83) && keys.includes(65)) {
    box.css('top', moveBox(height, topValue, 83))
    box.css('left', moveBox(width, leftValue, 65))
    // move right and up
  } else if (keys.includes(87) && keys.includes(68)) {
    box.css('top', moveBox(height, topValue, 87))
    box.css('left', moveBox(width, leftValue, 68))
    // move left and up
  } else if (keys.includes(87) && keys.includes(65)) {
    box.css('top', moveBox(height, topValue, 87))
    box.css('left', moveBox(width, leftValue, 65))
  }
  // moving down with up with W and down with S
  else if (keys.includes(87) || keys.includes(83)) {
    box.css('top', moveBox(height, topValue, e.which))
    // moving left with A and right with D
  } else if (keys.includes(68) || keys.includes(65)) {
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

  if (keys.includes(e.which) == false) {
    keys.push(e.which)
  }
  // move right and down
  if (keys.includes(40) && keys.includes(39)) {
    box2.css('top', moveBox(height, topValue, 83))
    box2.css('left', moveBox(width, leftValue, 68))
    // move left and down
  } else if (keys.includes(40) && keys.includes(37)) {
    box2.css('top', moveBox(height, topValue, 83))
    box2.css('left', moveBox(width, leftValue, 65))
    // move right and up
  } else if (keys.includes(38) && keys.includes(39)) {
    box2.css('top', moveBox(height, topValue, 87))
    box2.css('left', moveBox(width, leftValue, 68))
    // move left and up
  } else if (keys.includes(38) && keys.includes(37)) {
    box2.css('top', moveBox(height, topValue, 87))
    box2.css('left', moveBox(width, leftValue, 65))
  }
  // moves box up with up arrow and down with down arrow
  else if (keys.includes(38) || keys.includes(40)) {
    box2.css('top', moveBox(height, topValue, e.which))
    // moves box left with left arrow and right with right arrow
  } else if (keys.includes(37) || keys.includes(39)) {
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

document.addEventListener('keyup', function(e) {
  const index = keys.indexOf(e.which)
  if (index > -1) {
    keys.splice(index, 1)
  }
})

let mouseX = 0;
let mouseY = 0;
let startX = 0;
let startY = 0;
let locX = 0;
let locY = 0;

document.onmousemove = function (event) {
  locX = event.pageX;
  locY = event.pageY;
}

const drag = function (event) {
  event.ondragend = function (event) {
    let maxLeft = Math.round(document.getElementById('pane2').getBoundingClientRect().left)
    let maxTop = Math.round(document.getElementById('pane2').getBoundingClientRect().top)
    let maxBottom = Math.round(document.getElementById('pane2').getBoundingClientRect().height) + maxTop
    let maxRight = Math.round(document.getElementById('pane2').getBoundingClientRect().width) + maxLeft
    let object = this.getBoundingClientRect()
    console.log('max Bottom is ' + maxBottom)
    console.log('max Top is ' + maxTop)
    startX = object.left
    startY = object.top
    offsetX = locX - startX
    offsetY = locY - startY
    mouseX = event.clientX - offsetX
    mouseY = event.clientY - offsetY
    this.style.left = mouseX + 'px'
    console.log('mouseY is ' + mouseY)
    if (mouseY > (parseInt(maxTop, 10)) && mouseY + 100 < (parseInt(maxBottom, 10))) {
      this.style.top = mouseY + 'px'
    } else if (mouseY < parseInt(maxTop, 10)) {
      this.style.top = parseInt(maxTop, 10) + 1 + 'px'
    } else {
      this.style.top = parseInt(maxBottom, 10) - 100 + 'px'
    }
    if (mouseX > (parseInt(maxLeft, 10)) && mouseX + 100 < (parseInt(maxRight, 10))) {
      this.style.left = mouseX + 'px'
    } else if (mouseX < parseInt(maxLeft, 10)) {
      this.style.left = parseInt(maxLeft, 10) + 1 + 'px'
    } else {
      this.style.left = parseInt(maxRight, 10) - 101 + 'px'
    }
  }
}

const makeVar = function () {
  let varName = document.getElementById("name-input").value
  let varVal = document.getElementById("value-input").value
  if (varVal.match(/^[0-9.-]+$/) !== null) {
    eval("var " + varName + " = " + varVal + Number(varVal))
    console.log('hello')
  } else if (varVal.match(/^[true][false]/) !== null) {
    eval("var " + varName + " = " + varVal)
  } else {
    eval("var " + varName + " = " + '"' + varVal + '"')
  }
  document.getElementById("output-var").innerHTML = "Created " + varName + " equals " + varVal + "<br>Variable " + (eval(varName)) + " is type " + typeof (eval(varName))
}

const initiateArr = function () {
  let arrName = document.getElementById("array-name").value
  let arrSize = document.getElementById("array-size").value
  let tempVal = document.getElementById("temp-value").value
  eval(arrName + ' = ' + "new Array;")
  $("#finalize-btn").show()
  for (i = 0; i < arrSize; i++) {
    temp = arrName + '[' + i + '] = ' + tempVal
    eval(temp)
    document.getElementById("output-array").innerHTML += temp + "<br>"
  }
}

