var app = angular.module("femdangoApp");


app.directive("slickFavorites", function($timeout){
 return {
   restrict: 'EA',
     scope: {
        data: '='
     },
     
   link: function(scope,element,attrs) {
        $timeout(function() {
            $(element).slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                autoplay: true,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                          arrows: false,
                          dots: false
                    }
                },
                {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
            });
            $('.js-add-slide').on('click', function() {
        slideIndex++;
        $(element).slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
            });

            $('.js-remove-slide').on('click', function() {
            $(element).slick('slickRemove',slideIndex - 1); /*removes last slide*/
            if (slideIndex !== 0){
                slideIndex--;
              }
            });
        });
    },
     controller: function($scope) {
         
     },
     
     templateUrl: "FavoritesGallery.html"
 }
 });

app.directive("slickSearch", function($timeout){
 return {
   restrict: 'EA',
     scope: {
        data: '='
     },
     link: function(scope,element,attrs) {
       
      
       var options = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
            }]
       }
       
       $timeout(function() {
         $(element).slick(options);
        });
       
     },
     controller: function($scope) {

     },
     
     templateUrl: "resultsGallery.html"
 }
 });


