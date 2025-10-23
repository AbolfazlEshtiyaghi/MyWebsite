function event() {
let animehImg=document.querySelector(".img-animeh")
let h2Information=document.querySelector(".h2-animeh")
let frontAnimeh=document.querySelector(".front-animeh")
let paraAnimeh=document.querySelector(".animeh-p-infor")
let btnInfor=document.querySelector(".btn-infor")
window.addEventListener("scroll",()=>{
if(window.scrollY > 460){
animehImg.classList.add("img")
h2Information.classList.add("h2-ani")
frontAnimeh.classList.add("I-m-frontEnd")
paraAnimeh.classList.add("animeh-p-information")
btnInfor.classList.add("animeh-p-information")
}
else{
  animehImg.classList.remove("img")
  h2Information.classList.remove("h2-ani")
  frontAnimeh.classList.remove("I-m-frontEnd")
  paraAnimeh.classList.remove("animeh-p-information")
  btnInfor.classList.remove("animeh-p-information")
}
})

let darkMode=document.querySelector(".darkMode")
let textMoP3=document.querySelectorAll(".text-mo-p3")
let html=document.querySelector("html")
let body=document.querySelector("body")
console.log(textMoP3);
darkMode.addEventListener("click",()=>{
    html.classList.toggle("dark")
  body.classList.toggle("dark")
  textMoP3.forEach((item)=>{
item.classList.toggle("a-mode")
  })
  if(body.classList.contains("dark")){
darkMode.firstElementChild.classList.toggle("hidden")
  }else{
    darkMode.lastElementChild.classList.toggle("hidden")
  }
})
}
function darkDes(){
  let sun=document.querySelector(".sun")
let begier=document.querySelectorAll(".please-dada")

sun.addEventListener("click",()=>{
  begier.forEach((item)=>{
  item.classList.toggle("a-mode")
})

})
}
const Part3=async () => {
    let part3=[]
    let part3Mo=[]
    try {
        let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
        let res=await data.json()
        part3=res.part3.map((item)=>{
return `  <div class="w-[70%] h-[95%]  flex flex-row">
    <div class="w-[50%] h-[100%]  flex justify-center items-center">
      <div class="w-[90%] h-[90%] flex justify-center items-center !mr-[12px] rounded-[5px] img-animeh opacity-0">
        <img class="w-[85%] h-[85%] object-cover rounded-[5px]" src=${item.image} alt="">
      </div>
    </div>
    <div class="w-[50%] h-[100%]  flex justify-start items-center">
      <div class="w-[80%] h-[85%] !mr-[24px] flex flex-col">
        <div class="w-[100%] h-[24%] flex justify-start items-end">
          <div class="w-[40%] h-[50%] flex justify-center items-center h2-animeh opacity-0">
            <h2 class="text-[47px] font-bold !ml-[20px] duration-300 please-dada">
              ${item.title}
            </h2>
          </div>
        </div>
        
        <div class="w-[100%] h-[21%]  flex justify-start items-end">
          <div class="w-[85%] h-[57%] flex flex-wrap justify-start items-start">
            <div class="w-[100%] h-[90%] front-animeh opacity-0">
                 <h2 class="text-[23px] font-bold duration-300 please-dada">
${item.title2}
            </h2>
            </div>
            </div>
          </div>
          <div class="w-[100%] h-[23%] flex justify-center items-end">
            <div class="w-[98%] h-[73%] !ml-[10px] animeh-p-infor opacity-0">
              <p class="text-[14px] duration-300 please-dada">${item.description}</div>
          </div>
          <div class="w-[40%] h-[20%] flex justify-center items-center">
            <button class="w-[95%] h-[50%] bg-purple-700 rounded-[5px] !mt-[40px] duration-300 active:scale-95 hover:translate-y-[-5px] btn-infor ">
              <span class="text-stone-100 ">${item.textBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>`
        })
document.querySelector(".part3").innerHTML=part3.join("")
event()
darkDes()
    } catch (error) {
        console.log(error.message);   
    }
    try {
        let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
        let res=await data.json()
        part3Mo=res.part3.map((item)=>{
return `   <div class="w-[100%] h-[53%] flex justify-center items-center">
      <div class="w-[90%] h-[90%] flex justify-center items-center img-mo-animeh opacity-0">
        <img class="object-cover w-[100%] h-[100%] !mb-[4px]" src=${item.image} alt="">
      </div>
    </div>
      <div class="w-[100%] h-[12%] flex justify-center items-center">
        <div class="w-[100%] h-[50%] flex justify-center items-center text-aboutme-mo opacity-0">
          <h2 class="text-[30px] duration-300 text-mo-p3">
         ${item.title}
          </h2>
        </div>
      </div>
      <div class="w-[100%] h-[1%]"></div>
      <div class="w-[100%] h-[12%]  flex justify-center items-center">
        <div class="w-[90%] h-[100%] !ml-[5px] flex flex-col justify-center items-center animeh-hi opacity-0  ">
          <span class="text-[25px] duration-300 text-mo-p3">
${item.title2Mo}
            </span>
            <span class="text-[25px] text-purple-600 duration-300 ">
              ${item.title3Mo}
            </span>
        </div>
      </div>
      <div class="w-[100%] h-[12%] flex justify-center items-center">
        <div class="w-[90%] h-[100%] p-animeh">
          <p class="text-[13px] leading-[22px] text-stone-600 duration-300 text-mo-p3">
          ${item.description}
          </p>
        </div>
      </div>
      <div class="w-[100%] h-[10%]  flex justify-start items-center">
        <button class="w-[32%] h-[70%] bg-purple-600 !mr-[20px] !desktop:mt-[4px] desktop:!mb-[-0px] mobile:!mb-[-40px] rounded-[5px] bt-animeh-mo"><span class="text-stone-100">  ${item.textBtn}</span></button>
      </div>`
        })
        document.querySelector(".part3Mo").innerHTML=part3Mo.join("")
        event()
    } catch (error) {
        console.log(error.message);  
    }
}
export default Part3;