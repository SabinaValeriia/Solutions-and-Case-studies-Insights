
// $('.case__box_button').click(function(){
//     console.log(111)
    
//     $('.fix').css('display','block')
// })

// $('.case__box_button').click(function(){
//     $('.fix').each(function(i){
//        var el = $(this);
//        setTimeout(function(){ el.css({'display':'block'}); },i*100);
//     });
//     console.log('a');
//    });



// $('.case__box_button').click(function(){
// //     // $(this).find('.fix').animate({opacity: 'toggle', height: 'toggle'}, 500);
//     $('.fix').animate({opacity: 'toggle', height: 'toggle'}, 500);
//     });case__box_button

    // $('.case__box_button').click (function(e){
    //     var elem = e.target
    //     if(elem.classList.contains("fix")) elem.classList.toggle("hide");
    // })

// $('.case__mobile_plus').click(function(){
//         // $('.case__box-second').animate({opacity: 'toggle'}, 500);
//     // $('.case__mobile_plus').toggleClass("case__mobile_minus");
//     for(let i = 0; i < btnText.length; i++)
//     $('.case__box-second').toggleClass( "highlight" );
   
// });

// $('.case__mobile_plus, .case__box-second').click(function(){

//     var $td = $(this);
//     if($(this).hasClass('case__mobile_plus')){
//         var target =  $(this).data('target');
//         $td = $("#div" + target);
//     }

//     $td.tooggleClass('highlight');    
// });


$('.case__box_button, .hide').click(function(){

    var $td = $(this);
    if($(this).hasClass('case__box_button')){
        var target =  $(this).data('target');
        $td = $("#div" + target);
    }

    $td.toggle('.show');    
});

$('.featured__box_button, .hide').click(function(){

    var $td = $(this);
    if($(this).hasClass('featured__box_button')){
        var target =  $(this).data('target');
        $td = $("#div" + target);
    }
   
    $td.toggle('.show');    
});

$('.image').click(function(){

    $('.image').addClass('move') 
});

// window.onload = function(){
//     var image = document.getElementById('image');
//     image.onclick = function(){
//        this.style.height = '900px';
//        this.style.width= '800px';
//     }
//  };

// $.fn.extend({
//     live: function (types, data, fn) {
//       jQuery(this.context).on(types, this.selector, data, fn);
//       return this
//     }
//   });
//   $('.eMessage.img').click(function () {
//     $('body').append('<div class="darkLayer"><bimg style="background:url(' + $(this).find('img').attr('src') + ') no-repeat"><close>X</close></dimg></div>');
//   });
//   $('.darkLayer').live('click', function (e) {
//     var a = $(this),
//       b = e.target.tagName;
//     if (a.is('.darkLayer') && b == 'CLOSE' || e.target.getAttribute('class') == 'darkLayer') a.remove();
//   });
//   $(document).keyup(function (event) {
//     if ($('.darkLayer').length && (event.which == 27 || event.keyCode == 27)) $('.darkLayer').remove();
//   });


//   $('#css').on('click',function(){
//     $('.block').css("height", 737);
//     $('.block').css("width", 1120);
//     });
    
//     $('#toggle').on('click',function(){
//     $('.block').toggleClass('biggest');
//     });
    
