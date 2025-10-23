
function event(){
  
let sun=document.querySelector(".sun")
let h11=document.querySelector(".h11")
let p=document.querySelectorAll("p")
let h3=document.querySelectorAll("h3")
sun.addEventListener("click",()=>{
h11.classList.toggle("a-mode")
h3.forEach((item)=>{
item.classList.toggle("a-mode")
})
p.forEach((item)=>{
item.classList.toggle("a-mode")
})
})
}

function add(){
  let textPart1=document.querySelectorAll(".text-part1")
let darkMode=document.querySelector(".darkMode")
darkMode.addEventListener("click",()=>{
  darkMode.firstElementChild.classList.toggle("hidden")
  darkMode.lastElementChild.classList.toggle("hidden")
textPart1.forEach((item)=>{
item.classList.toggle("a-mode")
})
})
}

const Part1=async () => {
let part1=[]
try {
    let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
    let res=await data.json()
    part1=res.part1.map((item)=>{
return ` <div class="desktop:w-[75%] w-[100%] desktop:h-[75%] h-[100%]  flex desktop:flex-row flex-col-reverse" id="home">
    <!--#region 2child-p1-->
  <!--#region pa1-->
    <div class="desktop:w-[50%] desktop:h-[100%] h-[50%] flex justify-center items-center ">
      <div class="desktop:w-[75%] w-[90%] h-[85%] !mt-[20px] !ml-[10px]">
      <!--#region title-wel-->
        <div class="w-[100%] h-[35%]   desktop:block mobile:hidden one-op">
          <h1 class="text-[50px] duration-300 h11">${item.title1}</h1>
          <h1 class="text-[50px] text-fuchsia-800">${item.title2}</h1>
        </div>
      <!--#endregion title-wel-->
        <div class="w-[100%] h-[10%] desktop:block mobile:hidden ttb">
          <h3 class="text-[25px] duration-300">${item.title3}</h3>
        </div>
        <div class="w-[100%] h-[15%] desktop:hidden mobile:block mobile:flex mobile:justify-center mobile:items-center ttb-frontend">
          <h3 class="text-[20px] duration-300 text-part1">${item.title4mo}</h3>
        </div>
        <div class="w-[84%] h-[15%] desktop:block mobile:hidden ttbp">
          <p class="text-[14px] text-stone-700 leading-[23px] duration-300">
          ${item.description}
          </p>
        </div>
        <div class="w-[100%] h-[28%] desktop:hidden mobile:block p-qnimeh">
          <p class="text-[14px] text-stone-700 leading-[23px] text-center duration-300 text-part1">
  ${item.description2}
          </p>
        </div>
        <div class="w-[100%] desktop:h-[12%] h-[20%]"></div>
      <!--#region btn-->
        <div class="w-[100%] h-[15%] desktop:block mobile:hidden ttb-btn">
          <div class="w-[83%] h-[88%] flex justify-center items-center gap-[4.5px]">
            <a href="#talk" class="btn bg-purple-700"><span>${item.buttonText1Des}</span></a>
            <a href="#show" class="btn !ml-[20px] bg-stone-900 black-btn"><span>${item.buttonText2Des}</span></a>
          </div>
        </div>
      <!--#endregion btn-->
        <!--#region btn-->
        <div class="w-[100%] h-[25%] desktop:hidden mobile:block">
          <div class="w-[100%] h-[88%] flex justify-center items-center gap-[4.5px]">
            <a href="#talk" class="btn bg-purple-700 !mr-[20px]"><span>${item.buttonText1Mo}</span></a>
            <a href="#show" class="btn !ml-[20px] bg-stone-900 black-btn"><span>${item.buttonText1Mo}</span></a>
          </div>
        </div>
      <!--#endregion btn-->
      <!--#region icons-->
      <div class="w-[100%] h-[13%] desktop:block mobile:hidden">
      <div class="w-[100%] h-[100%]  flex justify-start items-end ">
        <div class="w-[40%] h-[60%] !mr-[21px] flex flex-row">
          <div class="four-part justify-start ins"><img class="!mt-[4px] !mr-[3px]" src=${item.imageIns} alt="instagram"></div>
          <div class="four-part link"><img src=${item.imageLinkedin}        alt="in"></div>
          <div class="four-part github"><img class="!mr-[6px] !mt-[2px]" src=${item.imageGithub}  alt="github"></div>
          <div class="four-part justify-end ball"><img class="!ml-[3px] !mt-[3px]" src=${item.imageBascketball } alt="bascketball"></div>
        </div>
      </div>
      </div>
      <!--#endregion icons-->
        <!--#region icons-->
        
      <div class="w-[100%] h-[13%] desktop:hidden mobile:block !mt-[10px]">
      <div class="w-[100%] h-[100%] flex justify-center items-center">
        <div class="w-[55%] h-[60%] !mr-[21px] flex flex-row">
          <div class="four-part justify-start"><img class="!mt-[4px] !mr-[3px]" src=${item.imageInsMo}   alt="instagram"></div>
          <div class="four-part"><img src=${item.imageLinkedinMo} alt="in"></div>
          <div class="four-part"><img class="!mr-[6px] !mt-[2px]" src=${item.imageGithubMo} alt="github"></div>
          <div class="four-part justify-end"><img class="!ml-[3px] !mt-[3px]" src=${item.imageBascketballMo}  alt="bascketball"></div>
        </div>
      </div>
      </div>
      <!--#endregion icons-->
      </div>
    </div>
  <!--#endregion pa1-->
  <!--#region pa2-->
  <div class="desktop:w-[50%] w-[100%] desktop:h-[100%] h-[50%]  flex mobile:flex-col desktop:justify-center justify-end items-center desktop:gap-0 gap-[20px] ">
    <div class="desktop:w-[65%] w-[40%] desktop:h-[80%] h-[50%] bg-stone-50 rounded-[80%] flex justify-center items-center !mt-[10px]  outline-offset-[15px] outline-1 outline-purple-600 ttb-img">
      <img class="w-[100%] h-[100%] object-cover rounded-[80%]" src=${item.imageMyself} alt="">
    </div>
    <div class="desktop:hidden mobile:block w-[90%] h-[20%] bg-pink-200= flex flex-row justify-center items-center">
     <div class="w-[100%] h-[100%]  flex flex-col justify-center items-center tt-ttb ">
       <h1 class="text-[25px] !mt-[40px] duration-300 text-part1">${item.title1}</h1>
      <h1 class="text-[25px]  text-fuchsia-800 !mb-[10px]">${item.title2}</h1>
     </div>

    </div>
  </div>
  <!--#endregion pa2-->
    <!--#endregion 2child-p1-->
  </div>`
    })
    document.querySelector(".part1-API").innerHTML=part1.join("")
event()
add()
} catch (error) {
    console.log(error.message);
}
}
export default Part1;