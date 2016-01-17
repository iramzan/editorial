// <script type="text/javascript" src="script.js"></script>

// fadeout action

$(document).ready(function() {
    $("#green").fadeOut(1000);
});


// mouseenter / mouseleave

$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
    });

    $('div').mouseleave(function() {
        $('div').fadeTo('slow', 0.5);
    });
});



/*
$(document) is a jQuery object. The $() is actually a function in disguise;
it turns the 'document' into a jQuery object.

.ready() is a type of function; you can think of it as sort of a helper
that runs the code inside its parentheses as soon as the HTML document is ready.

function(){} is the action that .ready() will perform as soon as the HTML
document is loaded. (In the above example, the 'Do something' placeholder is where those actions would go.)

*/


// variables in JQ

$(document).ready(function() {
    $target = $('li:nth-child(4)');
    $target.fadeOut('fast');
});


// selecting by class

$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow');
    });
});


// using 'this'

// works on the object we are currently working with:

$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});


//toggling a panel
//
//<div class="panel">
//<br />
//<br />
//<p>Now you see me!</p>
//</div>
//<p class="slide"><div class="pull-me">Slide Up/Down</div></p>

$(document).ready(function(){
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
    });
});


// setting full elements as variables

$h1 = $('<h1>Hello</h1>')


// appending and prepending stuff

// .append() inserts the specified element as the last child of the target element.
// .prepend() inserts the specified element as the first child of the target element.
// .appendTo() does the same as .append(), but it just reverses the order of "what to add" and "where to add it." The code

$(document).ready(function(){
    $('body').append("<p>I'm a paragraph!</p>");
});


// !!! $(target).after(what_we_move)

var $paragraph = $("p"); // existing element
$("div").after($paragraph); // Move it!
// Same as:
$("div").after($("p"));


// .empty() and .remove()
// .empty() deletes an element's content and all its descendants.
// .remove(), not only deletes an element's content, but deletes the element itself.

$('p').remove();


// addClass() & removeClass()

$(document).ready(function(){
    $('#text').click(function() {
        $(this).addClass('highlighted');
    });

});


// .toggleClass() removes that class; if the target element doesn't have that class, .toggleClass() adds it.


// using css() with multiple params

$(document).ready(function() {
    $('div').css({"height": "200px", "width": "200px", "border-radius": "10px"});
});


// .html() can be used to set the contents of the first element match it finds.

$(document).ready(function(){
    $('p').html('jQuery magic in action!');
});


// Making the small function to take content from the form and add to the list

// 1.

$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
    });
});

// !!! VERY IMPORTANT !!!
//
// Great job! Finally, we want to be able to check items off our list.
//
//  You might think we could do this:
//
//  $('.item').click(function() {
//    $(this).remove();
//  });

//  and that's not a bad idea. The problem is that it won't work—jQuery looks for
//  all the .items when the DOM is loaded, so by the time your document is ready,
//  it's already decided there are no .items to .remove(), and your code won't work.
//
//  For this, we'll need a new event handler: .on(). You can think of .on() as a
//  general handler that takes the event, its selector, and an action as inputs.
//
//  The syntax looks like this:
//
//  $(document).on('event', 'selector', function() {
//    Do something!
//  });
//
// In this case, 'event' will be 'click', 'selector' will be '.item', and the thing we'll want to do is call .remove() on this.


$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });

    $(document).on('click','.item', function()
    {
        $(this).remove()
    });
});


// click and hover events

$(document).ready(function(){
    $('div').click(function(){
        $(this).fadeOut('fast');

    });

    $('div').hover(function(){
        $(this).addClass('red');
    });
});


// double click events

$(document).ready(function(){
    $('div').dblclick(function(){
        $(this).fadeOut('fast');
    });
});


// hover/unhover taking two functions

$(document).ready(function(){

    $('div').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active');
        }
    );

});


// focus event

$(document).ready(function(){
    $('input').focus(function(){
        $(this).css('outline-color', '#FF0000');
    });
});


// keydown event

$(document).ready(function(){
    $(document).keydown(function(){
        $('div').animate({left:'+=10px'},500);
    });
});


//  keydown with specific keys

$(document).ready(function(){
    $(document).keydown(function(key){

    });
});