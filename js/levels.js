// Funtion to Show Level1
function showLevel1(){
    document.querySelector(".level_container").style.display = 'none';
    console.log("hey");
    document.getElementById("backbutton").style.display = 'none';
    document.getElementById("sound_btn").style.display = 'none';
    document.getElementById("canvas").style.display = 'block';
    document.body.style.background = 'none';

    // Stopping Audio
    if(isPlaying){
        toggleAudio();
    }
}


document.getElementById("lvl1-button").addEventListener("click",showLevel1)