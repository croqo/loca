/*jshint esversion: 6 */ 

var App = new Map().set("sound", new Map()).set("motion", new Map());

const licence = JSON.parse(license);

const assets = {
    logo: require("./img/logo.png")
}
console.log(assets);

App.get("sound").set("jingle", createSound([
    require('./sound/jingle.webm'), 
    require('./sound/jingle.mp3')
]));

import $ from "jquery";
import lottie from "lottie-web";
import {Howl} from "howler";
import fullpage from "fullpage.js";

$(()=>{
    // $("body").append(template.load("index", assets));

    new fullpage("#fullpage", {
        licenseKey: licence.fullpage,
        sectionSelector: "section",
        recordHistory: false,
        menubar: "#navMenu",
        fixedElements: ".navbar",
        afterRender: function(){
            fullpage_api.setAllowScrolling(false);

            $(".asset").each((index, node)=>{
                const name = $(node).data("name");
                node.src = assets[name]
            });

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
    let n = setInterval(()=>{
        console.log(n);
    },10);
    return new Howl({
        src: assets,
        preload: 'auto',
        onload: function(){
            console.log("sound loaded");
            clearInterval(n);
        }
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
        loop: false,
        initialSegment: (name==="logo") ? [100,100] : false
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
            $(logo.wrapper).animate({
                "opacity": .9
            },600);

            setTimeout(()=>{
                $(button.wrapper).animate({
                    "opacity": .8
                },300, ()=>{
                    button.play();
                    $(button.wrapper).animate({
                        "z-index":11
                    },50);
    
                    button.interval = setInterval(()=>{
                        button.play()
                    }, 3000)
                })
            }, 500 ); break

        case "bells":
            logo.addEventListener("segmentStart", ()=>{
                setTimeout(()=>{
                    $(".solid").animate({
                        "opacity": 0
                    },2000)
                },1500)
            });
            logo.addEventListener("complete", ()=>{
                fullpage_api.moveSectionDown();
            });
            logo.playSegments([0, 130], true);
            jingle.play();

            $(button.wrapper).animate({
                "opacity":0
            },100,()=>{
            });
            break
        default: return
    }
}

$("figure[data-name='button']").on("click", (ev)=>{
    action("bells")

});

console.log(App)