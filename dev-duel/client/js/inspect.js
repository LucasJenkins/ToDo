/* eslint-disable no-undef */
$('form').submit(() => {
  const username = $('form input').val()
  console.log(`examining ${username}`)

  // Fetch data for given user
  // (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  fetch(`${USER_URL}/${username}`)
    .then(response => Promise.all([response.status, response.json()])) // Returns parsed json data from response body as promise
    .then(([status, data]) => {
      switch (status) {
        case 400:
          // Handle Errors
          break
        case 404:
          injectError('.user-error', data.message)
          $('.user-results').addClass('hide')
          $('.user-results').html('')
          $('form input').addClass('red-border')
          $('.user-error').removeClass('hide')
          break
        case 200:
          console.log(`Got data for ${username}`)
          console.log(data)
          injectData('.user-results', data)
          $('.user-error').addClass('hide')
          $('.user-error').html('')
          $('.user-results').removeClass('hide') // Display '.user-results' element
          break
        default:
          // Some default behavior
          break
      }
    })
    .catch(err => {
      console.log(`Error getting data for ${username}`)
      console.log(err)
      injectError('.user-error', err)
      $('.user-results').addClass('hide')
      $('.user-results').html('')
      $('.user-error').removeClass('hide')
    })

  return false // return false to prevent default form submission
})
