const h1Tag = document.querySelector('h1')
const againTag = document.querySelector('span.again')

//create a typewriter object
const typewriter = {
  poems: [
    '"Do I contradict myself? Very well then I contradict myself, (I am large, I contain multitudes.)"', 
    '"I celebrate myself, and sing myself."', 
    '"Re-examine all that you have been told... dismiss that which insults your soul."', 
    '"I exist as I am, that is enough."'
  ],
  type: function(n) {
    const poem = this.poems[n]
    const poemChars = poem.split('');
    (function loopThroughChars(i){
      setTimeout(function() {
        h1Tag.innerHTML += poemChars[i]
        if(i < poem.length - 1) {
          i++
          loopThroughChars(i)
        }
      }, (200 - Math.random() * 100))
    }(0))
  }, 
}

const getRandom = () => {
  return Math.floor(Math.random() * typewriter.poems.length)
}

let n = getRandom()

typewriter.type(n)

againTag.addEventListener('click', () => {
  console.log('click')
  h1Tag.innerHTML = ''
  n = getRandom()
  typewriter.type(n)
})