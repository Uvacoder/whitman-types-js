Simple typewriter effect in vanilla js -------------------

Title: Whitman Types
Skill-Level: Intermediate 
Hosted: https://kendallstrautman.github.io/whitman-types-js/

**ASSETS**
- Font: Archivo Black via Google Fonts

    font-family: 'Archivo Black', sans-serif;
    @import url('https://fonts.googleapis.com/css?family=Archivo+Black');

- Colors: Purple - #B869FB & Yellow - #EFEF64

- Poem Data: 
    '"Do I contradict myself? Very well then I contradict myself, (I am large, I contain   multitudes.)"', 
    '"I celebrate myself, and sing myself."', 
    '"Re-examine all that you have been told... dismiss that which insults your soul."', 
    '"I exist as I am, that is enough."',
    '"Be curious, not judgmental."',
    '"And your very flesh shall be a great poem."',
    '"...the powerful play goes on, and you will contribute a verse."',
    '"Keep your face always toward the sunshine - and shadows will fall behind you."',
    '"To die is different from what any one supposed, and luckier."'

- Styles: should already be applied at the beginning of video -- the explanation of the js will take the entire tutorial length

**PREREQUISITES**

Needs basic understanding of: 
  - Object literals
  - Array manipulation
  - ES6 syntax
  - Functions 

**STEPS**
1) Let's try to split a sentence into its characters and print it to the console

          const typewriter = {
            sentence: 'Hello my name is Kendall',
            isTyping: function() {
              console.log(this.sentence.split(''))
            }
          }

          typewriter.isTyping()

  This should output an array of characters that make up the sentence  

2) Instead of printing to the console now let's get it on the dom

          const h1Tag = document.querySelector('h1')

          const typewriter = {
            sentence: 'Hello my name is Kendall',
            isTyping: function() {
              h1Tag.innerHTML += this.sentence.split('')
            } 
          }

          typewriter.isTyping()

  This is a good start, but all of the characters are printing at once and with commas

3) Now let's get rid of the commas by storing the characters in a variable and looping
 over that variable to print to the screen

            const h1Tag = document.querySelector('h1')

            const typewriter = {
              sentence: 'Hello my name is Kendall',
              isTyping: function() {
                const greetingChars = this.sentence.split('')
                for(let i = 0; i < greetingChars.length; i++) {
                  h1Tag.innerHTML += greetingChars[i]
                }
              }
            }

            typewriter.isTyping()

  You can't see it, but each character is being printed to the screen individually. The browser computes it so fast that it seems like they all load at once. 

4) Let's add some delay between each character printing. This part is a little trickier. 

              const h1Tag = document.querySelector('h1')

              const typewriter = {
                sentence: 'Hello my name is Kendall',
                isTyping: function() {
                  const greetingChars = this.sentence.split('')
                  for(let i = 0; i < greetingChars.length; i++) {
                    setTimeout(function() {
                      h1Tag.innerHTML += greetingChars[i]
                    }, 200)
                  }
                }
              }

              typewriter.isTyping()

  You would think this code would add a 200ms delay between each loop as it's getting
  printed, unfortunately this is not exactly how the browser executes the code and we
  end up getting the same result, with no delay between characters getting printed. 
 
 
5) We need to refactor our for loop to be a self-calling function, and then have it call itself in order to execute setTimeout properly. 

                const h1Tag = document.querySelector('h1')

                const typewriter = {
                  sentence: 'Hello my name is Kendall',
                  isTyping: function() {
                    const greetingChars = this.sentence.split('')
                    ;(function loopThroughChars(i) {
                      setTimeout(function() {
                        h1Tag.innerHTML += greetingChars[i]
                        if(i < greetingChars.length - 1) {
                          i++
                          loopThroughChars(i)
                        }
                      }, 200)
                    }(0))
                  }
                }

                typewriter.isTyping()
 

  *Note, if you don't use semi-colons typically, this is one of those situations where you need to use a semi-colon before the self-calling function

  **Another Note - the tutorial could end here if time is an issue, typing out just one sentence.

6) If you wanted to add more sentences...let's refactor to get the whitman data in there
  - we need to make an array of sentences (or poems) to type
  - we need to pick a random sentence(poem) to type

                const h1Tag = document.querySelector('h1')

                const typewriter = {
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
                  chooseRandomPoem: function () {
                        return Math.floor(Math.random() * this.poems.length)
                  },
                  isTyping: function() {
                    const poem = this.poems[this.chooseRandomPoem()]
                    const poemChars = poem.split('')
                    
                    ;(function loopThroughChars(i) {
                      setTimeout(function() {
                        h1Tag.innerHTML += poemChars[i]
                        if(i < poemChars.length - 1) {
                          i++
                          loopThroughChars(i)
                        }
                      }, 200)
                    }(0))
                  }
                }

                typewriter.isTyping()

  Now everytime you refresh, you will see a random poem is typed out. 

 4) Add an 'again' button and event listener
  - Now add an 'again' button (the actual text can be whatever you please) in the index.html
  - Get ahold of that button and add an event listener that will rerun the typewriter

                  const againTag = document.querySelector('span.again')
  
                  againTag.addEventListener('click', () => {
                        h1Tag.innerHTML = ''
                        typewriter.isTyping()
                    })

  Perfect! But if you click the 'again' button a few times in a row, you will see a bug - the
  isTyping method is getting called mutiple times, so it's printing multiple poems at once.

 5) Let's fix that bug
  - Add a boolean that can check whether the isTyping method is currently running
  - In our isTying method, toggle between true/false as the function starts and stops
  - Add some conditional logic to our event listener to prevent multiple calls on isTyping

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
                        const poemChars = poem.split('')

                        //self-calling function to loop through characters and add to dom
                        ;(function loopThroughChars(i){

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
                      
                            //can adjust the typing speed here 
                          }, 200)

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
                
6) Bonus! Add some randomness to the delay to have an organic typing feel
    - Use math.random() magic in the setTimeout function on the isTyping method

                      //typing method
                      isTyping: function() {
                        isTyping = true

                        //store the single poem in a variable
                        const poem = this.poems[this.chooseRandomPoem()]

                        //split up the poem into an array of single characters
                        const poemChars = poem.split('')

                        //self-calling function to loop through characters and add to dom
                        ;(function loopThroughChars(i){

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

