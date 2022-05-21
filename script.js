function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

openNav();

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

closeNav();

/* eslint-disable */

function menuOptions(param) {
  window.location.href = param;
  const links = document.getElementById('myNav');
  closeNav();
}

// form validation
const form = document.querySelector('.form-text');
const emailInput = form.elements.email;

const INPUT_LOWERCASE = 'Error : Please enter email a lowercase input';

function showMessage(input, message, type) {
  const msg = document.querySelector('.error-text');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidLowercase) {
  if (input.value === input.value.toLowerCase()) {
    return true;
  }
  return showError(input, invalidLowercase);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateEmail(emailInput, INPUT_LOWERCASE);
  if (emailValid) {
    form.submit();
  }
});

// Array data

let Data = [
  {
    id: 1,
    subtitle: 'Multi-Post Stories',
    description: '\n' + 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    popuptext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: {
      image1: 'assets/images/pex.jpeg',
      popup: 'assets/images/pex1.jpeg',
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
   style: {
      style1: 'section-1',
   },
   button: {
     live: 'See live',
     source: 'See source'
   }
  },
  {
    id: 2,
    subtitle: 'Multi-Post Stories',
    description: '\n' + 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: 'assets/images/pr.jpeg'
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-2',
    },
    imageleft: 'image-left',
  },
  {
    id: 3,
    subtitle: 'Multi-Post Stories',
    description: '\n' + 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: 'assets/images/pex1.jpeg',
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-1',
    }

  },
  {
    id: 4,
    subtitle: 'Multi-Post Stories',
    description: '\n' + 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: 'assets/images/pex2.jpeg',
    },
    technologies: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-2',
    },
    imageleft: 'image-left',
  }
]

const gridContainer = document.getElementById('project_container');

document.getElementById('body').onload = () => {
  Data.forEach((project, index) => {
    console.log(project);
    gridContainer.innerHTML += `
        <div class="${project.style.style1} image-back">
            <div class="placeholder">
              <img src="${project.image.image1}" class="image1" alt="">
            </div>
          <div class="background-image2">
              <h4>${project.subtitle}</h4>
              <div>
                  <p>
                     ${project.description}
                  </p>
              </div>

              <div>
                  <ul class="list-2">
                      <li>${project.technologies.css}<li>
                      <li>${project.technologies.html}</li>
                      <li>${project.technologies.bootstrap}</li>
                      <li>${project.technologies.ruby}</li>
                  </ul>
              </div>
              <button class="see-more" id="see-more-button"  type="button">See Project</button>
          </div>
       </div>
    `;

    const seeMore = document.querySelectorAll('.see-more');

    seeMore.forEach((btn) => {
      btn.addEventListener('click', () => {
        const popups = document.getElementById("popping");
        popups.style.visibility = "visible";
        const heads = document.getElementById('title-1');
        const paragraph = document.getElementById("pargaraph");
        const popupimages = document.getElementById("popup-images");
        const tech = document.querySelector('.tech');
        const tech1 = document.querySelector('.tech1');
        const tech2 = document.querySelector('.tech2');

        heads.innerHTML = project.subtitle;
        paragraph.innerHTML = project.description;
        popupimages.src = project.image.image1;
        tech.innerHTML = project.technologies.css;
        tech2.innerHTML = project.technologies.html;
        tech1.innerHTML = project.technologies.bootstrap;
        console.log("Clicked see more")
      });
    });

    const closepopup = document.getElementById("close-pop-up");

    closepopup.addEventListener('click', () => {
      const popup2 = document.getElementById('popping');
      popup2.style.visibility = "hidden";
    })
  });

  const showUpContent = document.getElementById("see-more-button");
  showUpContent.addEventListener('click', () => {
    const popups = document.getElementById("popping");
    popups.style.visibility = "visible";
  });
}





