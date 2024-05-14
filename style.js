function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('#FFFFFF' ) });


 function testing() {
    var number = "123";
    document.getElementById("test").innerHTML = number;

}



document.addEventListener('mousemove', (e) => {


    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('anchor')
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width/2;
    const anchorY = rekt.top + rekt.height/2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    console.log(angleDeg)



})

function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180/ Math.PI;
    return deg;



}