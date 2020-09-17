let body = document.body;
let url = window.location.search;
let preloader = document.querySelector('.loader');
const getName = (url) => {
  let userName = (url.split('='))[1];
  if (userName == undefined) {
    userName = 'KateDoroshi';
  }
  return userName;
}

const nick = getName(url);

const getDate = new Promise((resolve, reject) => {
  setTimeout(() => new Date ? resolve(new Date) : reject(new Error('Время неизвестно')), 2000);
});
const getDataUser = fetch(`https://api.github.com/users/${nick}`);

Promise.all([getDataUser, getDate])
.then(([userData, nowDate]) => {
  data = userData;
  date = nowDate;
})
.then(res => data.json())
.then(json => {
  preloader.style.display = 'none';

  const avatar = json.avatar_url; 
  const login = json.name; 
  const bio = json.bio; 
  const link = json.html_url; 

  const userPhoto = new Image(); 
  userPhoto.src = avatar; 
  body.appendChild(userPhoto); 

  const userName = document.createElement('a'); 
  userName.innerHTML = login; 
  userName.setAttribute('href', link);
  body.appendChild(userName); 

  const dateAdd = document.createElement('p');
  dateAdd.innerHTML = date;
  body.appendChild(dateAdd); 

  const userBio = document.createElement('p');
  if (bio != null) {
    userBio.innerHTML = bio;
  } else {
    alert('Информация о пользователе не доступна');
  }
  body.appendChild(userBio); 
})

.catch(err => console.log(err + 'Информация о пользователе не доступна'));