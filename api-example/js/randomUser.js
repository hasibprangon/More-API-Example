const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
};

const displayUser = user => {

   

    const usersGender = document.getElementById('gender')
    usersGender.innerText = user.results[0].gender;

    console.log(user.results[0].picture.large);

    const name =user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last
    const usersName = document.getElementById('name');
    usersName.innerText = name;

    const mainBody = document.getElementById('body') ;  
    const usersImage = document.createElement("img");
    usersImage.src = user.results[0].picture.large
    // usersImage.innerHTML = `
    // <img src="" alt="" id="users-img">
    // `
    mainBody.appendChild(usersImage)

}

loadUser()