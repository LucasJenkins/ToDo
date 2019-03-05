const addSpan = (value, className) =>
  value ? `<span class="${className}">${value}</span>` : ''

const generateStat = (stat, title) =>
  stat
    ? `<div class="stat">
<span class="label">${title}</span>
<span class="titles value">${stat}</span>
</div>`
    : ''

const injectData = (selector, user) => {
  $(selector).empty().append(`
    ${addSpan(user.username, 'username')}
    ${addSpan(user.name, 'full-name')}
    ${addSpan(user.location, 'location')}
    ${addSpan(user.email, 'email')}
    ${addSpan(user.bio, 'bio')}
    <img class="avatar" src="${user['avatar-url']}" alt="avatar picture">
    <div class="stats">
      ${generateStat(
    user.titles && user.titles.length ? user.titles : '',
    'Titles:&nbsp;'
  )}
      ${generateStat(user['favorite-language'], 'Favorite language:&nbsp;')}
      ${generateStat(user['total_stars'], 'Total stars:&nbsp;')}
      ${generateStat(user['highest-starred'], 'Highest star count:&nbsp;')}
      ${generateStat(user['public-repos'], 'Public repos:&nbsp;')}
      ${generateStat(user['perfect-repos'], "Perfect' Repos:&nbsp;")}
      ${generateStat(user.followers, 'Followers:&nbsp;')}
      ${generateStat(user.following, 'Following:&nbsp;')}
    </div>
`)
}
