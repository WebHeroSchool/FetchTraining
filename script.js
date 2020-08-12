fetch('https://api.github.com/users/KateDoroshi')
  .then(res => res.json()) 
  .then(json => {
    const avatar = json.avatar_url; 
    const name = json.name; 
    const bio = json.bio; 
    const link = json.html_url; 

    const body = document.body; 

    const userPhoto = new Image(); 
    userPhoto.src = avatar; 
    body.appendChild(userPhoto); 

    const userName = document.createElement('a'); 
    userName.innerHTML = name; 
    userName.setAttribute('href', link);
    body.appendChild(userName); 

    const userBio = document.createElement('p');
    if (bio != null) {
  	  userBio.innerHTML = bio;
    } else {
  	  userBio.innerHTML = 'Информация о пользователе не доступна';
    }
    body.appendChild(userBio); 
  })

.catch(err => console.log(err + 'Информация о пользователе не доступна'))













