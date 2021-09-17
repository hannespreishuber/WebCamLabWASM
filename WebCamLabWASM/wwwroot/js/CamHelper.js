const constraints = { audio: false, video: true };
//https://blog.tomayac.com/2020/05/15/the-requestvideoframecallback-api/
const updateCanvas = (now, metadata) => {
  
   
    DotNet.invokeMethodAsync('WebCamLabWASM', 'OnFrameArrived', getBase64Img(video));
    
    video.requestVideoFrameCallback(updateCanvas);
};
var video;
export async function initialize(v, dotnet) {
    video = v;
        let stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        video.play();
   
        
    video.requestVideoFrameCallback(updateCanvas);

}
export function Test(video) {
    console.log("XXXXXXXXXXXXXX");
    if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
        
      return true;
    }
    return false;
}
export function getBase64Img(video) {
 
    let canvas = document.createElement("canvas");
    let context = canvas.getContext('2d');
    canvas.setAttribute('width', video.videoWidth);
    canvas.setAttribute('height', video.videoHeight);
 
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
   
    let data = canvas.toDataURL('image/png');
   
    canvas.remove();
    return data;
}



function errorMsg(msg, error, dotnet) {

    dotnet.invokeMethodAsync("OnWebCamLiveError", msg);
}