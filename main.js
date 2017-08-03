const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const add = document.querySelector("#add")
const minus = document.querySelector("#minus")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")
const decimal = document.querySelector("#decimal")
const clear = document.querySelector("#clear")
const answer = document.querySelector("#answer")
const button = document.querySelectorAll('.button')
const array = []
const answerArray = []
for(let i=0; i<button.length; i++){
  button[i].addEventListener('click', function(){
    if(button[i] === zero || button[i] === one || button[i] === two || button[i] === three || button[i] === four || button[i] === five || button[i] === six || button[i] === seven || button[i] === eight || button[i] === nine || button[i] === decimal || button[i] === divide || button[i] === minus || button[i] === add || button[i] === multiply){
      answerArray.push(button[i].textContent)
      array.push(button[i].textContent)
      answer.textContent = answerArray.join('')
    } else if(button[i] === multiply) {
      answerBox.push("*")
      array.push("*")
      answer.textContent = answerBox.join('')
    }
      else if (button[i] === equals) {
        const final = eval(array.join(''))
          answer.textContent = final
          array.length = 0
          answerArray.length = 0
          array.push(answer.textContent)
          answerArray.push(answer.Content)
      }
      else if (button[i] === clear) {
        array.length = 0
        answerArray.length = 0
        answer.textContent = ''
        return array + answerArray
      }
  })
}
