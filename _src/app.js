/*jshint esversion: 6 */ 

import sound from './sound/jingle.mp3';
import animationData from './animation.json';

import jquery from "jquery";
globalThis.jQuery = globalThis.$ = jquery;
import lottie from "lottie-web";
globalThis.lottie = lottie;
import {howl} from "howler";
globalThis.howl = howl;

$(()=>
{
    let
        audio = createAudio(sound.toString()),
        node = document.getElementById('lottie'),
        params 
            = {
                container: node,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                animationData: JSON.parse(animationData),
                audioFactory: audio
            },
        anima;
        anima = lottie.loadAnimation(params);
        anima.addEventListener('DOMLoaded',()=>{
            console.log('Animation ready');
        });
        anima.play();

});


function createAudio(assetPath)
{
    return new Howl({
        src: [`./${assetPath}`],
        html5: true,
        preload: 'auto',
        autoplay: true,
        onload: ()=>{
            console.log('Sound ready');
        }
    });
}