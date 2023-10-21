var canvas;
var context;
window.onload=function(){
    canvas=document.getElementById('canvas');
    context=canvas.getContext('2d');
    canvas.width=1300;
    canvas.height=500;
    context.strokestyle="blue";
    context.lineWidth=2;

    canvas.onmousedown=startDrawing;
    canvas.onmouseup=stopDrawing;
    canvas.onmousemove=draw;

    function startDrawing(e){
        isDrawing=true;
        context.beginPath();
        context.moveTo(e.pageX-canvas.offsetLeft, e.pageY-canvas.offsetTop);
    }
    function  draw(e){
        var x=e.pageX-canvas.offsetLeft;
        var y=e.pageY-canvas.offsetTop;
        context.lineTo(x,y);
        context.stroke();
    }
}
function stopDrawing(){
    isDrawing=false;
}
