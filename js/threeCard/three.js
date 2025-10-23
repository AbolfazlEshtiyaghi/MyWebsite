function event(){
  let card111 = document.querySelector(".project-card");
    let card222 = document.querySelector(".project-card2");
    let card333 = document.querySelector(".project-card3");
    let titlePro = document.querySelector(".title-pro");
    window.addEventListener("scroll",()=>{
      if (window.scrollY > 2700) {
        card111.classList.add("project-card1");
        card222.classList.add("project-card22");
        card333.classList.add("project-card33");
        titlePro.classList.add("title-pro1");
      } else {
        card111.classList.remove("project-card1");
        card222.classList.remove("project-card22");
        card333.classList.remove("project-card33");
        titlePro.classList.remove("title-pro1");
      }
    })
    let sun=document.querySelector(".sun")
    let h1=document.querySelectorAll(".three-h1")
    let project1=document.querySelector(".project-card")
    let project2=document.querySelector(".project-card2")
    let project3=document.querySelector(".project-card3")
    sun.addEventListener("click",()=>{
      h1.forEach((item)=>{
item.classList.toggle("a-mode")
      })
project1.classList.toggle("header-mode-mo")
project2.classList.toggle("header-mode-mo")
project3.classList.toggle("header-mode-mo")
    })
}
function eventMo(){
    let card111Mo = document.querySelector(".project-card11");
    let card222Mo = document.querySelector(".project-card222");
    let card333Mo = document.querySelector(".project-card33");
    let titleProMo = document.querySelector(".title-pro-mo");
        window.addEventListener("scroll",()=>{
if(window.scrollY>3805.60009765625){
titleProMo.classList.add("title-pro1")
}else{
  titleProMo.classList.remove("title-pro1")
}
if(window.scrollY>3880){
card111Mo.classList.add("project-card1")
}else{
  card111Mo.classList.remove("project-card1")
}
if(window.scrollY>4360){
card222Mo.classList.add("project-card1")
}else{
  card222Mo.classList.remove("project-card1")
}
        })
let darkMode=document.querySelector(".darkMode")
let threeH1=document.querySelectorAll(".three-h1")
let projectCard11=document.querySelector(".project-card11") 
let projectCard22=document.querySelector(".project-card222") 
let projectCard33=document.querySelector(".project-card33") 
darkMode.addEventListener("click",()=>{
darkMode.firstElementChild.classList.toggle("hidden")
darkMode.lastElementChild.classList.toggle("hidden")
threeH1.forEach((item)=>{
item.classList.toggle("a-mode")
})
projectCard11.classList.toggle("header-mode-mo")
projectCard22.classList.toggle("header-mode-mo")
projectCard33.classList.toggle("header-mode-mo")
})
}
const Three=async () => {
let three=[]
let threeMo=[]
try {
    let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
    let res=await data.json()
    three=res.Three.map((item)=>{
      
return ` <div class=" w-[70%]  h-[100%]  !mt-[25px] desktop:block mobile:hidden" id="project">
<div class="w-[100%]  h-[100%]  !mt-[25px] flex flex-col">
      <div class="w-[100%] desktop:h-[20%] h-[5%] ">
        <div class="desktop:w-[25%] w-[80%] desktop:h-[50%] h-[80%]   flex desktop:justify-center justify-start desktop:items-end items-start title-pro opacity-0">
          <h1 class="desktop:text-[48px] text-[35px] font-black !mb-[6px] desktop:!mr-[30px] three-h1">${item.title}</h1>
        </div>
      </div>
      <div class="w-[100%] desktop:h-[80%] h-[100%]  flex flex-col ">
        <div class="w-[100%] desktop:h-[87%] h-[100%]  flex desktop:flex-row flex-col justify-center items-center desktop:gap-[25px] gap-[20px]">

          <div class="project-card duration-300 mobile:project-1">
            <div class="w-[100%] h-[74%]  flex justify-center items-end relative rounded-[5px]">
              <img class="w-[100%] h-[100%] object-cover rounded-[5px]
              " src=${item.image} alt="">
              <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 absolute btt-card-hov rounded-[5px]"></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[54%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 three-h1">${item.title1}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-green-500">${item.title2}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[110px]">
                    <span class="text-[13px] font-bold text-purple-600">${item.title3}</span>
                    <a href="https://abolfazleshtiyaghi.github.io/Exo-Game/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95 three-h1">${item.titleBtn}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="project-card2 duration-300 opacity-0">
            <div class="w-[100%] h-[74%] flex justify-center items-end relative rounded-[10px]">
              <img class="w-[100%] h-[100%] object-cover rounded-[5px]" src=${item.image2} alt="">
                <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 rounded-[5px] absolute btt-card-hov "></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[54%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 three-h1">${item.title4}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-red-600">${item.title5}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[110px]">
                    <span class="text-[13px] font-bold text-purple-600">Html,Tailwind Css,js</span>
                    <a href="https://abolfazleshtiyaghi.github.io/dark/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95 three-h1">${item.titleBtn} </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="project-card3 duration-300 desktop:block mobile:hidden">
                       <div class="w-[100%] h-[74%] flex justify-center items-end relative">
              <img class="w-[100%] h-[100%] object-cover" src=${item.image3} alt="">
                <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 absolute btt-card-hov "></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[60%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 three-h1">${item.title6}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-sky-700">${item.title7}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[170px]">
                    <span class="text-[13px] font-bold text-purple-600">${item.title8}</span>
                    <a href="https://abolfazleshtiyaghi.github.io/vitto/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95 three-h1">${item.titleBtn} </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`
    })
    document.querySelector(".three-card").innerHTML=three.join("")
    event()
} catch (error) {
    console.log(error.message);
}
try {
    let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
    let res=await data.json()
    threeMo=res.Three.map((item)=>{
return ` <div class="  w-[90%]   h-[100%] !mt-[25px] desktop:hidden mobile:block">
<div class=" w-[100%]  h-[100%]  !mt-[25px] flex flex-col">
      <div class="w-[100%] desktop:h-[20%] h-[5%] ">
        <div class="desktop:w-[25%] w-[80%] desktop:h-[50%] h-[80%]   flex desktop:justify-center justify-start desktop:items-end items-start title-pro-mo opacity-0">
          <h1 class="desktop:text-[48px] text-[35px] font-black !mb-[6px] desktop:!mr-[30px] three-h1">${item.title}</h1>
        </div>
      </div>
      <div class="w-[100%] desktop:h-[80%] h-[100%]  flex flex-col ">
        <div class="w-[100%] desktop:h-[87%] h-[100%]  flex desktop:flex-row flex-col justify-center items-center desktop:gap-[25px] gap-[20px]">

          <div class="duration-300 project-card11">
            <div class="w-[100%] h-[74%]  flex justify-center items-end relative rounded-[5px]">
              <img class="w-[100%] h-[100%] object-cover rounded-[5px]
              " src=${item.image} alt="">
              <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 absolute btt-card-hov rounded-[5px]"></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[54%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 duration-300 three-h1">${item.title1}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-green-500">${item.title2}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[110px]">
                    <span class="text-[13px] font-bold text-purple-600">${item.title3}</span>
                    <a href="https://abolfazleshtiyaghi.github.io/Exo-Game/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95">${item.titleBtn}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="duration-300 project-card222">
            <div class="w-[100%] h-[74%] flex justify-center items-end relative rounded-[10px]">
              <img class="w-[100%] h-[100%] object-cover rounded-[5px]" src=${item.image2} alt="">
                <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 rounded-[5px] absolute btt-card-hov "></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[54%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 duration-300 three-h1">${item.title4}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-red-600">${item.title5}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[110px]">
                    <span class="text-[13px] font-bold text-purple-600">Html,Tailwind Css,js</span>
                    <a href="https://abolfazleshtiyaghi.github.io/dark/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95">مشاهده </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="duration-300 project-card33 desktop:block mobile:hidden">
                       <div class="w-[100%] h-[74%] flex justify-center items-end relative">
              <img class="w-[100%] h-[100%] object-cover" src=${item.image3} alt="">
                <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 absolute btt-card-hov "></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[60%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 duration-300 three-h1">${item.title6}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-sky-700">${item.title7}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[170px]">
                    <span class="text-[13px] font-bold text-purple-600">${item.title8}</span>
                    <a href="https://abolfazleshtiyaghi.github.io/vitto/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95">${item.titleBtn} </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    `
    })
    document.querySelector(".three-card-mo").innerHTML=threeMo.join("")
eventMo()
} catch (error) {
    console.log(error.message);
}
}
export default Three;