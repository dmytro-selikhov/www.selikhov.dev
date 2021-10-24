

function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);


$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots:true,
    adaptiveHeight:true,
    slidesToShow:3,
    slidesToScroll:3,
    speed:1000,
    easing:'liner',
    infinite:true,
    autoplay:true,
    autoplaySpeed:5000,
    pauseOnFocus:true,
    pauseOnHover:true,
    pauseOnDotsHover:true,
    centerMode:false,
    variableWidth:false,
    asNavFor:"",
    responsive:[
        {
          breakpoint:768,
          settings:{
            slidesToShow:2,
            slidesToScroll:2,
          }
        },{
          breakpoint:576,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
          }
        }
    ]
  });
});