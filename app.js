//---------------------------------------------------------------------
//create a function (need to use ES5 functiont for binding purposes)
// where we can store props&methods
//store the data, print out a character to the console

// const typewriter = {
//   sentence: 'We are a full service digital agency',
//   character: '',
//   getChar: function() {
//     console.log(this.sentence.substring(0, this.character.length + 1))
//   }
// }

// typewriter.getChar()

//----------------------------------------------------------------------
//now let's print out the whole sentence to the console

// const typewriter = {
//   sentence: 'We are a full service digital agency',
//   character: '',
//   getChar: function(i) {
//     while(i < this.sentence.length + 1) {
//       console.log(this.sentence.substring(0, this.character.length + i))
//       i++
//     }
//   }
// }

// typewriter.getChar(0,0)
// console.log(typewriter.sentence.length)

//this is a good start, but its repeating, giving us all the characters again and again

//--------------------------------------------------------------------

// const typewriter = function() {
//   this.sentence = 'We are a full service digital agency'
//   this.character = ''
//   this.getChar = setInterval(function(i){
//     document.querySelector('h1').textContent += this.sentence[i]
//     i++
//   }, 250)

//   if (i > this.sentence.length - 1) {
//     clearInterval(this.getChar)
//   }

//   getChar(0)
// }

//----------------------------------------------------------------------
//get it to work with one sentence
// const sentence = 'We are a full service digital agency'
// let i = 0;
// const typewriter = setInterval(function(){
//   document.querySelector('h1').textContent += sentence[i]
//   i++
//   if (i > sentence.length - 1) {
//     clearInterval(typewriter)
//   }
// }, 125);

//---------------------------------------------------------------------
//lets add some more sentences and make it loop
// const sentence = ['We are a full service digital agency', 'Constantly drinking La Croix', 'Work with us']
// //this var will keep track of which sentence we are typing
// let sentenceToType = 0;
// let numberOfSentences = sentence.length
// let i = 0
// const h1Tag = document.querySelector('h1')

// const clearSentence = () => {
//   console.log('clear sentence')
//   i = 0
//   sentenceToType++
//   h1Tag.textContent = ''
// }

// const clearToBeginning = () => {
//   console.log('clear to beginning')
//   i = 0
//   sentenceToType = 0
//   h1Tag.textContent = ''
// }

// const typewriter = setInterval(function(){
//   //this var is our counter for which character to type
 
//   let sentenceTyping = sentence[sentenceToType]
//   let characters = sentenceTyping.split('')
//   h1Tag.textContent += characters[i]
//   i++

//   i > characters.length && clearSentence()
//   sentenceToType >= numberOfSentences && clearToBeginning()

//   //if we have typed out all of the sentences, stop the function
//   if (sentenceToType >= 30) {
//     clearInterval(typewriter)
//   }
// }, 125);

/*----------------------------------------------------------------------------*/
//also want to make the typing speed a little more organic

// const sentence = ['We are a full service digital agency', 'Constantly drinking La Croix', 'Work with us']
// //this var will keep track of which sentence we are typing
// let sentenceToType = 0;
// let numberOfSentences = sentence.length
// let i = 0
// const h1Tag = document.querySelector('h1')
// let characters
// let typingRate = 125

// //we want to add some delay here 
// const clearSentence = () => {
//   console.log('clear sentence')
//   i = 0
//   sentenceToType++
//   h1Tag.textContent = ''
// }

// const clearToBeginning = () => {
//   console.log('clear to beginning')
//   i = 0
//   sentenceToType = 0
//   h1Tag.textContent = ''
// }

// const typeSentence = () => {
//   let sentenceTyping = sentence[sentenceToType]
//   characters = sentenceTyping.split('')
//   h1Tag.textContent += characters[i]
//   i++
// }

// const typewriter = setInterval(function(){

//   //initiate the typing
//   typeSentence()
//   typingRate = 200 - Math.random() * 100

//   i > characters.length && clearSentence()

//   sentenceToType >= numberOfSentences && clearToBeginning()

//   //if we have typed out all of the sentences, stop the function
//   if (sentenceToType >= 30) {
//     clearInterval(typewriter)
//   }
// }, typingRate);

/*---------------------------------------------------------------------*/
//problem - lets add a delay on when the next sentence starts typing

const sentence = ['We are a full service digital agency', 'Constantly drinking La Croix', 'Work with us']
//this var will keep track of which sentence we are typing
let sentenceToType = 0;
let numberOfSentences = sentence.length - 1
let i = 0
const h1Tag = document.querySelector('h1')
let characters
let typingRate = 125

//we want to add some delay here 
const clearSentence = () => {
  console.log('clear sentence')
  i = 0
  sentenceToType++
  h1Tag.textContent = ''
}

const clearToBeginning = () => {
  console.log('clear to beginning')
  i = 0
  sentenceToType = 0
  h1Tag.textContent = ''
}

const typeSentence = () => {
  let sentenceTyping = sentence[sentenceToType]
  characters = sentenceTyping.split('')
  h1Tag.textContent += characters[i]
  i++
}

const typewriter = setInterval(function(){

  //initiate the typing
  typeSentence()
  typingRate = 200 - Math.random() * 100

  i > characters.length && clearSentence()

  sentenceToType >= numberOfSentences && clearToBeginning()

  //if we have typed out all of the sentences, stop the function
  if (sentenceToType >= 30) {
    clearInterval(typewriter)
  }
}, typingRate);