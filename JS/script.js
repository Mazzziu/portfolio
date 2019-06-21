$(document).ready(main);

var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
}


function main (){
    console.log("cargado!");

    $('.aniview').AniView(options);

}