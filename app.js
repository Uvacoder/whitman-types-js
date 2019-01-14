//get the dom elements we are going to manipulate
const h1Tag = document.querySelector('h1')
const againTag = document.querySelector('span.again')
//initiate a bool to check whether isTyping
let isTyping  

//create a typewriter object
const typewriter = {

  //a property where we store poems (or any data) to type in an array
  poems: [
    '"Do I contradict myself? Very well then I contradict myself, (I am large, I contain multitudes.)"', 
    '"I celebrate myself, and sing myself."', 
    '"Re-examine all that you have been told... dismiss that which insults your soul."', 
    '"I exist as I am, that is enough."',
    '"Be curious, not judgmental."',
    '"And your very flesh shall be a great poem."',
    '"...the powerful play goes on, and you will contribute a verse."',
    '"Keep your face always toward the sunshine - and shadows will fall behind you."',
    '"To die is different from what any one supposed, and luckier."'
  ],

  //method to get random number between 0 and the length of the poems array
  chooseRandomPoem: function () {
    return Math.floor(Math.random() * this.poems.length)
  },

  //typing method
  isTyping: function() {
    isTyping = true

    //store the single poem in a variable
    const poem = this.poems[this.chooseRandomPoem()]

    //split up the poem into an array of single characters
    const poemChars = poem.split('');

    //self-calling function to loop through characters and add to dom
    (function loopThroughChars(i){

      //delay how fast each character gets typed
      setTimeout(function() {

        //add the character to the h1 element
        h1Tag.innerHTML += poemChars[i]

        //if we haven't reached the end of the poem yet,
        if(i < poem.length - 1) {

          //increment i and call the function again
          i++
          loopThroughChars(i)

        } else {
          isTyping = false
        }
        //this makes the time between characters typed more random
        //can adjust the speed here with that first number

      }, (200 - Math.random() * 100))

    //the self-calling function is first passed 0 
    }(0))
  }, 
}

//call the typing method on the typewriter object
typewriter.isTyping()

//listen for a click on the 'again' element
againTag.addEventListener('click', () => {

  //checks to see if its already typing
  if(!isTyping) {
    //clear the h1 element of the previous poem
    h1Tag.innerHTML = ''

    //runs the typing method again
    typewriter.isTyping()
  }
  
})
 
