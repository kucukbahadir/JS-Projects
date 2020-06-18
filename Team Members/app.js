const team = [
  {
    id: 1,
    name: "susan jones",
    job: "backend developer",
    img:
      "2.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type",
  },
  {
    id: 2,
    name: "peter johnson",
    job: "frontend developer",
    img:
      "1.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumber blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "anna smith",
    job: "UX Designer",
    img:
      "3.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type",
  },
  {
    id: 4,
    name: "bahadir kucuk",
    job: "Web Designer",
    img:
      "bahadir.jpg",
    text:
      "Hey ! I  am Computer Science student at VU University Amsterdam. I am working on many projects.Would you like me to work on your Project !",
  },
];

const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn');

const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const img = document.querySelector('#person-img')

let index = 0;

prev.addEventListener('click',function(){
  index--;
  givePerson();
})
next.addEventListener('click',function(){
  index++;
  givePerson();
})

function givePerson(){
  index = Math.floor(index % team.length)
  if(index < 0)index = team.length - 1;

  author.textContent = team[index].name;
  job.textContent = team[index].job;
  info.textContent = team[index].text;
  img.src = team[index].img;
}


