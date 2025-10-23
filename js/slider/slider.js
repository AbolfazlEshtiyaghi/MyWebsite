function event(){
    let slider=document.querySelector(".animation-slider")
    let title=document.querySelector(".title-des")
    let titleMo=document.querySelector(".title-Mo")
window.addEventListener("scroll",()=>{
  console.log(window.scrollY);
  if(window.scrollY>3465){
title.classList.add("h2-ani")
  }else{
    title.classList.remove("h2-ani")
  }
  if(window.scrollY>4852){
titleMo.classList.add("h2-ani")
  }else{
    titleMo.classList.remove("h2-ani")
  }
  if(window.scrollY>3580){
slider.classList.add("animation-slider-add")
  }else{
    slider.classList.remove("animation-slider-add")
  }
})
} 
 function eventMo(){
     let slider=document.querySelector(".slider-Mo")
 window.addEventListener("scroll",()=>{
   console.log(window.scrollY);
   if(window.scrollY>4944){
 slider.classList.add("slide")
   }else{
     slider.classList.remove("slide")
   }
 })
 } 

const Slider=async () => {
    let title=[]
    let sliderDes=[]
    let sliderMo=[]
    try {
        let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
        let res=await data.json()
         title=res.slider.map((item)=>{
return `       <div class="desktop:block mobile:hidden w-[100%] desktop:h-[20%] h-[15%]  flex justify-start items-start">
              <div class="desktop:w-[25%]  w-[60%] h-[60%]  flex justify-center items-center opacity-0 title-des "><h1 class="text-stone-50 desktop:text-[48px] text-[35px] !desktop:mt-0 !desktop:mr-0 !mt-[11px] !mr-[5px]  font-bold">${item.title}</h1>
        </div>
          </div>
          <div class="desktop:hidden !mobile:block w-[100%] desktop:h-[20%] h-[15%]  flex justify-start items-start">
                 <div class="desktop:w-[25%]  w-[60%] h-[60%]  flex justify-center items-center opacity-0 title-Mo "><h1 class="text-stone-50 desktop:text-[48px] text-[35px] !desktop:mt-0 !desktop:mr-0 !mt-[11px] !mr-[5px]  font-bold">${item.title}</h1>
        </div>
          </div>
          `
        })
        document.querySelector(".title").innerHTML=title.join("")
    } catch (error) {
        console.log(error.message);
    }
    try {
      let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
      let res=await data.json()
      sliderDes=res.slider.map((item)=>{
return `    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="w-[89%] h-[75%]  flex flex-col !mt-[20px]">
          <div class="w-[100%] h-[20%]  flex justify-end ">
            <div class="w-[15%] h-[70%] "><h2 class=" font-bold text-[18px] !mr-[6px]">${item.titleProjectName}</h2></div>
          </div>
          <div class="w-[100%] h-[48%] flex justify-center items-start">
            <div class="w-[95%] h-[90%] flex justify-center items-start  !mr-[15px]">
              <p class="text-[13.9px] leading-[22px] text-left text-stone-700">${item.description} </p>
            </div>
          </div>
          <div class="w-[100%] h-[32%]  flex justify-end items-center">
            <div class="w-[29%] h-[75%] flex flex-row  !ml-[5px] !mb-[7px]"><div class="w-[60%] h-[100%] flex flex-col ">
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><h2 class="font-bold !ml-[1px]">${item.personName}</h2></div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><span class="text-[12px] !mr-[11px] !mb-[2.5px]">${item.personSide}</span></div>
            </div>
          <div class="w-[40%] h-[100%]  flex justify-center items-center">
            <div class="w-[77%] h-[90%] rounded-[50%] bg-gray-500"></div>
          </div>
          </div>
          </div>
        </div>
        
      </div>
       <div class="swiper-slide">
        <div class="w-[89%] h-[75%]  flex flex-col !mt-[20px]">
          <div class="w-[100%] h-[20%]  flex justify-end ">
            <div class="w-[15%] h-[70%] "><h2 class=" font-bold text-[18px] !mr-[6px]">${item.titleProjectName}</h2></div>
          </div>
          <div class="w-[100%] h-[48%] flex justify-center items-start">
            <div class="w-[95%] h-[90%] flex justify-center items-start  !mr-[15px]">
              <p class="text-[13.9px] leading-[22px] text-left text-stone-700">${item.description} </p>
            </div>
          </div>
          <div class="w-[100%] h-[32%]  flex justify-end items-center">
            <div class="w-[29%] h-[75%] flex flex-row  !ml-[5px] !mb-[7px]"><div class="w-[60%] h-[100%] flex flex-col ">
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><h2 class="font-bold !ml-[1px]">${item.personName}</h2></div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><span class="text-[12px] !mr-[11px] !mb-[2.5px]">${item.personSide}</span></div>
            </div>
          <div class="w-[40%] h-[100%]  flex justify-center items-center">
            <div class="w-[77%] h-[90%] rounded-[50%] bg-gray-500"></div>
          </div>
          </div>
          </div>
        </div>
        
      </div>
   <div class="swiper-slide">
        <div class="w-[89%] h-[75%]  flex flex-col !mt-[20px]">
          <div class="w-[100%] h-[20%]  flex justify-end ">
            <div class="w-[15%] h-[70%] "><h2 class=" font-bold text-[18px] !mr-[6px]">${item.titleProjectName}</h2></div>
          </div>
          <div class="w-[100%] h-[48%] flex justify-center items-start">
            <div class="w-[95%] h-[90%] flex justify-center items-start  !mr-[15px]">
              <p class="text-[13.9px] leading-[22px] text-left text-stone-700">${item.description} </p>
            </div>
          </div>
          <div class="w-[100%] h-[32%]  flex justify-end items-center">
            <div class="w-[29%] h-[75%] flex flex-row  !ml-[5px] !mb-[7px]"><div class="w-[60%] h-[100%] flex flex-col ">
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><h2 class="font-bold !ml-[1px]">${item.personName}</h2></div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><span class="text-[12px] !mr-[11px] !mb-[2.5px]">${item.personSide}</span></div>
            </div>
          <div class="w-[40%] h-[100%]  flex justify-center items-center">
            <div class="w-[77%] h-[90%] rounded-[50%] bg-gray-500"></div>
          </div>
          </div>
          </div>
        </div>
        
      </div>
       <div class="swiper-slide">
        <div class="w-[89%] h-[75%]  flex flex-col !mt-[20px]">
          <div class="w-[100%] h-[20%]  flex justify-end ">
            <div class="w-[15%] h-[70%] "><h2 class=" font-bold text-[18px] !mr-[6px]">${item.titleProjectName}</h2></div>
          </div>
          <div class="w-[100%] h-[48%] flex justify-center items-start">
            <div class="w-[95%] h-[90%] flex justify-center items-start  !mr-[15px]">
              <p class="text-[13.9px] leading-[22px] text-left text-stone-700">${item.description} </p>
            </div>
          </div>
          <div class="w-[100%] h-[32%]  flex justify-end items-center">
            <div class="w-[29%] h-[75%] flex flex-row  !ml-[5px] !mb-[7px]"><div class="w-[60%] h-[100%] flex flex-col ">
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><h2 class="font-bold !ml-[1px]">${item.personName}</h2></div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><span class="text-[12px] !mr-[11px] !mb-[2.5px]">${item.personSide}</span></div>
            </div>
          <div class="w-[40%] h-[100%]  flex justify-center items-center">
            <div class="w-[77%] h-[90%] rounded-[50%] bg-gray-500"></div>
          </div>
          </div>
          </div>
        </div>
        
      </div>
    </div>`
      })
      document.querySelector(".slider-Des").innerHTML+=sliderDes.join("")
      event()
    } catch (error) {
       console.log(error.message);
    }
    try {
        let data=await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")
        let res=await data.json()
        sliderMo=res.slider.map((item)=>{
return ` <div class="swiper-wrapper">
      <div class="swiper-slide !h-[82%]">
        <div class="w-[88%] h-[83%]  flex flex-col">
          <div class="w-[100%] h-[15%]  flex justify-center items-center"><div class="w-[20%] h-[60%]   !mt-[2px]"><span class="text-[15px] font-bold">${item.titleProjectName}</span></div></div>
          <div class="w-[100%] h-[50%]  flex justify-center items-center"><div class="w-[90%] h-[88%]  flex justify-center items-center"><p class="text-[14px] text-center text-stone-600">${item.description}</p></div></div>
       <div class="w-[100%] h-[35%] flex justify-center items-end"><div class="w-[21%] h-[90%]  flex flex-col ">
        <div class="w-[100%] h-[60%]  flex justify-center items-center">
          <div class="w-[70%] h-[90%] bg-stone-600 rounded-[50%] "></div>
        </div>
        <div class="w-[100%] h-[30%] "><span class="text-[15px] font-bold">${item.personName}</span></div>
        <div class="w-[100%] h-[20%]  flex !justify-center !items-end
        "><span class="text-[11.5px] font-bold text-stone-600 !mb-[-4px]">${item.personSide}</span></div>
       </div></div>
        </div>
      </div>
       <div class="swiper-slide !h-[82%]">
        <div class="w-[88%] h-[83%]  flex flex-col">
          <div class="w-[100%] h-[15%]  flex justify-center items-center"><div class="w-[20%] h-[60%]   !mt-[2px]"><span class="text-[15px] font-bold">${item.titleProjectName}</span></div></div>
          <div class="w-[100%] h-[50%]  flex justify-center items-center"><div class="w-[90%] h-[88%]  flex justify-center items-center"><p class="text-[14px] text-center text-stone-600">${item.description}</p></div></div>
       <div class="w-[100%] h-[35%] flex justify-center items-end"><div class="w-[21%] h-[90%]  flex flex-col ">
        <div class="w-[100%] h-[60%]  flex justify-center items-center">
          <div class="w-[70%] h-[90%] bg-stone-600 rounded-[50%] "></div>
        </div>
        <div class="w-[100%] h-[30%] "><span class="text-[15px] font-bold">${item.personName}</span></div>
        <div class="w-[100%] h-[20%]  flex !justify-center !items-end
        "><span class="text-[11.5px] font-bold text-stone-600 !mb-[-4px]">${item.personSide}</span></div>
       </div></div>
        </div>
      </div>
        <div class="swiper-slide !h-[82%]">
        <div class="w-[88%] h-[83%]  flex flex-col">
          <div class="w-[100%] h-[15%]  flex justify-center items-center"><div class="w-[20%] h-[60%]   !mt-[2px]"><span class="text-[15px] font-bold">${item.titleProjectName}</span></div></div>
          <div class="w-[100%] h-[50%]  flex justify-center items-center"><div class="w-[90%] h-[88%]  flex justify-center items-center"><p class="text-[14px] text-center text-stone-600">${item.description}</p></div></div>
       <div class="w-[100%] h-[35%] flex justify-center items-end"><div class="w-[21%] h-[90%]  flex flex-col ">
        <div class="w-[100%] h-[60%]  flex justify-center items-center">
          <div class="w-[70%] h-[90%] bg-stone-600 rounded-[50%] "></div>
        </div>
        <div class="w-[100%] h-[30%] "><span class="text-[15px] font-bold">${item.personName}</span></div>
        <div class="w-[100%] h-[20%]  flex !justify-center !items-end
        "><span class="text-[11.5px] font-bold text-stone-600 !mb-[-4px]">${item.personSide}</span></div>
       </div></div>
        </div>
      </div>
        <div class="swiper-slide !h-[82%]">
        <div class="w-[88%] h-[83%]  flex flex-col">
          <div class="w-[100%] h-[15%]  flex justify-center items-center"><div class="w-[20%] h-[60%]   !mt-[2px]"><span class="text-[15px] font-bold">${item.titleProjectName}</span></div></div>
          <div class="w-[100%] h-[50%]  flex justify-center items-center"><div class="w-[90%] h-[88%]  flex justify-center items-center"><p class="text-[14px] text-center text-stone-600">${item.description}</p></div></div>
       <div class="w-[100%] h-[35%] flex justify-center items-end"><div class="w-[21%] h-[90%]  flex flex-col ">
        <div class="w-[100%] h-[60%]  flex justify-center items-center">
          <div class="w-[70%] h-[90%] bg-stone-600 rounded-[50%] "></div>
        </div>
        <div class="w-[100%] h-[30%] "><span class="text-[15px] font-bold">${item.personName}</span></div>
        <div class="w-[100%] h-[20%]  flex !justify-center !items-end
        "><span class="text-[11.5px] font-bold text-stone-600 !mb-[-4px]">${item.personSide}</span></div>
       </div></div>
        </div>
      </div>

    </div>`
        })
         document.querySelector(".slider-Mo").innerHTML+=sliderMo.join("")
         eventMo()
    } catch (error) {
        console.log(error.message);
    }
}
export default Slider;
