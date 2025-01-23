"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

const blogData = {
  blog1: {
    title: "Design conferences in 2022",
    date: "Feb 23, 2022",
    category: "Design",
    content: `
      
    <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien at lorem facilisis.</p>
      <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien at lorem facilisis.</p>
      <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien at lorem facilisis.</p>
      <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien at lorem facilisis.</p>
      <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien at lorem facilisis.</p>
      <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien at lorem facilisis.</p>
      <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien at lorem facilisis.</p>
    `,
    image: "./assets/images/blog-1.jpg",
  },
  blog2: {
    title: "Best fonts every designer",
    date: "Feb 23, 2022",
    category: "Design",
    content: `
      <p>Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida convallis orci.</p>
    `,
    image: "./assets/images/blog-2.jpg",
  },
  blog3: {
    title: "Design digest #80",
    date: "Feb 23, 2022",
    category: "Design",
    content: `
      <p>Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.</p>
      <p>Morbi a eros ac metus malesuada feugiat id nec arcu.</p>
    `,
    image: "./assets/images/blog-3.jpg",
  },
};

function showBlogDetails(blogId) {
  const blog = blogData[blogId];
  document.getElementById("blog-details").style.display = "block";
  document.querySelector(".blog-posts").style.display = "none";

  document.getElementById("blog-content").innerHTML = `
    <figure>
      <img src="${blog.image}" alt="${blog.title}" style="width: 100%; margin-bottom: 15px;">
    </figure>
    <h2>${blog.title}</h2>
    <div>
      <span>${blog.category}</span> | <time>${blog.date}</time>
    </div>
    <div>${blog.content}</div>
  `;
}

function hideBlogDetails() {
  document.getElementById("blog-details").style.display = "none";
  document.querySelector(".blog-posts").style.display = "block";
}
