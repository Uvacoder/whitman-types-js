Simple typewriter effect in vanilla js -------------------

Title: Whitman Types
Skill-Level: Intermediate 

**ASSETS**
- fonts
- colors

**PREREQUISITES**
Needs basic understanding of: 
    -Object literals
    -Array manipulation
    -ES6 syntax
    -Functions 

**STEPS**
1) Let's try to print out one character from a sentence the console

          const typewriter = {
            sentence: 'Hello my name is Kendall',
            character: '',
            getChar: function() {
              console.log(this.sentence.substring(0, this.character.length + 1))
            }
          }

          typewriter.getChar()

  This should output 'H' or the first letter in your sentence string. 

 2) Now print out the whole sentence 

 3) Now let's print out a random sentence from an array of multiple 

 4) Add the event listener

 5) Fix the multiple typing bug