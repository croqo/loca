/*jshint esversion: 6 */ 

import file_webm from './sound/jingle.webm';
import file_mp3 from './sound/jingle.mp3';

import file_json from './lottie/animation-tweak.json';

import $ from "jquery";

import lottie from "lottie-web";
import {Howl} from "howler";
import fullpage from "fullpage.js";

const KEYS = JSON.parse(license);

var sound = createAudio([file_webm, file_mp3]);
var anima = createAnimation(file_json);
anima.playSegments([0, 270]);
console.log(sound);
console.log(anima);

$(()=>{
    new fullpage("#fullpage", {
        licenseKey: KEYS.fullpage
    });
});


function createAudio(assets)
{
    return new Howl({
        src: assets,
        html5: true,
        preload: 'auto'
    })
}

function createAnimation(json){
    return lottie.loadAnimation({
        container: $('.lottie')[0],
        animationData: JSON.parse(json),
        autoplay: false,
        loop: false
    })
}

$(".acrylic").on("click", (e)=>{
    anima.playSegments([0, 270], true);
    sound.play();
    var it = e.target;
    $(it).animate({
        opacity: .5
    },300);
    setTimeout(()=>{
        $(it).animate({
            opacity: .99
        },1500);
    },3000);
})