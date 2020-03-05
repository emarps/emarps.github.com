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

pantone.addEventListener('dblclick', function () {
    pantoneoverlay.style.display='block';
})
pantoneclose.addEventListener('click', function (){
    pantoneoverlay.style.display = 'none';
})

waterbottle.addEventListener('dblclick', function () {
    waterbottleoverlay.style.display='block';
})
waterbottleclose.addEventListener('click', function (){
    waterbottleoverlay.style.display = 'none';
})

vaseline.addEventListener('dblclick', function () {
    vaselineoverlay.style.display='block';
})
vaselineclose.addEventListener('click', function (){
    vaselineoverlay.style.display = 'none';
}) 




let currentDroppable = null;

pantone1.onmousedown = function (event) {

    let shiftX = event.clientX - pantone1.getBoundingClientRect().left;
    let shiftY = event.clientY - pantone1.getBoundingClientRect().top;

    pantone1.style.position = 'absolute';
    pantone1.style.zIndex = 1000;
    document.body.append(pantone1);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        pantone1.style.left = pageX - shiftX + 'px';
        pantone1.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        pantone1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        pantone1.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) { //null when we were not over a droppable before this event   
           leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {  //null if we're not coming over a dropable now
                //(maybe just left the droppable)
                enterDroppable(currentDroppable);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    pantone1.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        pantone1.onmouseup = null;
    };
};


function leaveDroppable(elem) {
    elem.style.background = '';
}
pantone1.ondragstart = function () {
    return false;
};

//waterbottle



 