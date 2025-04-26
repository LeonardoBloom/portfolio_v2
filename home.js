anim = document.getElementById("animation")
video = document.getElementById("bkg-video")
gifs = document.querySelectorAll(".myGif")
divSplit = document.querySelectorAll('.div-split');


let tempGif = []

function bkg_autoplay() {
    if (anim.checked == true) {
        // video.autoplay = falses
        video.pause()

        divSplit.forEach((split) => {
            split.classList.add('div-split-stop')
        })
        

        gifs.forEach((gif) => {
            tempGif.push(gif.src)
            gif.src = ''; // Clear GIFs
            
        });
        console.log(tempGif)


          
//   setTimeout(() => {
//     img.src = 'yourfile.gif'; // Optional: you can reload or leave it empty
//   }, 10);


    } else {
        // video.autoplay = true
        video.play()

        divSplitStop = document.querySelectorAll('.div-split-stop');

        divSplitStop.forEach((split) => {
            split.classList.remove('div-split-stop')
        })
       
        gifs.forEach((gif) => {
            
            gif.src = tempGif[0]; // Clear GIFs
            
          });
    }
}

