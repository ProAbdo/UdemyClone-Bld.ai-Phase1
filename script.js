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
}
function Show(course) {
  let course_box = document.createElement("div");
  course_box.setAttribute("id", `${course.id}`);
  course_box.classList.add("course_box");
  course_box.innerHTML = `
    <div class="course-img">
      <a><img src="${course.img}"/></a>
    </div>
    <div class="course-info">
      <div class="course-desc">${course.title}</div>
      <div class="course-author">${course.author}</div>
      <div class="course-rate">
        <span class="checked">${course.rate}</span>
        <img class="course_rating_stars" src="${course.course_stars}" />
        <span class="students">${course.students}</span>
      </div>
      <div class="course-price">${course.price}</div>
      <p class="course_badge">Bestseller</p>
      </div>
  </div>
`;
  return course_box;
}
Fetch();
let clickBtn = document
  .querySelector(".search-icon")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let search_value = document
      .querySelector(".search-input")
      .value.toLowerCase();
    let found = 1;
    courses_data.forEach((course) => {
      let found = course.title.toLowerCase().includes(search_value);
      let tmp = document.getElementById(`${course.id}`);
      if (!found) tmp.style.display = "none";
      else tmp.style.display = "block";
    });
  });
