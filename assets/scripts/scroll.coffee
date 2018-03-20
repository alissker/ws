---
# Hello, Jekyll!
---

$('a[href^="#"]').on 'click', (event) ->
  target = $(@getAttribute('href'))
  if target.length
    event.preventDefault()
    $('html, body').stop().animate { scrollTop: target.offset().top - 50 }, 1000
  return

$('.section-link').click ->
  $('#nav-trigger').prop 'checked', false
  return
