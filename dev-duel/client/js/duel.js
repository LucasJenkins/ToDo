/* eslint-disable no-undef */
/*
  TODO
  Fetch 2 user's github data and display their profiles side by side
  If there is an error in finding user or both users, display appropriate error
  message stating which user(s) doesn't exist

  It is up to the student to choose how to determine a 'winner'
  and displaying their profile/stats comparison in a way that signifies who won.
 */
/* eslint-disable no-undef */
$('form').submit(() => {
  const usernameLeft = $('.username-left').val()
  const usernameRight = $('.username-right').val()

  if (!usernameLeft) {
    injectError('.duel-error', 'Please enter a username in the left field')
    $('.duel-container').html('')
    $('.duel-container').addClass('hide')
    $('.username-right').removeClass('red-border')
    $('.username-left').addClass('red-border')
    $('.duel-error').removeClass('hide')
    return false
  }

  if (!usernameRight) {
    injectError('.duel-error', 'Please enter a username in the right field')
    $('.duel-container').html('')
    $('.duel-container').addClass('hide')
    $('.username-left').removeClass('red-border')
    $('.username-right').addClass('red-border')
    $('.duel-error').removeClass('hide')
    return false
  }

  console.log(`examining ${usernameLeft} and ${usernameRight}`)

  // Fetch data for given users
  // (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  fetch(`${USERS_URL}?username=${usernameLeft}&username=${usernameRight}`)
    .then(response => Promise.all([response.status, response.json()])) // Returns parsed json data from response body as promise
    .then(([status, data]) => {
      if (status === 400) {
        injectError('.duel-error', data.message)
        $('.duel-container').html('')
        $('.duel-container').addClass('hide')
        $('.username-left, .username-right').addClass('red-border')
        $('.duel-error').removeClass('hide')
      }
      if (status === 200) {
        console.log(`Got data for ${usernameLeft} and ${usernameRight}`)
        injectData('.user-results.left', data[0])
        injectData('.user-results.right', data[1])
        $('.duel-error').addClass('hide')
        $('.duel-error').html('')
        $('.duel-container').removeClass('hide')
      }
    })
    .catch(err => {
      console.log(`Error getting data for ${usernameLeft} and ${usernameRight}`)
      console.log(err)
      injectError('.duel-error', err)
      $('.duel-error').removeClass('hide')
    })

  return false // return false to prevent default form submission
})
