'use strict';
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const errorMsgElement = document.getElementById('span#ErrorMsg');
const constraints = {
    audio: false,
    video:{
        width: 640, height: 480
    }
};
async function init(){
    try{
       
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        handleSuccess(stream);
    }
    catch(e){
        errorMsgElement.innerHTML = `navigator.getUserMedia.error:${e.toString()}`;
    }
}
function handleSuccess(stream){
    window.stream = stream;
    video.srcObject = stream;
}
init();
var context = canvas.getContext('2d');
snap.addEventListener("click", function(){
    context.drawImage(video, 0, 0, 640, 480);
    var receiveImage = document.getElementById("canvas");
    var img  = receiveImage.toDataURL("image/png");
    var t = document.write('<img src="'+img+'"/>');       
    console.log(img);    
    console.log("hi");
    console.log(t);
    sendData(img);
});


function sendData(data)
{
    // var xhr = new XMLHttpRequest();
    // console.log(xhr);

    //     //open function
    // xhr.open('POST','http://localhost:5000/img', false);
    // xhr.setRequestHeader("Content-type", "application/json");
    // xhr.send(data);
    axios
  .post('http://localhost:5000/img', data)
  .then(response => {
  console.log("response:"+response)
})
}