const injectError = (selector, error) =>
  $(selector).html(`
    <span class="error">Error: ${error}</span>
  `)
