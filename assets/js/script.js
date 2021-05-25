sliderBanner();
function sliderBanner(){
    let interval = 0

    let maxSlider = document.querySelectorAll('.slidearea').length - 1;
    
    acao()
    
    function acao() {
        let img = document.querySelectorAll('.slide')
    
        setInterval(function () {
            img[interval].style.display = 'none'
            interval++
            if(interval > maxSlider){
                interval = 0
            }
            img[interval].style.display = 'block'
        }, 4000)
    }
    
    
}




