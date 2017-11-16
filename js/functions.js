$(document).ready(function() {
 
  $("#slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });



  $(document).click(function(event){
      event.stopImmediatePropagation();
      $('header > section.lower-HD > nav').addClass('nav-active');
      $('.user-corner').addClass('user-corner-active');
  });



  $('header > section.lower-HD > nav').click(function(event){
event.stopImmediatePropagation();
      if($(this).hasClass('nav-active')){
          
          $(this).removeClass('nav-active');
      }

      else {
          $(this).addClass('nav-active');
      }

      if (!$('.user-corner').hasClass('user-corner-active')){
            $('.user-corner').addClass('user-corner-active');
      }
  });



 
$('.user-corner').click(function(event){
event.stopImmediatePropagation();
      if($(this).hasClass('user-corner-active')){
          
          $(this).removeClass('user-corner-active');
      }

      else {
          $(this).addClass('user-corner-active');
      }

      if (!$('header > section.lower-HD > nav').hasClass('nav-active')){
          $('header > section.lower-HD > nav').addClass('nav-active');
      }
  });




// My functions 
function parenter (ddd){
    $(ddd).click(function(){
        $(this).parent().fadeOut();
    });
};

function cleadrAll (ccc, bbb){
    $(ccc).click(function(event){
        $(bbb).fadeOut();
        event.stopImmediatePropagation();
    });
}

function propaginationStop (x){
    $(x).click(function(event){
        event.stopImmediatePropagation();
    });
}

parenter('main form > section.part-options > a:last-of-type, section.CART-part-options > a, section.QUOTE-part-options > a:last-of-type');
cleadrAll('main form > section.AddClear > a:last-child, section.AddClearEXL > section:last-child > a:last-child, section.Del-Options > section:last-child > a:last-child', 'section.part-options, section.QUOTE-part-options, section.CART-part-options');
propaginationStop('section.user-options, header > section.lower-HD > nav > ul, section.responsiv-search > section.search-area > select, section.responsiv-search > section.search-area > input[type=submit]');


$('section.order-detailHD').click(function(){
    if ($(this).parent().hasClass('oder-active')){
        $(this).parent().removeClass('oder-active');
        $(this).css('background-image','url("images/UPARR.png")');
    }
    else {
        $(this).parent().addClass('oder-active');
        $(this).css('background-image','url("images/DWNARR.png")');
    }

});

var DocWidth = $(window).width(); 

if( DocWidth <= 420 ){
    $('section.search-area > input[type=search]').click(function(event){
        event.stopImmediatePropagation();
        if (!$('header').hasClass('header-active')) {
            $('header').addClass('header-active');
        }
    });

$('body').click(function(){
      if($('header').hasClass('header-active')){
          $('header').removeClass('header-active');
      }
  });
}

$('section.pop-background > section.send > span, section.pop-background, section.pop-background > section.oneChartPop > a').click(function(){
    $('section.pop-background').css({display:'none'});
});


$('section.send').click(function(event){
    event.stopImmediatePropagation();
});

//   + - functions


function minusminus (q,y){
$(q).click(function(){
    
  var x = parseInt($(y).val());
  if (x > 0) {
    x--;
    $(y).val(x);
  }
});
};

function plusplus (q,y){

$(q).click(function(){
    
  var x = parseInt($(y).val());
  
    x++;
    $(y).val(x);
 
});
};

minusminus('section.pop-background > section.send > label > img:last-of-type, section.CART-part-options section > img:last-of-type', 'section.pop-background > section.send > label > input.plus, section.CART-part-options section input.ragacklasi');
plusplus('section.pop-background > section.send > label > img:first-of-type, section.CART-part-options section > img:first-of-type', 'section.pop-background > section.send > label > input.plus,section.CART-part-options section input.ragacklasi' );

$().click(function(){
    
});


});


// Canvas Chart 

window.onload = function () {
  CanvasJS.addColorSet("greenShades",
                [//colorSet Array
                "#00B22D",
                "#EEEEEE"               
                ]);
	var chart = new CanvasJS.Chart("chartContainer",
	{
        width:200,
        
        interactivityEnabled: false,
      colorSet: "greenShades",
		// title:{
		// 	text: "How my time is spent in a week?",
		// 	fontFamily: "arial black"
		// },
                animationEnabled: true,
		// legend: {
		// 	verticalAlign: "top",
		// 	horizontalAlign: "right",
        //     maxWidth: 100,
		// 	itemWidth: 100
		// },
        toolTip:{
        enabled: false   //enable here
        },


        
		data: [
		{    
			type: "pie",
			indexLabelFontFamily: "Product Sans Bold",       
			indexLabelFontSize: 16,
			indexLabelFontWeight: "bold",
			startAngle:0,
			indexLabelLineColor: "darkgrey", 
			indexLabelPlacement: "inside", 
			showInLegend: false,
			indexLabel: "#percent%", 
			dataPoints: [
              {  y: 44, name: "Time At Home", legendMarkerType: "square", indexLabelFontColor: "#fff", },
              {  y: 12, name: "Time Spent Out", legendMarkerType: "square", indexLabelFontColor: "#333333",}
			]
		}
		]

	});
	chart.render();
}


