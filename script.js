const navbar = document.getElementById('nav-inner')
const content = document.getElementById('content')

const onNavbarButtonClick = e => {
  const tagName = e.srcElement.innerText.toLowerCase()

  for (let child of content.children) {
    if (child.id === tagName) {
      child.classList.remove('hidden')
    } else {
      child.classList.add('hidden')
    }
  }
}

for (let child of navbar.children) {
  if (child.tagName === 'SPAN') {
      child.onclick = onNavbarButtonClick
  }
}
