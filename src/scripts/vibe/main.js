var isVibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
if(isVibrate){
    navigator.vibrate(5000);
    // document.getElementById('js-vibe').addEventListener('click', () => {
    //   alert();
    // });
}