function normalization(input) {
  return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function normalizeText() {
  const inputElem = document.getElementById('input')
  const afterElem = document.getElementById('after')

  if (!inputElem.value) return

  const result = normalization(inputElem.value)

  inputElem.value = result
  afterElem.replaceChildren()

  const p = document.createElement('p')

  p.innerText = 'Your text has been normalized.'
  afterElem.appendChild(p)

  const button = document.createElement('button')
  const buttonDefText = 'Copy'

  button.innerText = buttonDefText
  button.onclick = function () {
    navigator.clipboard.writeText(inputElem.value)
    this.innerText = 'Copied!'

    setTimeout(() => {
      this.innerText = buttonDefText
    }, 5 * 1000) // 5s
  }
  afterElem.appendChild(button)
}
