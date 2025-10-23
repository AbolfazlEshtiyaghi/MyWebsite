function eventDes() {
  let animeh = document.querySelector(".add-ani");
  let animeh2 = document.querySelector(".add-ani2");
  let animeh3 = document.querySelector(".add-ani3");
  let animeh4 = document.querySelector(".add-ani4");
  let opac = document.querySelector(".opac");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      animeh.classList.add("animeh");
      animeh2.classList.add("animeh2");
      animeh3.classList.add("animeh3");
      animeh4.classList.add("animeh4");
      opac.classList.add("opac");
    } else {
      animeh.classList.remove("animeh");
      animeh2.classList.remove("animeh2");
      animeh3.classList.remove("animeh3");
      animeh4.classList.remove("animeh4");
      opac.classList.remove("opac");
    }
  });
  let sun=document.querySelector(".sun")
  sun.addEventListener("click",()=>{
  let text=document.querySelectorAll(".text")
  let number=document.querySelectorAll(".num")
  text.forEach((item)=>{
item.classList.toggle("a-mode")
    })
  number.forEach((item)=>{
item.classList.toggle("a-mode")
    })
  })

}
function eventMo(){
    
let foAnimeh1=document.querySelector(".fo-animeh1")
let foAnimeh2=document.querySelector(".fo-animeh2")
let foAnimeh3=document.querySelector(".fo-animeh3")
let foAnimeh4=document.querySelector(".fo-animeh4")
window.addEventListener("scroll",()=>{
if(window.scrollY > 260){
foAnimeh1.classList.add("fo-animeh11")
foAnimeh2.classList.add("fo-animeh22")
foAnimeh3.classList.add("fo-animeh33")
foAnimeh4.classList.add("fo-animeh44")
}else{
  foAnimeh1.classList.remove("fo-animeh11")
  foAnimeh2.classList.remove("fo-animeh22")
  foAnimeh3.classList.remove("fo-animeh33")
  foAnimeh4.classList.remove("fo-animeh44")
}


let imgMoAnimeh=document.querySelector(".img-mo-animeh")
let textAboutmeMo=document.querySelector(".text-aboutme-mo")
let animehHi=document.querySelector(".animeh-hi")
let pAnimeh=document.querySelector(".p-animeh")
let btAnimehMo=document.querySelector(".bt-animeh-mo")
if(window.scrollY > 700){
imgMoAnimeh.classList.add("img-mo-animeh1")
textAboutmeMo.classList.add("text-aboutme-mo1")
animehHi.classList.add("animeh-hi1")
pAnimeh.classList.add("p-animeh1")
btAnimehMo.classList.add("bt-animeh-mo1")
}
else{
imgMoAnimeh.classList.remove("img-mo-animeh1")
textAboutmeMo.classList.remove("text-aboutme-mo1")
animehHi.classList.remove("animeh-hi1")
pAnimeh.classList.remove("p-animeh1")
btAnimehMo.classList.remove("bt-animeh-mo1")
}
})  
 
  let darkMode=document.querySelector(".darkMode")
  let numP2=document.querySelectorAll(".num-p2")
darkMode.addEventListener("click",()=>{
  darkMode.firstElementChild.classList.toggle("hidden")
  darkMode.lastElementChild.classList.toggle("hidden")
foAnimeh1.classList.toggle("header-mode-mo")
foAnimeh2.classList.toggle("header-mode-mo")
foAnimeh3.classList.toggle("header-mode-mo")
foAnimeh4.classList.toggle("header-mode-mo")
numP2.forEach((item)=>{
item.classList.toggle("a-mode")
})
})
}
const Part2 = async () => {
  let part2 = [];
  let part2Mo = [];
  try {
    let data = await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json");
    let res = await data.json();
    part2 = res.part2.map((item) => {
      return ` <div class="w-[55%] h-[85%] desktop:!mr-[25px] flex desktop:flex-row" id="aboutme">
    <div class="p1-4part">
      <div class="w-[45%] h-[65%]  !ml-[50px] flex flex-row opacity-0 add-ani">
        <div class="w-[67%] h-[100%]  flex justify-center items-center">
        <div class="w-[93%] h-[78%] bg-orange-600 flex justify-center items-center rounded-[100%] !mt-[12px]">
          <img class="!mr-[3px] !mt-[2px]" src=${item.image}  alt="">
        </div>
        </div>
        <div class="w-[33%] h-[90%] flex flex-col !mt-[8px]">
          <div class="w-[100%] h-[60%] flex flex-row justify-center items-end">
            <span class="text-[25px] !mb-[-5px] font-black !ml-[5px]   duration-300 num">${item.number}</span>
          </div>
          <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center">
            <span class="text-[14px] text-stone-600 !mt-[25px]!ml-[15px] duration-300 text">${item.title}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="p2-4part">
      <div class="w-[65%] h-[65%]  !ml-[20px] flex flex-row opacity-0 add-ani2">
        <div class="w-[50%] h-[100%]  flex justify-center items-center ">
        <div class="w-[93%] h-[78%] bg-green-400 flex justify-center items-center rounded-[100%] !mt-[12px]">
          <img class="!mr-[3px] !mt-[2px]" src=${item.image2}  alt="">
        </div>
        </div>
        <div class="w-[55%] h-[90%] flex flex-col !mt-[8px]">
          <div class="w-[100%] h-[60%] flex flex-row justify-start items-end">
            <span class="text-[25px] !mb-[-5px] font-black !ml-[5px] duration-300 num">${item.number2}</span>
          </div>
          <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center">
            <span class="text-[14px] text-stone-600 !mt-[25px]!ml-[15px] duration-300 text">${item.title2}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="p3-4part">
      <div class="w-[75%] h-[65%]   flex flex-row opacity-0 add-ani3">
        <div class="w-[50%] h-[100%]  flex justify-center items-center ">
        <div class="w-[80%] h-[78%] bg-pink-500 flex justify-center items-center rounded-[100%] !mt-[12px] !mr-[18px]">
          <img class="!mr-[3px] !mt-[2px]" src=${item.image3}   alt="">
        </div>
        </div>
        <div class="w-[55%] h-[90%] flex flex-col !mt-[8px]">
          <div class="w-[100%] h-[60%] flex flex-row justify-start items-end">
            <span class="text-[25px] !mb-[-5px] font-black !ml-[5px] duration-300 num">${item.number3}</span>
          </div>
          <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center">
            <span class="text-[14px] text-stone-600 !mt-[25px]!ml-[15px] duration-300 text">${item.title3}</span>
          </div>
        </div>
      </div>
    </div>
    

  <div class="p4-4part">
      <div class="w-[65%] h-[65%]   flex flex-row opacity-0 add-ani4 !mr-[70px]">
        <div class="w-[50%] h-[100%]  flex justify-center items-center ">
        <div class="w-[93%] h-[78%] bg-purple-600 flex justify-center items-center rounded-[100%] !mt-[12px]">
          <img class="!mr-[3px] !mt-[2px]" src=${item.image4} alt="">
        </div>
        </div>
        <div class="w-[55%] h-[90%] flex flex-col !mt-[8px]">
          <div class="w-[100%] h-[60%] flex flex-row justify-start items-end">
            <span class="text-[25px] !mb-[-5px] font-black !ml-[5px] duration-300 num">${item.number4}</span>
          </div>
          <div class="w-[100%] h-[50%]  flex flex-row justify-start items-center">
            <span class="text-[14px] text-stone-600 !mt-[25px]!ml-[75px] duration-300 text">${item.title4}</span>
          </div>
        </div>
      </div>
    </div>

  </div>`;
    });
    document.querySelector(".opac").innerHTML = part2.join("");
    eventDes();
  } catch (error) {
    console.log(error.message);
  }
  try {
    let data = await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json");
    let res = await data.json();
    part2Mo = res.part2.map((item) => {
      return ` 
<div class="w-[100%] h-[70vh] flex justify-center items-center ">
 

<div class="w-[90%] h-[85%]  flex flex-col !mt-[50px]">
      <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center gap-[25px]">
        <div class="w-[45%] h-[87%] bg-white flex justify-center items-center rounded-[5px] shadow4 fo-animeh1 duration-300 opacity-0">
          <div class="w-[50%] h-[80%]  flex flex-col items-center">
            <div class="w-[100%] h-[50%]  flex justify-center items-start">
              <div class="w-[80%] h-[83%] rounded-[50%] bg-orange-600 flex justify-center items-center">
                <img src=${item.image} alt="">
              </div>
            </div>
            <div class="w-[50%] h-[40%]  flex flex-col">
              <div class="w-[100%] h-[60%]  flex justify-center items-center">
                <span class="text-[20px] num-p2">${item.number}</span>
              </div>
              <div class="w-[100%] h-[40%]  flex justify-center items-center">
                <span class="text-[13px] text-stone-600 num-p2">${item.title}</span>
              </div>
            </div>
          </div>
        </div>
       
    <div class="w-[45%] h-[87%] bg-white flex justify-center items-center rounded-[5px] shadow4 fo-animeh2 duration-300 opacity-0">
          <div class="w-[50%] h-[80%]  flex flex-col items-center">
            <div class="w-[100%] h-[50%]  flex justify-center items-start">
              <div class="w-[80%] h-[83%] rounded-[50%] bg-green-400 flex justify-center items-center">
                <img src=${item.image2} alt="">
              </div>
            </div>
            <div class="w-[100%] h-[40%]  flex flex-col">
              <div class="w-[100%] h-[60%]  flex justify-center items-center">
                <span class="text-[20px] num-p2">${item.number2}</span>
              </div>
              <div class="w-[100%] h-[40%]  flex justify-center items-center">
                <span class="text-[13px] text-stone-600 num-p2">${item.title2}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
         <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center gap-[25px]">

    <div class="w-[45%] h-[87%] bg-white flex justify-center items-center rounded-[5px] shadow4 fo-animeh3 duration-300 opacity-0">
          <div class="w-[52%] h-[80%]  flex flex-col items-center">
            <div class="w-[100%] h-[50%]  flex justify-center items-start">
              <div class="w-[80%] h-[83%] rounded-[50%] bg-pink-500 flex justify-center items-center">
                <img src=${item.image3} alt="">
              </div>
            </div>
            <div class="w-[100%] h-[40%]  flex flex-col">
              <div class="w-[100%] h-[60%]  flex justify-center items-center">
                <span class="text-[20px] num-p2">${item.number3}</span>
              </div>
              <div class="w-[100%] h-[40%]  flex justify-center items-center">
                <span class="text-[13px] text-stone-600 num-p2">${item.title3}</span>
              </div>
            </div>
          </div>
        </div>
    <div class="w-[45%] h-[87%] bg-white flex justify-center items-center rounded-[5px] shadow4 fo-animeh4 duration-300 opacity-0">
          <div class="w-[50%] h-[80%]  flex flex-col items-center">
            <div class="w-[100%] h-[50%]  flex justify-center items-start">
              <div class="w-[80%] h-[83%] rounded-[50%] bg-purple-500 flex justify-center items-center">
                <img src=${item.image4} alt="">
              </div>
            </div>
            <div class="w-[100%] h-[40%]  flex flex-col">
              <div class="w-[100%] h-[60%]  flex justify-center items-center">
                <span class="text-[20px] num-p2">${item.number4}</span>
              </div>
              <div class="w-[100%] h-[40%]  flex justify-center items-center">
                <span class="text-[13px] text-stone-600 num-p2">${item.title4}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
      </div>
    `;
    });
    document.querySelector(".just-write").innerHTML = part2Mo.join("");
    eventMo();
  } catch (error) {
    console.log(error.message);
  }
};
export default Part2;

