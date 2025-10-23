 function eventLoginDes(){
let titleFormDes=document.querySelector(".title-form-des")
let inputLogin=document.querySelector(".input1")
let inputLogin2=document.querySelector(".input2")
let inputLogin3=document.querySelector(".input3")
let inputLogin4=document.querySelector(".input4")
let inputLogin5=document.querySelector(".input5")
let btnForm=document.querySelector(".btn-form")
window.addEventListener("scroll",()=>{
  if(window.scrollY>4180){
titleFormDes.classList.add("login-animation1")
  }else{
    titleFormDes.classList.remove("login-animation1")
  }
  if(window.scrollY>4300){
inputLogin.classList.add("login-animation1")
inputLogin2.classList.add("login-animation2")
  }else{
inputLogin.classList.remove("login-animation1")
inputLogin2.classList.remove("login-animation2")
  }
if(window.scrollY>4414 ){

inputLogin3.classList.add("login-animation3")
inputLogin4.classList.add("login-animation4")

}else{
inputLogin3.classList.remove("login-animation3")
inputLogin4.classList.remove("login-animation4")
}
  if(window.scrollY>4520){
inputLogin5.classList.add("login-animation3")
  }else{
inputLogin5.classList.remove("login-animation3")
  }
//   if(window.scrollY>4650){
// btnForm.classList.add("opac-btn")
//   }else{
// btnForm.classList.remove("opac-btn")
//   }
})
let sun=document.querySelector(".sun")
let form=document.querySelectorAll(".log-page-des")
let formText=document.querySelectorAll(".form-text")
let inputAdd=document.querySelectorAll(".input-add")
sun.addEventListener("click",()=>{
  form.forEach((item)=>{
item.classList.toggle("header-mode-mo")
  })
  formText.forEach((item)=>{
item.classList.toggle("a-mode")
  })
  inputAdd.forEach((item)=>{
item.classList.toggle("dark")
item.classList.toggle("border-purple-600")
  })
})
}
function eventMo(){
let callTitleMo=document.querySelector(".call-title-mo")
let input1Mo=document.querySelector(".input1Mo")
let input2Mo=document.querySelector(".input2Mo")
let input3Mo=document.querySelector(".input3Mo")
let input4Mo=document.querySelector(".input4Mo")
let input5Mo=document.querySelector(".input5Mo")
let btn1Mo=document.querySelector(".btn1Mo")
window.addEventListener("scroll",()=>{
  if(window.scrollY>5474.39990234375){
callTitleMo.classList.add("login-animation1")
  }else{
    callTitleMo.classList.remove("login-animation1")
  }
  if(window.scrollY>5586.39990234375){
input1Mo.classList.add("login-animation1")
  }else{
input1Mo.classList.remove("login-animation1")
  }
  if(window.scrollY>5687.2001953125){
input2Mo.classList.add("login-animation1")
  }else{
input2Mo.classList.remove("login-animation1")
  }
  if(window.scrollY>5790.39990234375){
input3Mo.classList.add("login-animation1")
  }else{
input3Mo.classList.remove("login-animation1")
  }
  if(window.scrollY>5887.2001953125){
input4Mo.classList.add("login-animation1")
  }else{
input4Mo.classList.remove("login-animation1")
  }
  if(window.scrollY>5984){
input5Mo.classList.add("login-animation1")
  }else{
input5Mo.classList.remove("login-animation1")
  }
  if(window.scrollY>6207.2001953125){
btn1Mo.classList.add("opac-btn")
  }else{
btn1Mo.classList.remove("opac-btn")
  }

})
let darkMode=document.querySelector(".darkMode")
let formMolog=document.querySelector(".formMolog")
let inpMo=document.querySelectorAll(".inp-mo")
let textForm=document.querySelectorAll(".text-form")
darkMode.addEventListener("click",()=>{
darkMode.firstElementChild.classList.toggle("hidden")
darkMode.lastElementChild.classList.toggle("hidden")
textForm.forEach((item)=>{
item.classList.toggle("a-mode")
})
inpMo.forEach((item)=>{
item.classList.toggle("dark")
})
formMolog.classList.toggle("header-mode-mo")
})
}

