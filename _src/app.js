/*jshint esversion: 6 */ 

import file_webm from './sound/jingle.webm';
import file_mp3 from './sound/jingle.mp3';
globalThis.soundAssets = [file_webm, file_mp3];

import file_json from './animation.json';

import jquery from "jquery";
globalThis.jQuery = globalThis.$ = jquery;
import lottie from "lottie-web";
globalThis.lottie = lottie;
import {howl} from "howler";
globalThis.howl = howl;

$(()=>
{
    let
        audio = createAudio(soundAssets),
        node = document.getElementById('lottie'),
        params 
            = {
                container: node,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                animationData: JSON.parse(file_json),
                audioFactory: audio
            },
        anima;
        anima = lottie.loadAnimation(params);
        anima.addEventListener('DOMLoaded',()=>{
            console.log('Animation ready');
        });
        anima.play();

});


function createAudio(assets)
{
    let as = [];
    for (let i of assets){
        as.push(`./${i.toString()}`);
    }
    console.log(as);

    return new Howl({
        src: as,
        html5: true,
        preload: 'auto',
        autoplay: true,
        onload: ()=>{
            console.log('Sound ready');
        }
    });
}