function open_tab(evt, target) {

  if(evt.currentTarget.classList.contains('active')) {
    document.getElementById(target).style.display = "none";
    evt.currentTarget.className = evt.currentTarget.className.replace('active', '');
    return;
  }

  var i, tab_content, tab_links;

  // Hides all tabs contents.
  tab_content = document.getElementsByClassName("tab-content");
  for (i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none";
  }

  // Removes "active" from all tab links.
  tab_links = document.getElementsByClassName("tab-link");
  for (i = 0; i < tab_links.length; i++) {
    tab_links[i].className = tab_links[i].className.replace(" active", "");
  }

  document.getElementById(target).style.display = "block";
  evt.currentTarget.className += " active";
}
