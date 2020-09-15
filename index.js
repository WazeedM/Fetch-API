document.getElementById("getitem").addEventListener("click", getItems);

function getItems(){
    fetch("sample.txt")
    .then(function(res){
        return res.text();
     })
     .then(function(data){
         console.log(data);
     })
}