//     $('#resetcss').on('click',function(){
//     $('.block').css("height", 600);
//     $('.block').css("width", 1120);
//     $('.block').removeClass('biggest');
//     });

    // var dots = document.getElementsByClassName("dots"),
    // moreText = document.getElementsByClassName("more"),
    // btnText = document.getElementsByClassName("myBtn");

    // for(let i = 0; i < btnText.length; i++) {
    // btnText[i].addEventListener('click', () => {
    // if (dots[i].style.display === "none") {
    //     dots[i].style.display = "block";
    // //   dots[i].style.display = "inline";
   

   
    // }
    // else {
    // dots[i].style.display = "none";
    
   
    // }
    // });
    // }

   

      

        // (function () {
        //   document.onclick = function (event) {
        //     event = event || window.event;
        //     var target = event.target || event.srcElement,
        //       active = this.querySelector('.size'),
        //       elCls;
        //     while (target != this) {
        //       elCls = target.className;
        //       elCls == 'float small' && (target.className += ' size') ||
        //       elCls == 'float size' && (target.className = 'float small') ||
        //       elCls == 'float size small' && (target.className = 'float ') ;
        //       target = target.parentNode;
        //     }
        //     active && (active.className = 'float');
        //   }
        // }());

        // $('.my').on('click', function(){
        //     // $(this).toggleClass('cl_img');
        //     if(!$('.my').hasClass('cl_img')) { 
        //         // $(this).removeClass('my')
        //         $(this).toggleClass('cl_img');
        //       } else if(!$('.my').hasClass('smaller') ){
        //         $(this).addClass('smaller')
        //       }else {
        //         $(this).removeClass('cl_img')
        //       }
         
        // });

        // var cells = document.getElementsByClassName('my');
        // for(var i=0; i<cells.length;i++){
        //     cells[i].addEventListener('click', selectDate);
        // }

        // function selectDate(){
        //     if(this.classList.contains('cl_img')){
        //         this.classList.removeClass('cl_img');
        //     } else if(!(this.classList.contains('smaller')) ){
        //         this.classList.addClass('smaller');
        //     }
        //     else {
        //         this.classList.addClass('cl_img');
        //     }
            // if(this.classList.contains('smaller')){
            //     this.classList.remove('smaller');
            // }else {
            //     this.classList.add('smaller');
            // }

      // $( ".my" ).mouseenter(function() {
      //   // if(!$('.smaller').length > 0) {
      //   //   $(this).addClass('cl_img');
      //   // } else {
      //   //   $(this).removeClass('smaller');
      //   // }
      //       $(this).addClass('cl_img');
      //       // $( ".my" ).css('height', '900px')
      //  });

      //   $( ".my" ).mouseout(function() {
      //           $(this).removeClass('cl_img');
      //   });

        $( ".my" ).mouseenter(function() {
            $(this).addClass('cl_img');
         });
  
          $( ".my" ).mouseout(function() {
              $(this).removeClass('cl_img');
          });
    
      

//   $('.case__mobile_plus').on('click', function(){
//         $(this).toggleClass('case__mobile_minus');
//         // let divs = document.getElementsByTagName('div');
//         // $(".case__box-second").toggleClass('height');
//         // $(".case__mobile").toggleClass('showen');
//         // $(".case__box_mobile_text").toggleClass('hiden');//текст на маленбкой
//   })

//   $('.case__box-first, .hiden').click(function(){

//     var $td = $(this);
//     if($(this).hasClass('case__box-first')){
//         var target =  $(this).data('target');
//         $td = $("#div" + target);
//         $(".case__box-first").toggleClass('heighten')
//         $(".case__box_mobile_text").toggleClass('hiden')
//         $(".case__mobile_plus").toggleClass('case__mobile_minus')
//     }
//     $td.toggle('.showen');  
// });


// $('.featured__box-first, .hiden').click(function(){

//     var $td = $(this);
//     if($(this).hasClass('featured__box-first')){
//         var target =  $(this).data('target');
//         $td = $("#div" + target);
//         $(".featured__box-first").toggleClass('heighten')
//         $(".case__box_mobile_text").toggleClass('hiden')
//         $(".case__mobile_plus").toggleClass('case__mobile_minus')
//     }
//     $td.toggle('.showen');  
    
// });


// $('.case__box-second, .hiden').click(function(){

//     var $td = $(this);
//     if($(this).hasClass('case__box-seccond')){
//         var target =  $(this).data('target');
//         $td = $("#div" + target);
//         // $(".case__box-second").toggleClass('heighten')
//         // $(".case__box_mobile_text").toggleClass('hiden')
//         // $(".case__mobile_plus").toggleClass('case__mobile_minus')
//     }
//     $td.toggle('.showen');  
    
// });
















