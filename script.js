const videoElem = document.getElementById('video');
const buttonElem = document.getElementById('button');

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElem.srcObject = mediaStream;
    videoElem.onloadedmetadata = () => videoElem.play();
  } catch (e) {
    console.log('Something Went Wrong', e.message);
  }
};

buttonElem.addEventListener('click', async () => {
  buttonElem.disabled = true;

  // start picture in picture preview mode
  await videoElem.requestPictureInPicture();

  buttonElem.disabled = false;
});

selectMediaStream();
