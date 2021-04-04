/*jshint esversion: 6 */ 

var App = new Map().set("sound", new Map()).set("motion", new Map());

const licence = JSON.parse(license);


App.get("sound").set("jingle", createSound([
    require('./sound/jingle.webm'), 
    require('./sound/jingle.mp3')
]));

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
                const name = $(node).data("name");
                App.get("motion").set(name, createAnimation(node));
            });
        },
        afterLoad: function(){
            console.log(this)
        }
    });
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
    App.get("motion").get("logo").playSegments([0, 270], true);
    App.get("sound").get("jingle").play();
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