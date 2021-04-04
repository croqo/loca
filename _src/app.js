/*jshint esversion: 6 */ 
const licence = JSON.parse(license);

import file_webm from './sound/jingle.webm';
import file_mp3 from './sound/jingle.mp3';
const sound = createSound([file_webm, file_mp3]);


import $ from "jquery";
import lottie from "lottie-web";
import {Howl} from "howler";
import fullpage from "fullpage.js";

$(()=>{
    new fullpage("#fullpage", {
        licenseKey: licence.fullpage,
        sectionSelector: "section",
        recordHistory: false,
        menubar: "#navMenu",
        fixedElements: ".navbar, is-fixed",
        afterRender: function(){
            $(".lottie").each((index, node)=>{
                let anima = createAnimation(node);
                anima.goToAndStop(270, true);
                anima.playSegments([0, 270]);
                });

                Player = {
                    anima: anima,
                    sound: createSound([file_webm, file_mp3])
                }
            })
        },
        afterLoad: function(){
            console.log(this);
            console.log(Player)
        }
    });
    // anima.playSegments([0, 270]);
    // console.log(sound);
    // console.log(anima);

});


function createSound(assets)
{
    return new Howl({
        src: assets,
        html5: true,
        preload: 'auto'
    })
}

function createAnimation(node){
    const 
        name = $(node).data("name"),
        animationData = getAnimationData(name)
    ;
    return lottie.loadAnimation({
        name: name,
        container: node,
        animationData: animationData,
        autoplay: false,
        loop: false
    })
}
function getAnimationData(name){
    const animationJSON = require(`./lottie/${name}.json`);
    return JSON.parse(animationJSON)
}

$(".solid").on("click", (ev)=>{
    Player.anima.playSegments([0, 270], true);
    Player.sound.play();
    var it = ev.target;
    $(it).animate({
        opacity: .75
    },300);
    setTimeout(()=>{
        $(it).animate({
            opacity: .99
        },1500);
    },3000);
})

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