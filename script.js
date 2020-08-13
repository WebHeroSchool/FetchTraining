const body = document.body;
const url = window.location.toString();

let getName = (url) => {
 let getUrl = url.split('=');
 let userName = getUrl[1];
 if (userName == undefined){
   userName = 'KateDoroshi';
 }
 return userName;
}
let name = getName(url);

fetch(`https://api.github.com/users/${name}`)
  .then(res => res.json()) 
  .then(json => {
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

    const userBio = document.createElement('p');
    if (bio != null) {
  	  userBio.innerHTML = bio;
    } else {
  	  alert('Информация о пользователе не доступна');
    }
    body.appendChild(userBio); 
  })

.catch(err => console.log(err + 'Информация о пользователе не доступна'));