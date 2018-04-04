function generateText () {
  var element = document.createElement('h2');
  element.innerHTML = 'Hello h2 word!';
  return element ;
}

module.exports = generateText;
