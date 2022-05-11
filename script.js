function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

openNav();

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

closeNav();

const btn = document.querySelector('#btn');

function display() {
  alert('It was click');
}

btn.addEventListener('click', display);

/* eslint-disable */

function menuOptions(param) {
  window.location.href = param;
  const links = document.getElementById('myNav');
  closeNav();
}

const Data = [
  {
    id: "project-1",
    name: 'Multi-Post Story ',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when,an unknown printer took a standard dummy text.',
    image: {
      image1: 'assets/images/placeholder.png',
      popup: 'assets/popup-window/snapshot.png',
      mobile: 'assets/popup-window/phone.png',
    },
    technologies: {
      style1: 'css',
      markup: 'html',
      style2: 'bootstrap',
      lag: 'ruby'
    },
    live: 'link',
    source: 'source',
    style: {
      style2: 'image-row1'
    },
    story: 'Muilt-Post Stories',
    description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.' +
        ' has been the industry standard dummy text ever since the 1500s, when,an unknown printer' +
        ' took a standard dummy text.'
  },

  {
    id: "project-2",
    name: 'Multi-Post Story ',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when,an unknown printer took a standard dummy text.',
    image:{
      image1: 'assets/images/placeholder.png',
      popup: 'assets/popup-window/snapshot.png',
      mobile: 'assets/popup-window/phone.png',
    },
    technologies: {
      style1: 'css',
      markup: 'html',
      style2: 'bootstrap',
      lag: 'ruby'
    },
    live: 'link',
    source: 'source',
    style: {
      style2: 'image-row2'
    },
    story: 'Muilt-Post Stories',
    description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.' +
        ' has been the industry standard dummy text ever since the 1500s, when,an unknown printer' +
        ' took a standard dummy text.'
  },

  {
    id: "project-3",
    name: 'Multi-Post Story ',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.' +
        ' has been the industry standard dummy text ever since the 1500s, when,an unknown printer' +
        ' took a standard dummy text.',
    image:{
      image1: 'assets/images/placeholder.png',
      popup: 'assets/popup-window/snapshot.png',
      mobile: 'assets/popup-window/phone.png',
    },
    technologies: {
      style1: 'css',
      markup: 'html',
      style2: 'bootstrap',
      lag: 'ruby'
    },
    live: 'link',
    source: 'source',
    style: {
      style2: 'image-row1'
    },
    story: 'Muilt-Post Stories',
    description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.' +
        ' has been the industry standard dummy text ever since the 1500s, when,an unknown printer' +
        ' took a standard dummy text.'
  },
  {
    id: "project-4",
    name: 'Multi-Post Story ',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when,an unknown printer took a standard dummy text.',
    image:{
      image1: 'assets/images/placeholder.png',
      popup: 'assets/popup-window/snapshot.png',
      mobile: 'assets/popup-window/phone.png',
    },
    technologies: {
      style1: 'css',
      markup: 'html',
      style2: 'bootstrap',
      lag: 'ruby'
    },
    live: 'link',
    source: 'source',
    style: {
      style2: 'image-row2'
    },
    story: 'Muilt-Post Stories',
    description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.' +
        ' has been the industry standard dummy text ever since the 1500s, when,an unknown printer' +
        ' took a standard dummy text.'
  },
];

const gridContainer = document.getElementById('project_container');
document.getElementById('body').onload = () => {
  Data.forEach((project, index) => {
    gridContainer.innerHTML += `
        <div class="${project.style.style2}">
        <ul class="image-white-dive">
          <li class="image-desktop">
            <img src="${project.image.image1}" alt="" class="image-white" />
          </li>
        </ul>
        <div class="multi">
          <div class="contact-info">
            <h1>${project.name}</h1>
          </div>
          <p class="last-text">
            ${project.description}
          </p>
          <div class="lang">
            <p class="last-text1">${project.technologies.style1}</p>
            <p class="last-text1">${project.technologies.markup}</p>
            <p class="last-text1">${project.technologies.style2}</p>
            <p class="last-text1-1">${project.technologies.lag}</p>
          </div>
          <button onclick="generateModal(this)" class="btn-1 button1" id="${Data[index].id}" type="submit">See Project</button>
        </div>
      </div>`;
  });
}
