function open_tab(evt, target) {
  var i, tab_content, tab_links;

  // Hides all tabs contents.
  tab_content = document.getElementsByClassName("tab-content");
  for (i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none";
  }

  // Removes "active" from all tab links.
  tab_links = document.getElementsByClassName("tab");
  for (i = 0; i < tab_links.length; i++) {
    tab_links[i].className = tab_links[i].className.replace(" active", "");
  }

  document.getElementById(target).style.display = "block";
  evt.currentTarget.className += " active";
}
