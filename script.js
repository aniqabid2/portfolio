// Get Element ----------------------------------------------|
const sectionSkills =document.querySelector('.section-skills');
const progressBarLine =document.querySelectorAll('.progress-bar span:first-child');
const progressBarValue =document.querySelectorAll('.progress-bar span:nth-child(2)');
const previewBox =document.querySelector('.preview-box');
const previewIframe =document.querySelector('#preview-iframe');
// Buttons 
const navBtn =document.querySelector('.navBtn');
const previewBtns =document.querySelectorAll('.previewBtn');
const previewBoxCloseBtn =document.querySelector('.previewBoxCloseBtn');
// Set Color Theme ------------------------------|
const setTheme= ()=>{
    let themeRandNum = Math.floor(Math.random()*3 +1);
    // Set Theme1 
    if (themeRandNum == 1) {
        document.body.className='theme1';
    }
    // Set Theme2
    if (themeRandNum == 2) {
        document.body.className='theme2';
    }
    // Set Theme3 
    if (themeRandNum == 3) {
        document.body.className='theme3';
    }
}
console.log(document.body.getAttribute('id'));
setTheme();
setInterval(() => {
    setTheme();
}, 3000);
// Progress Bar Animation --------------------------------------------------|
let Skill1Value=95;
let Skill2Value=90;
let Skill3Value=70;
let Skill4Value=65;
let reachSectionSkills = false

const progressBarAnimation =()=>{
    progressBarValue.forEach((value)=>{
        value.innerHTML=0;
    })
    progressBarLine.forEach((value)=>{
        value.style.width="0"
    })
    reachSectionSkills=true
    let value1=0
    let value2=0
    let value3=0
    let value4=0
    progressBarLine[0].className='htmlProgressBarLineAnim';
    progressBarLine[1].className='cssProgressBarLineAnim';
    progressBarLine[2].className='javaScriptProgressBarLineAnim';
    progressBarLine[3].className='javaProgressBarLineAnim';
    const interval1 =setInterval(() => {
        value1++;
        if (value1==Skill1Value) {
            clearInterval(interval1)
        }
        progressBarValue[0].innerHTML=value1+"%";
    }, 18);
    const interval2 =setInterval(() => {
        value2++;
        if (value2==Skill2Value) {
            clearInterval(interval2)
        }
        progressBarValue[1].innerHTML=value2+"%";
    }, 18);
    const interval3 =setInterval(() => {
        value3++;
        if (value3==Skill3Value) {
            clearInterval(interval3)
        }
        progressBarValue[2].innerHTML=value3+"%";
    }, 19);
    const interval4 =setInterval(() => {
        value4++;
        if (value4==Skill4Value) {
            clearInterval(interval4)
        }
        progressBarValue[3].innerHTML=value4+"%";
    }, 19);
   
}
window.addEventListener('scroll',()=>{
    if (sectionSkills!=null) {
        if (window.scrollY>=sectionSkills.clientHeight/2&&!reachSectionSkills) {
            if (document.body.getAttribute('id')!=null) {
                progressBarAnimation()
            }
        }
    }
});
// navbar Button -----------------------------------------------|
// addEventListener on navBtn
navBtn.addEventListener('click',()=>{
    if (navBtn.classList.contains('nav-open')) {
        document.querySelector('nav ul').classList.add('nav-open-anim')
        document.querySelector('nav ul').classList.remove('nav-close-anim')
        document.body.style.overflow="hidden";
        setTimeout(() => {
            console.log(navBtn.dataset.hideElement);
            if (navBtn.dataset.hideElement!=undefined) {
                document.querySelectorAll("."+navBtn.dataset.hideElement)[0].style.display='none'; 
                 document.querySelectorAll("."+navBtn.dataset.hideElement)[1].style.display='none'; 
            }
            else{
                document.querySelector("."+navBtn.dataset.hideElement).style.display='none'; 
            }
        }, 100);
    }
    if (navBtn.classList.contains('nav-close')) {
        document.querySelector('nav ul').classList.add('nav-close-anim')
        document.querySelector('nav ul').classList.remove('nav-open-anim')
        document.body.style.overflow="auto";
        setTimeout(() => {
            if (navBtn.dataset.hideElement!=undefined) {
                if (navBtn.dataset.elemntCount==2) {
                    document.querySelectorAll("."+navBtn.dataset.hideElement)[0].style.display='flex'; 
                    document.querySelectorAll("."+navBtn.dataset.hideElement)[1].style.display='flex'; 
                }
                else{
                    document.querySelector("."+navBtn.dataset.hideElement).style.display='flex'; 
                }
            }
        }, 300);
    }
    if (navBtn.classList.contains('nav-open')) {
        navBtn.classList.add('nav-close');
        navBtn.classList.remove('nav-open');
    }else{
        navBtn.classList.add('nav-open');
        navBtn.classList.remove('nav-close');
    }
});
// preview Button ----------------------------------|
previewBtns.forEach((previewBtn)=>{
    previewBtn.addEventListener('click',()=>{
        previewBox.classList.remove('hide');
        document.body.style.overflow="hidden";
        previewIframe.src=previewBtn.dataset.projectSrc;
    });
});
previewBoxCloseBtn.addEventListener('click',()=>{
    previewBox.classList.add('hide');
    document.body.style.overflow="auto";

});
