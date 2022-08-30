<<<<<<< HEAD
const pythonBtn = document.querySelector(".python-courses-btn");
const excelBtn = document.querySelector(".excel-courses-btn");
const webBtn = document.querySelector(".web-courses-btn");
const jsBtn = document.querySelector(".js-courses-btn");
const dataBtn = document.querySelector(".data-courses-btn");
const AwsBtn = document.querySelector(".aws-courses-btn");
const DrawingBtn = document.querySelector(".drawing-courses-btn");
let python = [],
  aws = [],
  js = [],
  Excel = [];
let Data_sci = [],
  Drawing = [],
  Web_dev = [];
async function FETCH() {
  const res = await fetch("db.json");
  const data = await res.json();
  python.push(data[0]);
  Excel.push(data[1]);
  Web_dev.push(data[2]);
  js.push(data[3]);
  Data_sci.push(data[4]);
  aws.push(data[5]);
  Drawing.push(data[6]);
  return true;
=======
let parent = document.querySelector(".courses_preview");
let courses_data = [];
function Fetch() {
  fetch("https://proabdo.github.io/UdemyClone-Bld.ai-Phase2/db.json")
    .then((res) => res.json())
    .then((data) => {
      let coursesData = data.courses_list;
      coursesData.forEach((course) => {
        parent.append(Show(course));
        courses_data.push({ id: course.id, title: course.title });
      });
    });
>>>>>>> ca20cf3a02afbd6e26d7ec9e310cc78fd2280b18
}

function CreateCard(card) {
  let items_container1 = document.querySelector(".items-container.one");
  let items_container2 = document.querySelector(".items-container.two");
  let container = document.querySelector("#carouselExampleControls");
  let item_all = container.querySelectorAll("div.carousel-item");
  let inhtml = "",
    allhtml = "";
  ////////////////////////////////////////////////////////////////////////////
  items_container1.innerHTML = "";
  items_container2.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    let inhtml = "";
    inhtml += `<div class="card">`;
    inhtml += `
    <img src= ${card[i].img} class="card-img-top" alt="...">
    <div class="card-body">
      <div class="card-title">${card[i].title}</div>
      <div class="card-author">${card[i].author}</div>
      <div class="card-rate">
        <span class="checked">4.4</span>
        <img class="course_rating_stars" src="${card[i].draw_star}" />
        <span class="students">${card[i].students}</span>
      </div>
      <div class="card-price">${card[i].price}</div>
      <p class="course_badge">Bestseller</p>
    </div>
    `;
    inhtml += `</div>`;
    item_all[i].innerHTML = inhtml;
    items_container1.innerHTML += inhtml;
  }
  for (let i = 4; i < 8; i++) {
    let inhtml = "";
    inhtml += `<div class="card">`;
    inhtml += `
    <img src= ${card[i].img} class="card-img-top" alt="...">
    <div class="card-body">
      <div class="card-title">${card[i].title}</div>
      <div class="card-author">${card[i].author}</div>
      <div class="card-rate">
        <span class="checked">4.4</span>
        <img class="course_rating_stars" src="${card[i].draw_star}" />
        <span class="students">${card[i].students}</span>
      </div>
      <div class="card-price">${card[i].price}</div>
      <p class="course_badge">Bestseller</p>
    </div>
    `;
    inhtml += `</div>`;
    item_all[i].innerHTML = inhtml;
    items_container2.innerHTML += inhtml;
  }
  document.querySelector(".title").innerHTML = card[8].tit;
  document.querySelector(".details").innerHTML = card[8].disc;
  document.querySelector(".Explore-btn").innerHTML = card[8].bt;
}

window.onload = async () => {
  await FETCH();
  const objs = [...python[0].python];
  CreateCard(objs);
};
excelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.exe");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...Excel[0].excel];
  CreateCard(obj);
});
pythonBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.py");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...python[0].python];
  CreateCard(obj);
});
webBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.web");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...Web_dev[0].Web_Dev];
  CreateCard(obj);
});
AwsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.aws");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...aws[0].AWS];
  CreateCard(obj);
});
jsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.js");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...js[0].JS];
  CreateCard(obj);
});
DrawingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.draw");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...Drawing[0].Drawing];
  CreateCard(obj);
});
dataBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let active = document.querySelector(".listOfCourses.active");
  let cur = document.querySelector(".listOfCourses.dta");
  active.style.color = "grey";
  active.classList.remove("active");
  cur.style.color = "black";
  cur.classList.add("active");
  const obj = [...Data_sci[0].Data_Science];
  CreateCard(obj);
});
