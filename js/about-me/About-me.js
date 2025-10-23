function event() {
  let card = document.querySelectorAll(".card");
  card.forEach((cards) => {
    cards.addEventListener("mouseenter", () => {
      cards.classList.add("purple-card");
    });
    cards.addEventListener("mouseleave", () => {
      cards.classList.remove("purple-card");
    });
  });
  let card1 = document.querySelector(".card1");
  let card2 = document.querySelector(".card2");
  let card3 = document.querySelector(".card3");
  let titleCard = document.querySelector(".title-card");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1700) {
      card1.classList.add("card11");
      card2.classList.add("card22");
      card3.classList.add("card33");
      titleCard.classList.add("title-card1");
    } else {
      card1.classList.remove("card11");
      card2.classList.remove("card22");
      card3.classList.remove("card33");
      titleCard.classList.remove("title-card1");
    }
    let threeCard_1 = document.querySelector(".card3-1");
    let threeCard_2 = document.querySelector(".card3-2");
    let threeCard_3 = document.querySelector(".card3-3");
    let text_three_card = document.querySelector(".text-three-card");
    if (window.scrollY > 2407.199951171875) {
      text_three_card.classList.add("text-three-card-add")
    } else {
   
      text_three_card.classList.remove("text-three-card-add")
    }
    if(window.scrollY >2479.199951171875){
      threeCard_1.classList.add("three-Card1");
 
    }else{
         threeCard_1.classList.remove("three-Card1");
     
    }
if(window.scrollY >2794.39990234375){
       threeCard_2.classList.add("three-Card2");
      threeCard_3.classList.add("three-Card3");
}else{
 threeCard_2.classList.remove("three-Card2");
      threeCard_3.classList.remove("three-Card3");
}
if(window.scrollY >3079.199951171875){
      threeCard_3.classList.add("three-Card3");
}else{
      threeCard_3.classList.remove("three-Card3");
}
 
  });
