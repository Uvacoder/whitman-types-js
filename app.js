const h1Tag = document.querySelector('h1')
const againTag = document.querySelector('span.again')
let isTyping  

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
    isTyping = true
    const poem = this.poems[this.chooseRandomPoem()]
    const poemChars = poem.split('')
    ;(function loopThroughChars(i){
      setTimeout(function() {
        h1Tag.innerHTML += poemChars[i]
        if(i < poem.length - 1) {
          i++
          loopThroughChars(i)
        } else {
          isTyping = false
        }
      }, (200 - Math.random() * 100))
    }(0))
  }, 
}

typewriter.isTyping()

againTag.addEventListener('click', () => {
  if(!isTyping) {
    h1Tag.innerHTML = ''
    typewriter.isTyping()
  }
})