let event=()=>{
 let purText=document.querySelector(".pur-text")
let ttbPur=document.querySelectorAll(".ttb-pur")
let ttbPur2=document.querySelectorAll(".ttb-pur2")
let ttbPur3=document.querySelectorAll(".ttb-pur3")
let ttbPur4=document.querySelectorAll(".ttb-pur4")
let ddddd=document.querySelectorAll(".ddddd")
let dddddd=document.querySelectorAll(".dddddd")
let ddddddd=document.querySelectorAll(".ddddddd")
let dddddddd=document.querySelectorAll(".dddddddd")
window.addEventListener("scroll",()=>{
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
})
let sun=document.querySelector(".sun")
sun.addEventListener("click",()=>{
  let text=document.querySelectorAll(".hh")
  let skill=document.querySelector(".myskiils")
  let addBlack=document.querySelectorAll(".add-black")
  text.forEach((item)=>{
  item.classList.toggle("a-mode")
})
addBlack.forEach((item)=>{
item.classList.toggle("dark")
})
skill.classList.toggle("header-mode-mo")
})
}
let eventMo=()=>{
let titleForm=document.querySelector(".title-form")
let ttbur1Mo=document.querySelector(".ttb-pur1-mo") 
let tbur22Mo=document.querySelector(".ttb-pur22-mo") 
let tbur33Mo=document.querySelector(".ttb-pur33-mo") 
let tbur44Mo=document.querySelector(".ttb-pur44-mo") 
let tbur55Mo=document.querySelector(".ttb-pur55-mo") 
let tbur66Mo=document.querySelector(".ttb-pur66-mo") 
let tbur77Mo=document.querySelector(".ttb-pur77-mo") 
let tbur88Mo=document.querySelector(".ttb-pur88-mo")
window.addEventListener("scroll",()=>{
   if(window.scrollY>1527.199951171875){
 titleForm.classList.add("titleMO")
   }else{
     titleForm.classList.remove("titleMO")
   }
   if(window.scrollY>1583){
ttbur1Mo.classList.add("login-animation1")
   }else{
ttbur1Mo.classList.remove("login-animation1")
   }
   if(window.scrollY>1670){
tbur22Mo.classList.add("login-animation1")
   }else{
    tbur22Mo.classList.remove("login-animation1")
   }
   if(window.scrollY>1772.800048828125){
tbur33Mo.classList.add("login-animation1")
   }else{
    tbur33Mo.classList.remove("login-animation1")
   }
   if(window.scrollY>1862){
tbur44Mo.classList.add("login-animation1")
   }else{
    tbur44Mo.classList.remove("login-animation1")
   }
   if(window.scrollY>1952){
tbur55Mo.classList.add("login-animation1")
   }else{
    tbur55Mo.classList.remove("login-animation1")
   }
   if(window.scrollY>2047.199951171875){
tbur66Mo.classList.add("login-animation1")
   }else{
    tbur66Mo.classList.remove("login-animation1")
   }
   if(window.scrollY>2138.39990234375){
tbur77Mo.classList.add("login-animation1")
   }else{
    tbur77Mo.classList.remove("login-animation1")
   }
   if(window.scrollY>2228){
tbur88Mo.classList.add("login-animation1")
   }else{
    tbur88Mo.classList.remove("login-animation1")
   }
 })
 let darkMode=document.querySelector(".darkMode")
 let h2Mo=document.querySelectorAll(".h2Mo")
 let addBlackMo=document.querySelectorAll(".addBlackMo")
 let skill=document.querySelector(".myskillMo")
  darkMode.addEventListener("click",()=>{
  darkMode.firstElementChild.classList.toggle("hidden")
  darkMode.lastElementChild.classList.toggle("hidden")
  h2Mo.forEach((item)=>{
item.classList.toggle("a-mode")
  })
  addBlackMo.forEach((item)=>{
item.classList.toggle("header-mode-mo")
  })
  skill.classList.toggle("dark")
})
}
function addEvent(){
    
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
function lineEvent(){
  let line1=document.querySelector(".ddddd1-mo")
  let line2=document.querySelector(".dddddd2-mo")
  let line3=document.querySelector(".dddddddd3-mo")
  let line4=document.querySelector(".dddddddd4-mo")
  let line5=document.querySelector(".ddddddd5-mo")
  let line6=document.querySelector(".dddddddd6-mo")
  let line7=document.querySelector(".dddddddd7-mo")
  let line8=document.querySelector(".dddddddd8-mo")
  window.addEventListener("scroll",()=>{
    if(window.scrollY>1583){
line1.classList.add("ddddd1")
    }else{
      line1.classList.remove("ddddd1")
    }
    if(window.scrollY>1670){
line2.classList.add("dddddd2")
    }else{
line2.classList.remove("dddddd2")
    }
    if(window.scrollY>1952){
line5.classList.add("ddddddd3")
    }else{
line5.classList.remove("ddddddd3")
    }
    if(window.scrollY>2138.39990234375){
line7.classList.add("dddddddd4")
    }else{
      line7.classList.remove("dddddddd4")
    }
    if(window.scrollY>2228){
line8.classList.add("dddddddd4")
    }else{
      line8.classList.remove("dddddddd4")
    }
  })
}
const Myskills=async () => {
    let myskiils=[]
    let myskiilsMo=[]
    try {
       let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
       let res=await data.json()
       myskiils=res.mySkills.map((item)=>{
return ` <div class="w-[70%] h-[80%]  flex flex-col items-center " id="skill">
    <div class="w-[100%] h-[20%]  flex justify-start items-center">
      <div class="w-[30%] h-[60%] flex justify-center items-center pur-text opacity-0">
        <h2 class="text-[48px] font-black !ml-[12px] !mb-[10px] duration-300 hh">
         ${item.title}
        </h2>
      </div>
    </div>
    <div class="w-[97%] h-[80%]  flex flex-row justify-center items-center">
      <div class="w-[50%] h-[90%] !mr-[5px]">
        <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur  add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%] flex flex-row justify-center items-center gap-[455px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${item.titleHTML}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${item.numberHTML}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%]"></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="ddddd w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>


   <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur2 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[450px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${item.titleNext}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${item.numberNext}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>


          <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur3 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[420px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${item.titleJavaScript}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${item.numberJavaScript}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="ddddddd w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

     <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur4 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[460px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${item.titleGit}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${item.numberGit}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="dddddddd w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
      <div class="w-[50%] h-[90%]">
      <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur  add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[465px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${item.titleCss}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${item.numberCss}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="dddddd w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      
   <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur2 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[445px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${item.titleReactjs}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${item.numberReactjs}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

 <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur3 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[455px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${item.titleFigma}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${item.numberFigma}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

<div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur4 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[440px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${item.titleGithub}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${item.numberGithub}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="dddddddd w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  </div>`
       }) 
       document.querySelector(".myskiils").innerHTML=myskiils.join("")
      event()
    } catch (error) {
        console.log(error.message);
    }
    try {
      let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
      let res=await data.json()
      myskiilsMo=res.mySkills.map((item)=>{
return `  <form  action="" class="w-[90%] h-[100%]  flex flex-col duration-300">
        <div  class="w-[100%] h-[10%] opacity-0 title-form  flex justify-center items-center" id="skill">
   <h2 class="text-[30px] font-black duration-300 h2Mo">
    ${item.title}
   </h2>
        </div>
        <div class="w-[100%] h-[10%] flex justify-center items-center" id="skills">
          <div class="w-[100%] h-[85%] bg-white duration-300 addBlackMo rounded-[5px] flex justify-center items-start ttb-pur1-mo opacity-0">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center gap-[273px]">
                <span class="text-[13px] !mt-[5px] duration-300 h2Mo">${item.titleHTML}</span>
                <span class="text-[13px] !mt-[7px] duration-300 h2Mo">${item.numberHTML}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 ddddd1-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

       <div class="w-[100%] h-[1%]"></div>

        <div class="w-[100%] h-[10%]  flex justify-center items-center">
          <div class="w-[100%] h-[85%] bg-white duration-300 addBlackMo rounded-[5px] flex justify-center items-center ttb-pur22-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center gap-[277px]">
                <span class="text-[13px] !mt-[5px] duration-300 h2Mo">${item.titleCss}</span>
                <span class="text-[13px] !mt-[5px] duration-300 h2Mo">${item.numberCss}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddd2-mo"></div>
                </div>
              </div>
            </div>
          </div>
         </div> 
         <div class="w-[100%] h-[1%]"></div>

     

       <div class="w-[100%] h-[1%]"></div>


          <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] bg-white duration-300 addBlackMo rounded-[5px] flex justify-center items-center ttb-pur33-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center gap-[260px]">
                <span class="text-[13px] !mt-[3px] !mr-[-7px]duration-300 h2Mo">${item.titleNext}</span>
                <span class="text-[12px] duration-300 h2Mo">${item.numberNext}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddddd3-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

       <div class="w-[100%] h-[1%]"></div>


            <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] rounded-[5px] flex justify-center items-center bg-white duration-300 addBlackMo ttb-pur44-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-end gap-[260px]">
                <span class="text-[13px] !mt-[3px] !mr-[-7px]duration-300 h2Mo">${item.titleFigma}</span>
                <span class="text-[12px] !mt-[3px] duration-300 h2Mo">${item.numberFigma}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddddd4-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="w-[100%] h-[1%]"></div>

          <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] rounded-[5px] flex justify-center items-center bg-white duration-300 addBlackMo ttb-pur55-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-end gap-[240px]">
                <span class="text-[13px] !mt-[3px] !mr-[-8px] duration-300 h2Mo">${item.titleJavaScript}</span>
                <span class="text-[12px]  !mt-[3px] duration-300 h2Mo">${item.numberJavaScript}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 ddddddd5-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
         <div class="w-[100%] h-[1%]"></div>


          <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] bg-white duration-300 addBlackMo rounded-[5px] flex justify-center items-center  ttb-pur66-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-end gap-[250px]">
                <span class="text-[13px] !mt-[3px] !mr-[-12px] duration-300 h2Mo">${item.titleReactjs}</span>
                <span class="text-[12px] duration-300 h2Mo">${item.numberReactjs}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddddd6-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="w-[100%] h-[1%]"></div>

          <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] bg-white duration-300 addBlackMo rounded-[5px] flex justify-center items-center ttb-pur77-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-end gap-[270px]">
                <span class="text-[13px] !mt-[3px] duration-300 h2Mo">${item.titleGit}</span>
                <span class="text-[12px] duration-300 h2Mo">${item.numberGit}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddddd7-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="w-[100%] h-[1%]"></div>

          <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] bg-white addBlackMo rounded-[5px] flex justify-center items-center  ttb-pur88-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-end gap-[245px]">
                <span class="text-[13px] !mt-[3px] duration-300 h2Mo">${item.titleGithub}</span>
                <span class="text-[12px] duration-300 h2Mo">${item.numberGithub}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddddd8-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>`
      })
      document.querySelector(".myskillMo").innerHTML=myskiilsMo.join("")
      eventMo()
      lineEvent()
    } catch (error) {
      console.log(error.message);
    }
}
export default Myskills;