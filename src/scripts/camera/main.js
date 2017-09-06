const localVideo = document.getElementById('js-video');

document.getElementById('js-camera').addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })
    .then(function (stream) {
      localStream = stream;
      localVideo.src = window.URL.createObjectURL(localStream);
    }).catch(function (error) {
      console.error('mediaDevice.getUserMedia() error:', error);
      return;
    });
});