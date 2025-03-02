anim = document.getElementById("animation")
video = document.getElementById("bkg-video")



function bkg_autoplay() {
    if (anim.checked == true) {
        // video.autoplay = false
        video.pause()
    } else {
        // video.autoplay = true
        video.play()
    }
}