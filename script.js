var video = document.getElementById("video");
var volumeSlider = document.getElementById("volumeSlider");
var loadingMessage = document.getElementById("loadingMessage");

function playVideo() {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "video/*";
    fileInput.onchange = function(event) {
        var file = event.target.files[0];
        var url = URL.createObjectURL(file);
		if (!file.type.match('video/mp4')) {
		alert('Se ha detectado un error, el archivo seleccionado no es un vídeo en formato MP4.');
		return;
	}
        loadingMessage.style.display = "block";
        video.src = url;
        video.onloadeddata = function() {
            loadingMessage.style.display = "none";
            video.play();
        };
    };
    fileInput.click();
}

function pauseVideo() {
    video.pause();
}

function resumeVideo() {
    video.play();
}

function changeVolume() {
    video.volume = volumeSlider.value;
}
