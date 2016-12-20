$(document).foundation();
console.log('document', document);
var switchSlides = function (slide){
    element = document.getElementsByClassName('panel');
    for(var i = 0; i < element.length; i++) {
        element[i].classList.add('hidden');
    }

    document.getElementById(slide).classList.remove('hidden');
}