let darkMode=document.querySelector(".darkMode")
let articleMo=document.querySelector(".articleMo")
let cardMo=document.querySelectorAll(".card-mo")
let textMO=document.querySelectorAll(".textMO")
darkMode.addEventListener("click",()=>{
darkMode.firstElementChild.classList.toggle("hidden")
darkMode.lastElementChild.classList.toggle("hidden")
articleMo.classList.toggle("dark")
cardMo.forEach((item)=>{
item.classList.toggle("header-mode-mo")
})
textMO.forEach((item)=>{
item.classList.toggle("a-mode")
})
})
}
function add(){
   let addcard=document.querySelectorAll(".card")
 let span=document.querySelectorAll(".text-three-part")

 let sun=document.querySelector(".sun")
sun.addEventListener("click",()=>{
   addcard.forEach((item)=>{
item.classList.toggle("header-mode-mo")
 })
 span.forEach((item)=>{
  item.classList.toggle("a-mode")
  console.log("ppppppppppppppp");
 })
})
}
function eventMo(){
  
let purText=document.querySelector(".pur-text")
let ttbPur=document.querySelectorAll(".ttb-pur")
let ttbPur2=document.querySelectorAll(".ttb-pur2")
let ttbPur3=document.querySelectorAll(".ttb-pur3")
let ttbPur4=document.querySelectorAll(".ttb-pur4")
let ddddd=document.querySelectorAll(".ddddd")
let dddddd=document.querySelectorAll(".dddddd")
let ddddddd=document.querySelectorAll(".ddddddd")
let dddddddd=document.querySelectorAll(".dddddddd")

if(window.scrollY > 1200){
purText.classList.add("pur-text1")
ttbPur.forEach((ttbPurs)=>{
    ttbPurs.classList.add("ttb-pur1")
})
ttbPur2.forEach((ttbPurs2)=>{
    ttbPurs2.classList.add("ttb-pur22")
})
ttbPur3.forEach((ttbPurs3)=>{
ttbPurs3.classList.add("ttb-pur33")
})
ttbPur4.forEach((ttbPurs4)=>{
    ttbPurs4.classList.add("ttb-pur44")
})
ddddd.forEach((ddddd11)=>{
ddddd11.classList.add("ddddd1")
})
dddddd.forEach((dddddd22)=>{
dddddd22.classList.add("dddddd2")
})
ddddddd.forEach((ddddddd33)=>{
ddddddd33.classList.add("ddddddd3")
})  
dddddddd.forEach((dddddddd44)=>{
dddddddd44.classList.add("dddddddd4")
})
}
else{
      purText.classList.remove("pur-text1")
 ttbPur.forEach((ttbPurs)=>{
    ttbPurs.classList.remove("ttb-pur1")
})
ttbPur2.forEach((ttbPurs2)=>{
    ttbPurs2.classList.remove("ttb-pur22")
})
ttbPur3.forEach((ttbPurs3)=>{
ttbPurs3.classList.remove("ttb-pur33")
})
ttbPur4.forEach((ttbPurs4)=>{
    ttbPurs4.classList.remove("ttb-pur44")
})

ddddd.forEach((ddddd11)=>{
ddddd11.classList.remove("ddddd1")
})
dddddd.forEach((dddddd22)=>{
dddddd22.classList.remove("dddddd2")
})
ddddddd.forEach((ddddddd33)=>{
ddddddd33.classList.remove("ddddddd3")
})
dddddddd.forEach((dddddddd44)=>{
dddddddd44.classList.remove("dddddddd4")
})
}

}
const About = async () => {
  let article = [];
  let articleMo = [];
  try {
    let data = await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json");
    let res = await data.json();
    article = res.aboutMe.map((item) => {
      return `   <article class="w-[70%] h-[80%] " id="job">
        <div class="w-[100%] h-[18%]  flex justify-start items-end">
          <div class="w-[31%] h-[80%]  flex justify-center items-center title-card opacity-0">
            <span class="text-[47px] font-black !mb-[10px] !mr-[30px] duration-300 text-three-part">
              ${item.title}
            </span>
          </div>
        </div>
        <div class="w-[100%] h-[82%]  flex flex-row justify-center items-end gap-[30px]">
          <div class="card card1">
            <div class="w-[90%] h-[85%] flex flex-col">
              <div class="w-[100%] h-[40%]  flex justify-start items-center">
                <div class="w-[30%] h-[70%] flex justify-center items-center">
                  <div class="w-[75%] h-[85%] bg-orange-600 flex justify-center items-center rounded-[100px]">
                    <img class="w-[55%] h-[90%] !mr-[-3px]" src=${item.image} alt="">
                  </div>
                </div>
              </div>
              <div class="w-[100%] h-[15%]  flex justify-start items-center">
                <div class="w-[50%]  h-[70%] !mb-[5px] flex justify-center items-end"><span class="text-[25px] font-black !mb-[-2px] !ml-[7px] duration-300 text-three-part">${item.title2}</span></div>
              </div>
              <div class="w-[100%] h-[45%]  flex justify-center items-center">
                <div class="w-[91%] h-[88%]  !ml-[11px] !mb-[3px] flex justify-center items-start">
                  <p class="text-[14px] leading-[23px] text-stone-600 duration-300 text-three-part">
                   ${item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

         <div class="card card2">
            <div class="w-[90%] h-[85%] flex flex-col">
              <div class="w-[100%] h-[40%]  flex justify-start items-center">
                <div class="w-[30%] h-[70%] flex justify-center items-center">
                  <div class="w-[75%] h-[85%] bg-purple-600 flex justify-center items-center rounded-[100px]">
                    <img class="w-[55%] h-[90%] !mr-[-3px]" src=${item.image2} alt="">
                  </div>
                </div>
              </div>
              <div class="w-[100%] h-[15%]  flex justify-start items-center">
                <div class="w-[50%]  h-[70%] !mb-[5px] flex justify-center items-end"><span class="text-[25px] font-black !mb-[-2px] !ml-[40px] duration-300 text-three-part">${item.title3}</span></div>
              </div>
              <div class="w-[100%] h-[45%]  flex justify-center items-center">
                <div class="w-[91%] h-[88%]  !ml-[11px] !mb-[3px] flex justify-center items-start">
                  <p class="text-[14px] leading-[23px] text-stone-600 duration-300 text-three-part">
                  ${item.description2}
                  </p>
                </div>
              </div>
            </div>
          </div>

<div class="card card3">
            <div class="w-[90%] h-[85%] flex flex-col">
              <div class="w-[100%] h-[40%]  flex justify-start items-center">
                <div class="w-[30%] h-[70%] flex justify-center items-center">
                  <div class="w-[75%] h-[85%] bg-green-600 flex justify-center items-center rounded-[100px]">
                    <img class="w-[55%] h-[90%] !mr-[-3px]" src=${item.image3} alt="">
                  </div>
                </div>
              </div>
              <div class="w-[100%] h-[15%]  flex justify-start items-center">
                <div class="w-[50%]  h-[70%] !mb-[5px] flex justify-center items-end"><span class="text-[25px] font-black !mb-[-2px] !ml-[100px] duration-300 text-three-part">${item.title4} </span></div>
              </div>
              <div class="w-[100%] h-[45%]  flex justify-center items-center">
                <div class="w-[91%] h-[88%]  !ml-[11px] !mb-[3px] flex justify-center items-start">
                  <p class="text-[14px] leading-[23px] text-stone-600 duration-300 text-three-part">
                  ${item.description3}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>`;
    });
    document.querySelector(".article").innerHTML = article.join("");
    event();
    add()
  } catch (error) {
    console.log(error.message);
  }
  try {
    let data = await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json");
    let res = await data.json();
    articleMo = res.aboutMe.map((item) => {
      return ` <div class="w-[92%] h-[100%]  flex flex-col items-center" id="aboutme">
      <div class="w-[100%] opacity-0 h-[10%] flex items-center justify-start text-three-card ">
        <span class="text-[35px] font-black !mr-[5px] textMO">${item.title}</span>
      </div>
      <div class="w-[100%] h-[2%] "></div>
      <div class="w-[100%] h-[86%]  flex flex-col items-center gap-[20px]">
        <div class="card-mo !mt-[3px] card3-1 opacity-0">
          <div class="w-[90%] h-[85%]">
            <div class="w-[100%] h-[35%]  flex justify-start items-center">
              <div class="w-[24%] h-[95%]  !mr-[10px] flex justify-center items-center rounded-[40px] bg-orange-600"><img class="!mb-[3px]" src="./public/images/services/ui-design.svg" alt=""></div>
            </div>
            <div class="w-[100%] h-[20%] flex justify-start items-center "> 
              <div class="w-[40%] h-[80%] flex justify-center items-end !mt-[5px] ">
                <span class="text-[20px] font-black !mr-[4px]  textMO">
${item.title2}
              </span>
            </div>
            </div>
            <div class="w-[100%] h-[45%]  flex justify-center items-center">
              <div class="w-[93%] h-[78%]  !mt-[5px]">
                <p class="text-[13px] text-stone-600 leading-[23px] textMO">
                  ${item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
    
    <div class="card-mo !mt-[3px] card3-2 opacity-0">
          <div class="w-[90%] h-[85%]">
            <div class="w-[100%] h-[35%] flex justify-start items-center">
              <div class="w-[24%] h-[95%] !mr-[10px] flex justify-center items-center rounded-[40px] bg-purple-600"><img class="!mb-[3px]" src=${item.image2} alt=""></div>
            </div>
            <div class="w-[100%] h-[20%] flex justify-start items-center"> 
              <div class="w-[40%] h-[80%] flex justify-center items-end !mt-[5px] ">
                <span class="text-[20px] font-black !ml-[22px] textMO">
${item.title3}
              </span>
            </div>
            </div>
            <div class="w-[100%] h-[45%]  flex justify-center items-center">
              <div class="w-[93%] h-[78%]  !mt-[5px]">
                <p class="text-[13px] text-stone-600 leading-[23px] textMO">
                  ${item.description2}
                </p>
              </div>
            </div>
          </div>
        </div>

            <div class="card-mo !mt-[3px] card3-3 opacity-0">
          <div class="w-[90%] h-[85%]">
            <div class="w-[100%] h-[35%] flex justify-start items-center">
              <div class="w-[24%] h-[95%]  !mr-[10px] flex justify-center items-center rounded-[40px] bg-green-600"><img class="!mb-[3px]" src=${item.image3} alt=""></div>
            </div>
            <div class="w-[100%] h-[20%] flex justify-start items-center"> 
              <div class="w-[40%] h-[80%] flex justify-start items-end !mt-[5px] ">
                <span class="text-[20px] font-black !mr-[11px] textMO">
${item.title4}
              </span>
            </div>
            </div>
            <div class="w-[100%] h-[45%]  flex justify-center items-center">
              <div class="w-[93%] h-[78%]  !mt-[5px]">
                <p class="text-[13px] text-stone-600 leading-[23px] textMO">
                ${item.description3}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
     </div>`;
    });
    document.querySelector(".articleMo").innerHTML = articleMo.join("");
    event()
  } catch (error) {
    console.log(error.message);
  }
};
export default About;
