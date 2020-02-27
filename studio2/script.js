console.log('reading js');
'use strict';

var pantone = document.querySelector('#pantone');
var waterbottle = document.querySelector('#waterbottle');
var vaseline = document.querySelector('#vaseline');

var pantoneoverlay = document.querySelector('#pantoneoverlay');
var pantoneclose = document.querySelector('#pantoneclose');
var waterbottleoverlay = document.querySelector('#waterbottleoverlay');
var wateerbottleclose = document.querySelector('#waterbottleclose');
var vaselineoverlay = document.querySelector('#vaselineoverlay');
var vaselineclose = document.querySelector('#vaselineclose');

pantone.addEventListener('click', function () {
    pantoneoverlay.style.display='block';
})
pantoneclose.addEventListener('click', function (){
    pantoneoverlay.style.display = 'none';
})

waterbottle.addEventListener('click', function () {
    waterbottleoverlay.style.display='block';
})
waterbottleclose.addEventListener('click', function (){
    waterbottleoverlay.style.display = 'none';
})

vaseline.addEventListener('click', function () {
    vaselineoverlay.style.display='block';
})
vaselineclose.addEventListener('click', function (){
    vaselineoverlay.style.display = 'none';
})
