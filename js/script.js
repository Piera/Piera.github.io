$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: false,
        resize : true,
        slidesColor : ['#fffff', '#fffff', '#A4B4C1'],
        anchors:['About', 'Portfolio', 'Resume','Gallery'],
        scrollingSpeed: 700,
        // easing: 'easeInQuart',
        menu: '#menu',
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: [],
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        autoScrolling: false,
        scrollOverflow: false,
        css3: false,
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#element1, .element2',
        normalScrollElements: '#element1, .element2',
        normalScrollElementTouchThreshold: 5,
        keyboardScrolling: true,
        touchSensitivity: 15,
        continuousVertical: false,
        animateAnchor: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
   
   });
});