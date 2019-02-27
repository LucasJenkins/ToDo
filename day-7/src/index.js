const textElements = document.querySelectorAll('.text')

textElements.forEach(text => {
  text.classList.remove('hide')
  text.addEventListener('click', () => console.log('You clicked the ipsum'))
})

console.log(textElements)

$('.fetch-button').click(() => {
  fetch('https://aws.random.cat/meow')
    .then(data => data.json())
    .then(obj =>
      $('img')
        .attr('src', obj.file)
        .attr('alt', 'Some random cat')
    )
    .catch(err => console.log(err))
})
