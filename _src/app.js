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
        fixedElements: ".navbar",
        afterRender: function(){
            fullpage_api.setAllowScrolling(false);
            $(".lottie").each((index, node)=>{
                const name = $(node).data("name");
                App.get("motion").set(name, createAnimation(node));
            });
            action("init");
        },
        afterLoad: function(){
            console.log(this);

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

function action(script) {
    const 
        logo = App.get("motion").get("logo"),
        button = App.get("motion").get("button"),
        jingle = App.get("sound").get("jingle")
    ;
    switch (script) {
        case "init":
            logo.playSegments([0, 270], true);
            setTimeout(()=>{
                $(button.wrapper).animate({
                    "opacity": .8
                },800, ()=>{
                    button.play();
                    $(button.wrapper).animate({
                        "z-index":11
                    },100);
    
                    button.interval = setInterval(()=>{
                        button.play()
                    }, 3000)
                })
            }, 1000 ); break

        case "bells":
            logo.playSegments([0, 270], true);
            jingle.play();

            $(button.wrapper).animate({
                "opacity":0
            },100,()=>{
                $(".solid").animate({
                    "opacity": 0
                },700);
            });


            setTimeout(()=>{
                fullpage_api.moveSectionDown();
            }, 800);
            break
        default: return
    }
}

$("figure[data-name='button']").on("click", (ev)=>{
    action("bells")

});

console.log(App)