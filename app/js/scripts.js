var tabs = document.querySelectorAll('nav a')
var contentPara = document.querySelector('.content')

function makeActive(event) {
  if (!event.target.matches('nav a')) return
  makeInactive()
  event.target.classList.add('active')
  // const type = window.location.hash.substring(1);
  // contentPara.innerHTML = data[type];
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'))
}

// function setContentAccordingToHash() {
//   const type = window.location.hash.substring(1)
//   contentPara.innerHTML = data[type]
// }

// function setContentAccordingToHash() {
//   const type = window.location.hash.substring(1)
//   for (var i = 0; i < data.length; i++) {
//     if (data[i].section === type) {
//       contentPara.innerHTML = data[i].story
//       setActiveTabAccordingToHash(type)
//     }
//   }
// }

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1)
  data.forEach(function (item) {
    if (item.section === type) {
      contentPara.innerHTML = `<h2>${item.section}</h2> <p>${item.story}</p>`
      setActiveTabAccordingToHash(type)
    }
  })
}

function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'cuisines'
    document.querySelector('[href="#cuisines"]').classList.add('active')
  } else {
    document
      .querySelector(`[href="${window.location.hash}"]`)
      .classList.add('active')
  }
  setContentAccordingToHash()
}

document.addEventListener('click', makeActive)
window.addEventListener('hashchange', setContentAccordingToHash)

document.addEventListener('DOMContentLoaded', initializePage)