const Form=async () => {
let form=[]
let formMo=[]
try {
    let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
    let res=await data.json()
    form=res.form.map((item)=>{
return `  <div class="w-[66.4%] h-[95%]  flex flex-col justify-center items-center " id="call">
      <div class="w-[100%] h-[12%] flex justify-start">
        <div class="w-[30%] h-[60%]  flex justify-start items-center title-form-des opacity-0"><span class="!mb-[10px] text-[48px] font-bold form-text">${item.title}</span></div>
      </div>
      <div class="w-[100%] h-[92%] rounded-[5px] bg-stone-100 flex flex-col flex-wrap items-center  !mr-[4px] duration-300 log-page-des">
        <div class="w-[95%] h-[15%]  flex flex-row flex-wrap !mt-[30px]  ">
    <div class="w-[50%] h-[100%] input1   flex flex-col justify-center items-center ">
    <div class="w-[96%] h-[85%] !mt-[6px] flex flex-col">
      <div class="w-[100%] h-[30%] ">
        <div class="w-[5%] h-[100%] flex justify-start items-start"><label for="name" class="text-[13px] !mr-[1px] form-text">${item.titelinp1}</label></div>
      </div>
      <div class="w-[100%] h-[70%]  flex justify-center items-center"><input type="email" class="w-[100%] h-[90%] bg-stone-50 duration-300 rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 input-add outline-0" name="name" id="name"></div>
    </div>
   </div>  
   <div class="w-[50%] h-[100%] input2  flex flex-col justify-center items-end">
    <div class="w-[96%] h-[85%]  !mt-[6px] flex flex-col">
      <div class="w-[100%] h-[30%] ">
        <div class="w-[5%] h-[100%] flex justify-start items-start"><label for="lastname" class="text-[13px] !mr-[1px] form-text">${item.titelinp2}</label></div>
      </div>
      <div class="w-[100%] h-[70%]  flex justify-center items-center"><input type="lastname" class="w-[100%] h-[90%] bg-stone-50 duration-300 rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 input-add outline-0" name="name" id="lastname"></div>
    </div>
   </div>   
</div>
<!--#region space-->
<div class="w-[100%] h-[20px]"></div>
<!--#endregion space-->
        <div class="w-[95%]  h-[15%]  flex flex-row flex-wrap">
   <div class="w-[50%] h-[100%] input3 flex flex-col justify-center items-center">
    <div class="w-[96%] h-[85%]  !mt-[6px] flex flex-col">
      <div class="w-[100%] h-[30%] ">
        <div class="w-[5%] h-[100%] flex justify-start items-start"><label for="email" class="text-[13px] !mr-[1px] form-text">${item.titelinp3}</label></div>
      </div>
      <div class="w-[100%] h-[70%]  flex justify-center items-center"><input type="email" class="w-[100%] h-[90%] bg-stone-50 duration-300 rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 input-add outline-0" name="name" id="email"></div>
    </div>
   </div>     
   <div class="w-[50%] h-[100%] input4 flex flex-col justify-center items-end">
    <div class="w-[96%] h-[85%]  !mt-[6px] flex flex-col">
      <div class="w-[100%] h-[30%] ">
        <div class="w-[5%] h-[100%] flex justify-start items-start"><label for="call" class="text-[13px] !mr-[1px] form-text">${item.titelinp4}</label></div>
      </div>
      <div class="w-[100%] h-[70%]  flex justify-center items-center"><input type="call" class="w-[100%] h-[90%] bg-stone-50 duration-300 rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 input-add outline-0" name="name" id="call"></div>
    </div>
   </div>   
</div>
<!--#region space-->
<div class="w-[100%] h-[20px]"></div>
<!--#endregion space-->
<div class="w-[95%] h-[40%]  flex justify-center items-center">
  <div class="w-[99%] h-[96%]  input5 flex flex-col opacity-0">
    <div class="w-[100%] h-[10%]  flex justify-start items-center">
      <div class="w-[5%] h-[90%]  flex justify-center items-center !mr-[3px]">
        <label for="text" class="text-[13px] translate-x-[6px] form-text">${item.titelinp5}</label>
      </div>
    </div>
    <textarea id="text" class="w-[100%] input-add h-[90%] bg-stone-50 rounded-[5px] border-solid border-[1px] border-gray-400 duration-300 hover:border-purple-600 outline-0"></textarea>
  </div>
</div>
<!--#region space-->
<div class="w-[100%] h-[20px]"></div>
<!--#endregion space-->
<div class="w-[100%] h-[12%] flex justify-start items-start">
  <button class="w-[15%] h-[70%] rounded-[5px] bg-purple-600 !mr-[32px] !mt-[10px] flex justify-center items-center duration-300 hover:translate-y-[-5px] active:scale-95 "><span class="text-[15px] text-white"> ${item.titelBtn1}</span></button>
</div>
      </div>
    </div>`
    })
    document.querySelector(".form").innerHTML=form.join("")
    eventLoginDes()
} catch (error) {
    console.log(error.message);
}
try {
    let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
    let res=await data.json()
    formMo=res.form.map((item)=>{
        return ` <div class="w-[90%] h-[100%]  flex flex-col  ">
      <div class="w-[100%] h-[10%]  flex justify-start items-center"><div class="w-[50%] h-[70%] opacity-0 call-title-mo"><span class="text-[35px] font-bold text-form">${item.title}</span></div>
    </div>
    <!--#region space-->
    <div class="w-[100%] h-[2.5%] "></div>
    <!--#endregion space-->
    <form action="login" class="w-[100%] h-[100%] bg-stone-100 flex justify-center items-center rounded-[8px] formMolog">
      <div class="w-[87%] h-[100%]  flex flex-col flex-wrap items-center">
        <div class="w-[100%] h-[2%]  "></div>
        <div class="w-[95%] h-[13.5%] input1Mo opacity-0  flex justify-center items-end">
<div class="w-[100%] h-[80%]  flex flex-col">
  <div class="w-[100%] h-[40%]  flex justify-start items-center">
    <div class="w-[8%] h-[75%]  flex
     justify-center items-center"><label for="name" class="text-[12.5px] text-stone-800 font-bold duration-300 text-form">${item.titelinp1}</label></div>
  </div>
    <input type="name" id="name" class="w-[100%] inp-mo h-[60%] duration-300 bg-slate-50  rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 outline-0">
</div>
        </div>
               <div class="w-[95%] h-[13.5%] input2Mo opacity-0 flex justify-center items-end">
<div class="w-[100%] h-[80%]  flex flex-col">
  <div class="w-[100%] h-[40%]  flex justify-start items-center">
    <div class="w-[8%] h-[75%]  flex
     justify-center items-center"><label for="name" class="text-[12.5px] text-stone-800 font-bold duration-300 text-form">${item.titelinp2}</label></div>
  </div>
    <input type="name" id="name" class="w-[100%] inp-mo h-[60%] duration-300 bg-slate-50  rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 outline-0">
</div>
        </div>
               <div class="w-[95%] h-[13.5%] input3Mo opacity-0 flex justify-center items-end">
<div class="w-[100%] h-[80%]  flex flex-col">
  <div class="w-[100%] h-[40%]  flex justify-start items-center">
    <div class="w-[8%] h-[75%]  flex
     justify-center items-center"><label for="name" class="text-[12.5px] text-stone-800 font-bold duration-300 text-form">${item.titelinp3}</label></div>
  </div>
    <input type="name" id="name" class="w-[100%] inp-mo h-[60%] duration-300 bg-slate-50  rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 outline-0">
</div>
        </div>
               <div class="w-[95%] h-[13.5%] input4Mo opacity-0 flex justify-center items-end">
<div class="w-[100%] h-[80%]  flex flex-col">
  <div class="w-[100%] h-[40%]  flex justify-start items-center">
    <div class="w-[8%] h-[75%]  flex
     justify-center items-center"><label for="name" class="text-[12.5px] text-stone-800 font-bold duration-300 text-form">${item.titelinp4}</label></div>
  </div>
    <input type="name" id="name" class="w-[100%] inp-mo h-[60%] duration-300 bg-slate-50  rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 outline-0">
</div>
        </div>
        <div class="w-[100%] h-[3%] "></div>
        <div class="w-[95%] h-[28%] input5Mo opacity-0 flex flex-col">
          <div class="w-[100%] h-[13%] flex  items-start "><label for="YourText" class="text-[12.5px] text-stone-800 font-bold !mb-[30px] duration-300 text-form">
            ${item.titelinp5}
  </label></div>
  <textarea name="text" id="YourText" class="w-[100%] h-[88%] resize-none duration-300 bg-slate-50  rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 outline-0 inp-mo">

  </textarea>
        </div>
        <div class="w-[100%] h-[13%] duration-900 translate-y-[-10px] flex opacity-0 btn1Mo justify-center items-center"><button class="w-[38%] h-[50%] bg-purple-600 rounded-[5px] !mt-[4px]  duration-300 active:scale-95 hover:translate-y-[-5px] "><span class="text-[13.5px] text-white">${item.titelBtn1}</span></button></div>
      </div>
    </form>
    </div>`
    })
       document.querySelector(".formMo").innerHTML=formMo.join("")
       eventMo()
} catch (error) {
    console.log(error.message);
}
}
export default Form;