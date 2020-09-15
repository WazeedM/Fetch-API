document.getElementById("gettext").addEventListener("click", getText);
document.getElementById("getusers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);

function getText(){
    // fetch("sample.txt")
    // .then(function(res){
    //     return res.text();
    //  })
    //  .then(function(data){
    //      console.log(data);
    //  })
    fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err))
}

function getUsers(){
    fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(user => {
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `;
        });
        document.getElementById("output").innerHTML = output;
    })
}
function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>';
        data.forEach(post => {
            output += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });
        document.getElementById("output").innerHTML = output;
    })
}