window.onload = () => {

  const mainVideo = document.querySelector(".main-video");
  const timeline = document.querySelector('.timeline');
  const currentTime = document.querySelector('.time-current');
  const endTime = document.querySelector(".time-end");
  const btnPlayStart = document.querySelector(".btn-play-pause");
  const icon = document.querySelector(".icon");
  const volume = document.querySelector(".volume");

  

  const timeConvertor = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    const time = [hours, minutes, seconds]
      .map(v => String(v).padStart(2, '0'))
      .join(':')

    return time;
  }

  if(!isNaN(mainVideo.duration)){
  timeline.max = Math.floor(mainVideo.duration);
  currentTime.innerHTML = timeConvertor(mainVideo.currentTime);
  endTime.innerHTML = timeConvertor(mainVideo.duration);
  }


  

    btnPlayStart.onclick = ()=>{

      if(mainVideo.paused){
        mainVideo.play();
        icon.classList.remove("bx-play");
        icon.classList.add("bx-pause"); 
      }else{
        mainVideo.pause();
        icon.classList.remove("bx-pause"); 
        icon.classList.add("bx-play");
      }

      const idSetInterval =  setInterval(()=>{
        if(timeline.value == timeline.max ){
            timeline.value = 0;
            mainVideo.currentTime = 0;
            currentTime.innerHTML = timeConvertor(mainVideo.currentTime);
            icon.classList.remove("bx-pause"); 
            icon.classList.add("bx-play");
            clearInterval(idSetInterval);
            
        }else{
          timeline.value = Math.floor(mainVideo.currentTime);
          currentTime.innerHTML = timeConvertor(mainVideo.currentTime); 
         
        }
    
       
      },1000)
    }
 
   timeline.onchange = (e)=>{mainVideo.currentTime = e.target.value;}
   volume.onchange = (e)=>{ mainVideo.volume = e.target.value}
    


}