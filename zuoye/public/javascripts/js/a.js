function add(){
    window.location.href = "/add";
}

Array.from(document.getElementsByClassName("u")).forEach(i=>{
    i.onclick = function(){
        id = this.getAttribute("data_id")
        console.log(id);
        window.location.href="/add?id="+id;
    }
})