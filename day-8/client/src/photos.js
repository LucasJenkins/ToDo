$('nav').append(nav('index', 'Home'))

$('#photo-button').click(() => {
  fetch(PHOTOS_URL)
    .then(response => response.json())
    .then(urls =>
      urls.forEach(url => {
        $('.card-group').append(`
        <div class='card'>
          <div class='card-image-container'>
            <img class='card-image' src=${url} />
          </div>
        </div>
      `)
      })
    )
})
