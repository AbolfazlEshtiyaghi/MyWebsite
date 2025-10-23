function event(){
    window.addEventListener("scroll",()=>{
           let purplyAnimeh = document.querySelector(".purply-animeh");
    if (window.scrollY > 2360) {
      purplyAnimeh.classList.add("purply-animeh1");
    } else {
      purplyAnimeh.classList.remove("purply-animeh1");
    }
    })
    let sun=document.querySelector(".sun")
    let purplyAnimeh=document.querySelector(".purply-animeh")
    sun.addEventListener("click",()=>{
      purplyAnimeh.classList.toggle("header-mode-mo")
    })
}
function eventMo(){
    window.addEventListener("scroll",()=>{
           let purplyAnimehMo = document.querySelector(".purply-animeh-mo");
    if (window.scrollY > 3400) {
      purplyAnimehMo.classList.add("purply-animeh1-mo");
    } else {
      purplyAnimehMo.classList.remove("purply-animeh1-mo");
    }
    })
let darkMode=document.querySelector(".darkMode")
let purplyAnimehMo=document.querySelector(".purply-animeh-mo")
darkMode.addEventListener("click",()=>{
darkMode.firstElementChild.classList.toggle("hidden")
darkMode.lastElementChild.classList.toggle("hidden")
purplyAnimehMo.classList.toggle("header-mode-mo")
})
}
const PurpleCard=async () => {
    let purple=[]
    let purpleMo=[]
    try {
        let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
        let res=await data.json()
        purple=res.purpleCard.map((item)=>{
return  `  <div class="desktop:w-[67%] w-[90%] h-[70%] bg-purple-600 rounded-[5px] desktop:!mt-[30px] desktop:!mr-[10px] flex justify-center items-center !mt-[55px] purply-animeh opacity-0" id="skills">
    <div class="w-[90%] desktop:h-[47%] h-[80%] flex desktop:flex-row flex-col  justify-center items-center  desktop:!mt-0 !mt-[20px]">
      <div class="desktop:w-[50%] w-[100%] h-[100%]  flex flex-col justify-center desktop:items-start items-center">
        <div class="desktop:w-[100%] w-[90%] h-[50%]  flex justify-center desktop:items-center items-end">
          <h3 class="desktop:text-[48px] text-[30px] text-stone-50 font-bold desktop:!ml-[12px] !ml-0  desktop:!mt-0 !mt-[-10px] !text-center leading-[35px]">
           ${item.title}
          </h3>
        </div>
        <div class="desktop:w-[65%] w-[100%] h-[50%]  flex desktop:justify-end justify-center items-start">
          <div class="desktop:w-[98%] w-[85%] h-[80%]  flex desktop:justify-start desktop:items-end justify-center items-center">
            <p class="desktop:text-[13.8px] text-[13px] text-stone-50 desktop:leading-[25px] leading-[27px] desktop:!mr-[5px] !mr-[0px] desktop:text-start mobile:text-center desktop:!mt-0 !mt-[0px]">
              ${item.description}
            </p>
          </div>
        </div>
      </div>

       <div class="w-[50%] desktop:h-[100%] h-[50%]  flex desktop:justify-end justify-center desktop:items-center items-start desktop:!mr-0 !mr-[10px]
       ">
    <button class="desktop:w-[185px] w-[120px] desktop:h-[53px] h-[46px] bg-stone-50 rounded-[5px] !ml-[10px] flex justify-center items-center duration-300 hover:translate-y-[-5px] hover:bg-black  active:scale-95 btbt desktop:!mt-0 !mt-[5px]">
      <a href="#callWithMe" class="desktop:text-[15px] text-[14px] text-purple-600 duration-300 ">${item.textBtn}</a>
    </button>
       </div>

    </div>
  </div>`
        })
        document.querySelector(".purple-card-des").innerHTML=purple.join("")
        event()
    } catch (error) {
        console.log(error.message);
    }
    try {
       let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
       let res=await data.json()
       purpleMo=res.purpleCard.map((item)=>{
return `  <div class="desktop:w-[67%] w-[90%] h-[70%] bg-purple-600 rounded-[5px] desktop:!mt-[30px] desktop:!mr-[10px] flex justify-center items-center !mt-[55px] purply-animeh-mo opacity-0">
    <div class="w-[90%] desktop:h-[47%] h-[80%] flex desktop:flex-row flex-col  justify-center items-center  desktop:!mt-0 !mt-[20px]">
      <div class="desktop:w-[50%] w-[100%] h-[100%]  flex flex-col justify-center desktop:items-start items-center">
        <div class="desktop:w-[100%] w-[90%] h-[50%]  flex justify-center desktop:items-center items-end">
          <h3 class="desktop:text-[48px] text-[30px] text-stone-50 font-bold desktop:!ml-[12px] !ml-0  desktop:!mb-0 !mb-[15px] !text-center leading-[35px]">
               ${item.title}
          </h3>
        </div>
        <div class="desktop:w-[65%] w-[100%] h-[50%]  flex desktop:justify-end justify-center items-start">
          <div class="desktop:w-[98%] w-[85%] h-[80%]  flex desktop:justify-start desktop:items-end justify-center items-center">
            <p class="desktop:text-[13.8px] text-[13px] text-stone-50 desktop:leading-[25px] leading-[27px] desktop:!mr-[5px] !mr-[0px] desktop:text-start mobile:text-center desktop:!mt-0 !mt-[0px]">
          ${item.description}
            </p>
          </div>
        </div>
      </div>

       <div class="w-[50%] desktop:h-[100%] h-[50%]  flex desktop:justify-end justify-center desktop:items-center items-start desktop:!mr-0 !mr-[10px]
       ">
    <button class="w-[125px] h-[48px] bg-stone-50 rounded-[5px] !ml-[10px] flex justify-center items-center duration-300 hover:translate-y-[-5px] hover:bg-black  active:scale-95 btbt desktop:!mt-0 !mt-[5px]">
      <a href="#callWithMe" class="desktop:text-[15px] text-[14px] text-purple-600 duration-300 ">${item.textBtn}</a>
    </button>
       </div>

    </div>
  </div>`
       })
       document.querySelector(".purple-card-mo").innerHTML=purpleMo.join("")
       eventMo()
    } catch (error) {
        console.log(error.message); 
    }
}
export default PurpleCard;