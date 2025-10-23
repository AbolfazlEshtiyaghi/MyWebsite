function event(){
let underline22=document.querySelector(".underline22")
let underline33=document.querySelector(".underline33")
let underline44=document.querySelector(".underline44")
let underline55=document.querySelector(".underline55")
let underline66=document.querySelector(".underline66")
let hover_div=document.querySelectorAll(".hoverDiv")
hover_div.forEach((navDiv)=>{
        navDiv.addEventListener("click",()=>{
if(navDiv.dataset.link==="underline22"){
window.scrollTo({
        top:100,
        behavior:"smooth"
})
        }
if(navDiv.dataset.link==="underline33"){
window.scrollTo({
        top:656,
        behavior:"smooth"
})
        }
        })
    navDiv.addEventListener("mouseenter",()=>{
        if(navDiv.dataset.link==="underline33"){
underline33.classList.add("w-[93%]")
        }
        if(navDiv.dataset.link==="underline44"){
underline44.classList.add("w-[90%]")
        }
        if(navDiv.dataset.link==="underline55"){
underline55.classList.add("w-[95%]")
        }
        if(navDiv.dataset.link==="underline66"){
underline66.classList.add("w-[97%]")
        }
    })
})
hover_div.forEach((navDiv)=>{
navDiv.addEventListener("mouseleave",()=>{
         if(navDiv.dataset.link==="underline33"){
underline33.classList.remove("w-[93%]")
        }
        if(navDiv.dataset.link==="underline44"){
underline44.classList.remove("w-[90%]")
        }
        if(navDiv.dataset.link==="underline55"){
underline55.classList.remove("w-[95%]")
        }
        if(navDiv.dataset.link==="underline66"){
underline66.classList.remove("w-[97%]")
        } 
})
})
let darkMode=document.querySelector(".darkMode")
let headerText=document.querySelector(".header-text")
let cen=document.querySelector(".ABL-LINE")
darkMode.addEventListener("click",()=>{
  darkMode.firstElementChild.classList.toggle("hidden")
  darkMode.lastElementChild.classList.toggle("hidden")
  headerText.classList.toggle("a-mode")
  let ham=document.querySelector(".hamburger")
ham.firstElementChild.classList.toggle("bgMode")
cen.classList.toggle("bgMode")
ham.lastElementChild.classList.toggle("bgMode")
})

}
const headerMobile=async () => {
    let headerm=[]
    let menu=[]
    try {
        let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
        let res=await data.json()
        headerm=res.headerMobile.map((item)=>{
return `<div class="w-[100%] h-[70%]  flex justify-start items-center ">
        <h2 class="text-[25px] !mt-[15px] duration-300  header-text">
         ${item.title}
        </h2>
      </div>`
        })
        document.querySelector(".api-header-text-mo").innerHTML=headerm.join("")
    } catch (error) {
        console.log(error.message);
    }
    try {
        let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
        let res=await data.json()
        menu=res.headerMobile.map((item)=>{
return ` <div class="w-[100%] h-[20%]  flex justify-end items-center"><div class="w-[40%] h-[40%]   flex justify-end items-center relative hoverDiv" data-link="underline22"><a href="#home" class="text-[14px] text-stone-50 header-text">${item.title1}</a>
            <div class="w-[80%] duration-300 h-[1.6px] bg-purple-600 absolute  top-[26px] rounded-[5px] underline22"></div>  
              </div>
            </div>
                  <div class="w-[100%] h-[20%]  flex justify-end items-center"><div class="w-[80%] h-[40%]  flex justify-end items-center relative hoverDiv" data-link="underline33" ><a href="#aboutme" class="text-[14px] text-stone-50 header-text">${item.title2}</a>
            <div class="w-[0%] h-[2px] bg-purple-600 duration-300 absolute underline33 top-[26px] rounded-[5px]"></div>  
              </div>
            </div>
                 <div class="w-[100%] h-[20%]  flex justify-end items-center"><div class="w-[100%] h-[40%]  flex justify-end items-center relative hoverDiv" data-link="underline44"><a href="#home" class="text-[14px] text-stone-50 header-text">${item.title3}</a>
            <div class="w-[0%] h-[2px] duration-300 underline44 bg-purple-600 absolute  top-[26px] rounded-[5px]"></div>  
              </div>
            </div>
                <div class="w-[100%] h-[20%]  flex justify-end items-center"><div class="w-[100%] h-[40%]  flex justify-end items-center relative hoverDiv " data-link="underline55"><a href="#home" class="text-[14px] text-stone-50 header-text">${item.title4}</a>
            <div class="w-[0%] h-[2px] duration-300 underline55 bg-purple-600 absolute  top-[26px] rounded-[5px]"></div>  
              </div>
            </div>
                <div class="w-[100%] h-[20%]  flex justify-end items-center"><div class="w-[100%] h-[40%]  flex justify-end items-center relative hoverDiv  " data-link="underline66"><a href="#aboutme" class="text-[14px] text-stone-50 header-text">${item.title5}</a>
            <div class="w-[0%] h-[1.5px] duration-300 underline66 bg-purple-600 absolute  top-[26px] rounded-[5px]"></div>  
              </div>
            </div>`
        })
        document.querySelector(".nav-mo").innerHTML=menu.join("")
        event()
    } catch (error) {
         console.log(error.message);
    }
    
}
export default headerMobile;

