function toggle1(){
    //let open  =  document.getElementById("btn")
//open.classList.toggle("close")
 let active  =  document.getElementById("active")
 active.style.display = "none"
  let btn  =  document.getElementById("btn")
 btn.style.display = "block"
  let navs  =  document.getElementById("navs")
  navs.style.display = "block"
    let list = document.getElementsByClassName('a')
    for(item of list){
        item.style.display = "block"
    }

}
function toggle2(){
 let btn  =  document.getElementById("btn")
 btn.style.display = "none"
  let active  =  document.getElementById("active")
 active.style.display = "block"
  let navs  =  document.getElementById("navs")
  navs.style.display = "none"
}

function hide() {
    let list = document.getElementsByClassName('a')
    for(item of list){
        item.style.display = "none"
    }
   let btn  =  document.getElementById("btn")
 btn.style.display = "none"
  let active  =  document.getElementById("active")
 active.style.display = "block"
}