function initNavHoverEffects() {
let homeLine=document.querySelector(".about-line")
let serLine=document.querySelector(".ser-line")
let jobLine=document.querySelector(".job-line")
let callLine=document.querySelector(".call-line")
let hovDiv=document.querySelectorAll(".hov-div")

hovDiv.forEach((hovDivs)=>{
hovDivs.addEventListener("mouseenter",()=>{
    if(hovDivs.dataset.link==="about"){
homeLine.classList.add("about-line-w")
    }
    if(hovDivs.dataset.link==="servic"){
serLine.classList.add("servis")
    }
    if(hovDivs.dataset.link==="job"){
jobLine.classList.add("job")
    }
    if(hovDivs.dataset.link==="call"){
callLine.classList.add("call")
    }
})
hovDivs.addEventListener("mouseleave",()=>{
    if(hovDivs.dataset.link==="about"){
homeLine.classList.remove("about-line-w")
    }
        if(hovDivs.dataset.link==="servic"){
serLine.classList.remove("servis")
    }
        if(hovDivs.dataset.link==="job"){
jobLine.classList.remove("job")
    }
        if(hovDivs.dataset.link==="call"){
callLine.classList.remove("call")
    }
})
})



let sun=document.querySelector(".sun")
let circle=document.querySelector(".circle")
let html=document.querySelector("html")
let body=document.querySelector("body")
let header=document.querySelector("header")
let a=document.querySelectorAll("a")
let backSky=document.querySelector(".back-sky")
let blackBtn=document.querySelector(".black-btn")
let h3=document.querySelectorAll("h3")
let h2=document.querySelectorAll("h2")
let p=document.querySelectorAll("p")
let h1=document.querySelector("h1")
let span=document.querySelectorAll("span")
sun.addEventListener("click",()=>{
circle.classList.toggle("dark-move")
sun.classList.toggle("back-dark")
html.classList.toggle("dark")
body.classList.toggle("dark")
header.classList.toggle("header-mode")
a.forEach((aa)=>{
aa.classList.toggle("a-mode")
})
backSky.classList.toggle("dark")
blackBtn.classList.toggle("btn-mode")
h1.classList.toggle("a-mode")
h3.forEach((h3h)=>{
    h3h.classList.toggle("a-mode")
})
h2.forEach((h2h)=>{
    h2h.classList.toggle("a-mode")
})
p.forEach((pp)=>{
pp.classList.toggle("a-mode")
})
span.forEach((spans)=>{
spans.classList.toggle("a-mode")
})
})

let underline1=document.querySelector(".underline1")
let underline2=document.querySelector(".underline2")
let underline3=document.querySelector(".underline3")
let underline4=document.querySelector(".underline4")
let underline5=document.querySelector(".underline5")
window.addEventListener("scroll",()=>{
    if(window.scrollY>600){
underline1.classList.remove("w-[60%]")
underline1.classList.add("w-[0%]")
underline2.classList.add("about-line-w")

    }else{
underline1.classList.add("w-[60%]")
underline1.classList.remove("w-[0%]")
underline2.classList.remove("about-line-w")
    }
    if(window.scrollY>=2088.800048828125){
underline3.classList.add("servis")
underline2.classList.remove("about-line-w")
    }else{
underline3.classList.remove("servis")
    }
    if(window.scrollY>2524.800048828125){
underline3.classList.remove("servis")
underline4.classList.add("job")
    }else{
        underline4.classList.remove("job")
    }
    if(window.scrollY>3942.39990234375){
underline4.classList.remove("job")
underline5.classList.add("call")
    }else{
        underline5.classList.remove("call")
    }
})

}


const headerDesktop=async () => {
let header=[]
let menu=[]
try {
    let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
    let res=await data.json()
    header=res.headerDesktop.map((item)=>{
return `  <div class="w-[50%] h-[60%] flex justify-center items-center ">
        <h2 class="text-[30px] headh2">
        ${item.title}  
        </h2>
      </div>`
    })
    document.querySelector(".api-header-text").innerHTML=header.join("")
} catch (error) {
    console.log(error.message);
}
    try {
        let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
        let res=await data.json()
        menu=res.headerDesktop.map((item)=>{
return `     <div class="navdiv w-[14%]">
           <div class="w-[55%] h-[100%]  flex justify-start items-center relative hov-div">
            <a href="#home" class="!mr-[7px]">${item.title1}</a>
            <div class="w-[60%] h-[2px] bg-purple-800 absolute right-[7px] top-[31px] duration-300 underline1"></div>
           </div>
          </div>
          <div class="navdiv">
          <div class="w-[85%] h-[100%] flex justify-start items-center relative hov-div " data-link="about">
            <a href="#aboutme" class="">${item.title2}</a>
            <div class="w-[0%] h-[2px] duration-300 bg-purple-800 absolute about-line  top-[31px]  underline2"></div>
           </div>
          </div>
          <div class="navdiv">
                <div class="w-[75%] h-[100%] flex justify-start items-center  relative !mr-[4px]  hov-div " data-link="servic">
            <a href="#job" class="">${item.title3}</a>
            <div class="w-[0%] h-[2px] bg-purple-800 duration-300 absolute ser-line  top-[31px] underline3"></div>
           </div>
          </div>
          <div class="navdiv ">
             <div class="w-[75%] h-[100%] flex justify-start items-center  relative !mr-[19px]  hov-div " data-link="job">
            <a href="#project" class="">${item.title4}</a>
            <div class="w-[0%] h-[2px] bg-purple-800 duration-300 absolute job-line  top-[31px] underline4"></div>
           </div>
          </div>
          <div class="navdiv w-[21%]">
                   <div class="w-[75%] h-[100%] flex justify-start items-center  relative !mr-[37px]  hov-div " data-link="call">
            <a href="#call" class="">${item.title5}</a>
            <div class="w-[0%] h-[2px] bg-purple-800 duration-300 absolute call-line  top-[31px] underline5"></div>
           </div>
          </div>
          <div class="w-[14%] h-[100%]  flex  justify-center items-center  translate-x-[-20px]">
            <div class="w-[80%] h-[70%] bg-stone-300 sun rounded-[30px] flex justify-end items-center duration-300 !mr-[10px]">
              <div class="w-[35%] h-[80%] bg-purple-700 rounded-[50px] circle duration-300 "></div>
            </div>
          </div>`
        })
        document.querySelector(".nav").innerHTML=menu.join("")
 initNavHoverEffects()

    } catch (error) {
        console.log(error.message);
    }
}
export default headerDesktop;

