// Count Up 
let run = true;
function runOnScroll(){
    run = false;
    const counters = document.querySelectorAll('.counter');

    counters.forEach(function(counter){

        counter.innerText=0;
        const target = counter.dataset.count;
        let displaycount =counter.innerText;
        let countplus= target/100;

        function counterRun() {
            if (displaycount < target) {
                displaycount=Math.round(displaycount + countplus) ;
                counter.innerText=displaycount;
                setTimeout(counterRun,1)
            }
            else{
                displaycount= target;
            }
        }   
        counterRun();
    });
}

window.addEventListener('scroll',function(){
    if (this.scrollY >= 1500 && run) {
        runOnScroll()
    }
})
// 
// GoTo Top Function 
let topBtn = document.querySelector('.goto-top');
window.addEventListener('scroll',function(){
    // console.log(this.scrollY);
    if (this.scrollY >= 500) {
        topBtn.style.display="block"
    }
    else{
        topBtn.style.display="none"
    }
})