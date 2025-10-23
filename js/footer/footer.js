const Footer=async () => {
    let footer=[]
    let footerMo=[]
    try {
        let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
        let res=await data.json()
        footer=res.footer.map((item)=>{
return `   <footer class="w-[100%] h-[45.5vh]  bg-slate-950 flex flex-col">
     <div class="w-[100%] h-[60%] flex justify-center items-center bg-slate-950">
      <div class="w-[25%] h-[75%] flex flex-col  !mr-[30px] !mt-[40px] items-center">
        <div class="w-[80%] h-[55%]  flex justify-center items-center"><span class="text-white text-[25px] family-fo !mt-[15px] duration-1000 animate-bounce hover:text-purple-700">${item.titleend}</span></div>
        <div class="w-[95%] h-[45%]  flex items-end">
          <div class="w-[100%] h-[40%]  flex flex-row">
            <div class="w-[20%] h-[100%]  flex justify-center items-center "><a href="#" class="text-[14px] text-stone-50 duration-300 hover:text-stone-500">${item.title}</a></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center "><a href="#" class="text-[14px] text-stone-50 duration-300 hover:text-stone-500">${item.title2}</a></div>
            <div class="w-[4%] h-[100%]"></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center "><a href="#" class="text-[14px] text-stone-50 duration-300 hover:text-stone-500">${item.title3}</a></div>
            <div class="w-[4%] h-[100%]"></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center "><a href="#" class="text-[14px] text-stone-50 duration-300 hover:text-stone-500">${item.title4}</a></div>
            <div class="w-[4%] h-[100%]"></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center "><a href="#" class="text-[14px] text-stone-50 duration-300 hover:text-stone-500">${item.title5}</a></div>
          </div>
        </div>
      </div>
    </div>
 
    <div class="w-[100%] h-[16.5%]  flex justify-center items-center">
      <div class="w-[67%] h-[100%]  !mr-[12px] border-solid border-[0.5px] border-stone-700 border-t-0 border-l-0 border-r-0"></div>
    </div>
    <div class="w-[100%] h-[22.5%] bg-slate-950 flex justify-center">
      <div class="w-[67%] h-[90%]  !mr-[12px] flex justify-center items-center">
        <div class="w-[25%] h-[100%]  flex justify-center items-center !mt-[10px] !ml-[-10px]">
          <div class="w-[79%] h-[60%]  flex flex-row justify-center items-center gap-[25px]">
            <div class="w-[18%] h-[81%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-pink-700 hover:translate-y-[-5px]"><img src=${item.icon1} class="w-[50%] " alt=""></div>
            <div class="w-[18%] h-[81%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-blue-700 hover:translate-y-[-5px]"><img src=${item.icon2} class="w-[50%]" alt=""></div>
            <div class="w-[18%] h-[81%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-purple-700 hover:translate-y-[-5px]"><img src=${item.icon3} alt=""></div>
            <div class="w-[18%] h-[81%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-orange-700 hover:translate-y-[-5px]"><img src=${item.icon4} class="w-[50%]" alt=""></div>
          </div>
        </div>
      </div>
    </div>

  </footer>`
        })
        document.querySelector(".footer-desktop").innerHTML=footer.join("")
    } catch (error) {
        console.log(error.message);
    }
    try {
        let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
        let res=await data.json()
        footerMo=res.footer.map((item)=>{
return `   <footer class="w-[100%]  h-[100%] flex flex-col items-center">
      <div class="w-[91%] h-[66%]  border-solid border-[1px] border-stone-500 border-t-0 border-l-0 border-r-0 flex justify-center items-center">
        <div class="w-[95%] h-[45%]  !mr-[4px] flex flex-col">
          <div class="w-[100%] h-[70%]  flex justify-center ">
              <div class="w-[80%] h-[55%]  flex justify-center items-center"><span class="text-white text-[25px] family-fo !mt-[15px] duration-1000 animate-bounce hover:text-purple-700">${item.titleend}</span></div></div>
          <div class="w-[100%] h-[30%]  flex flex-row gap-[5px]">
            <div class="w-[15%] h-[100%]  flex justify-center items-center"><a href="#" class="text-[13.5px] text-stone-100 duration-300 hover:text-stone-500">${item.title}</a></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center"><a href="#" class="text-[13.5px] text-stone-100 duration-300 hover:text-stone-500">${item.title2}</a></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center"><a href="#" class="text-[13.5px] text-stone-100 duration-300 hover:text-stone-500">${item.title3}</a></div>
              <div class="w-[0.4%] h-[100%]"></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center"><a href="#" class="text-[13.5px] text-stone-100 duration-300 hover:text-stone-500">${item.title4}</a></div>
            <div class="w-[0.4%] h-[100%]"></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center"><a href="#" class="text-[13.5px] text-stone-100 duration-300 hover:text-stone-500">${item.title5}</a></div>
          </div>
        </div>
      </div>
      <div class="w-[100%] h-[34%]  flex justify-center items-center">
        <div class="w-[60%] h-[40%]  !mt-[5px] !ml-[10px] flex flex-row justify-center items-center gap-[22px]">
          <div class="w-[15%] h-[78%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-pink-700 hover:translate-y-[-5px]"><img src=${item.icon1} class="w-[50%]" alt=""></div>
          <div class="w-[15%] h-[78%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-blue-700 hover:translate-y-[-5px]"><img src=${item.icon2} class="w-[50%]" alt=""></div>
          <div class="w-[15%] h-[78%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-purple-700 hover:translate-y-[-5px]"><img src=${item.icon3} alt=""></div>
          <div class="w-[15%] h-[78%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-orange-700 hover:translate-y-[-5px]"><img src=${item.icon4} class="w-[50%]" alt=""></div>
        </div>
      </div>
    </footer>`
        })
         document.querySelector(".footer-mobile").innerHTML=footerMo.join("")
    } catch (error) {
        console.log(error.message);
    }
}
export default Footer;