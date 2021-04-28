/*jshint esversion: 6 */ 


import lottie from "lottie-web";
import {Howl} from "howler";
import style from "./style";



globalThis.crocwork = {
    sound: new Map(),
    motion: new Map(),

    createSound: function (assets)
    {
        return new Howl({
            src: assets,
            preload: 'auto',
            onload: function(){
                console.log("sound loaded");
            }
        })
    },

    createAnimation: function (node)
    {
        const 
            name = $(node).data("name"),
            animationData = crocwork.getAnimationData(name)
        ;
        return lottie.loadAnimation({
            name: name,
            container: node,
            animationData: animationData,
            autoplay: false,
            loop: false,
            initialSegment: (name==="logo") ? [100,100] : false
        })
    },

    getAnimationData: function (name)
    {
        const animationJSON = require(`./lottie/${name}.json`);
        return JSON.parse(animationJSON)
    },

    action: function (script) {
        const 
            logo = crocwork.motion.get("logo"),
            button = crocwork.motion.get("button"),
            jingle = crocwork.sound.get("jingle")
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
                logo.playSegments([0, 120], true);
                jingle.play();
    
                logo.addEventListener("complete", ()=>{
                    console.log("animation coplete");
                    setTimeout(()=>{
                        $(".modal-background").animate({
                            opacity: 0
                        }, 1500, ()=>{
                            $(logo.wrapper).animate({
                                opacity: 0
                            }, 1000)
                        });
                    },2000);
                    setTimeout(()=>{
                        $(".modal").removeClass("is-active");
                    },3500);
                });
                $(".acrylic").animate({
                    opacity: .1
                }, 2000);
                $(button.wrapper).fadeOut(300);
                break
            default: return
        }
    }
    
};




$(()=>{

    $(".sound").each((index, node)=>{
        const 
        name = $(node).data("name"),
        files = [];
        $(node).children().each((i, file)=>{
            files.push(file.src)
        });
        console.log(files);
        crocwork.sound
        .set(name, crocwork.createSound(files));
    });

    $(".lottie").each((index, node)=>{
        const name = $(node).data("name");
        crocwork.motion
        .set(name, crocwork.createAnimation(node));
    });
    crocwork.action("init");

});


$(".lottie[data-name='button']").on("click", (event)=>{
    crocwork.action("bells");
    console.log(crocwork)
});

