/*jshint esversion: 6 */ 
const licence = JSON.parse(license);

import file_webm from './sound/jingle.webm';
import file_mp3 from './sound/jingle.mp3';
const sound = createSound([file_webm, file_mp3]);

import animationJSON from './lottie/animation-tweak.json';
const animationDATA = JSON.parse(animationJSON);

import $ from "jquery";
import lottie from "lottie-web";
import {Howl} from "howler";

var Player;
// var anima = createAnimation(file_json);

$(()=>{
    new fullpage("#fullpage", {
        licenseKey: licence.fullpage,
        sectionSelector: "section",
        recordHistory: false,
        menubar: "#navMenu",
        fixedElements: ".navbar, is-fixed",
        afterRender: function(){
            $(".lottie").each((index, node)=>{
                let anima = createAnimation(node, animationDATA);
                anima.goToAndStop(270, true);

                $(node).animate({
                    "z-index": 2
                }, 300, ()=>{
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

function createAnimation(node, data){
    return lottie.loadAnimation({
        container: node,
        animationData: data,
        autoplay: false,
        loop: false
    })
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