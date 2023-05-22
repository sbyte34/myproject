

$(document).ready(function () {
  //Owl
  $('.hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    navText: ['PREV', 'NEXT'],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      }
    }
  })

  $('#projects-slider').owlCarousel({
    loop: true,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 2,
        margin: 8,
        nav: true
      }
    }
  })

  $('.reviews-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    navText: ['PREV', 'NEXT'],
    smartSpeed: 1500,
    items: 1,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 7000,
  })
});

jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: -5,
  /*
 animateOut: 'fadeOut',
 animateIn: 'fadeIn',
 */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});
$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
});
// ************************************************************************
$('#toggle-left-menu').click(function () {
  if ($('#left-menu').hasClass('small-left-menu')) {
    $('#left-menu').removeClass('small-left-menu');
  } else {
    $('#left-menu').addClass('small-left-menu');
  }
  $('#logo').toggleClass('small-left-menu');
  $('#page-container').toggleClass('small-left-menu');
  $('#header .header-left').toggleClass('small-left-menu');

  $('#logo .big-logo').toggle('300');
  $('#logo .small-logo').toggle('300');
  $('#logo').toggleClass('p-0 pl-1');
});

$(document).on('mouseover', '#left-menu.small-left-menu > ul > li', function () {
  if (!$(this).hasClass('has-sub')) {
    var label = $(this).find('span').text();
    var position = $(this).position();
    $('#show-lable').css({
      'top': position.top + 79,
      'left': position.left + 59,
      'opacity': 1,
      'visibility': 'visible'
    });

    $('#show-lable').text(label);
  } else {
    var position = $(this).position();
    $(this).find('ul').addClass('open');

    if ($(this).find('ul').hasClass('open')) {
      const height = 47;
      var count_submenu_li = $(this).find('ul > li').length;
      if (position.top >= 580) {
        var style = {
          'top': (position.top + 100) - (height * count_submenu_li),
          'height': height * count_submenu_li + 'px'
        }
        $(this).find('ul.open').css(style);
      } else {
        var style = {
          'top': position.top + 79,
          'height': height * count_submenu_li + 'px'
        }

        $(this).find('ul.open').css(style);
      }

    }
  }

});

$(document).on('mouseout', '#left-menu.small-left-menu li a', function (e) {
  $('#show-lable').css({
    'opacity': 0,
    'visibility': 'hidden'
  });
});

$(document).on('mouseout', '#left-menu.small-left-menu li.has-sub', function (e) {
  $(this).find('ul').css({
    'height': 0,
  });
});

$(window).resize(function () {
  windowResize();
});

$(window).on('load', function () {
  windowResize();
});

$('#left-menu li.has-sub > a').click(function () {
  var _this = $(this).parent();

  _this.find('ul').toggleClass('open');
  $(this).closest('li').toggleClass('rotate');

  _this.closest('#left-menu').find('.open').not(_this.find('ul')).removeClass('open');
  _this.closest('#left-menu').find('.rotate').not($(this).closest('li')).removeClass('rotate');
  _this.closest('#left-menu').find('ul').css('height', 0);

  if (_this.find('ul').hasClass('open')) {
    const height = 47;
    var count_submenu_li = _this.find('ul > li').length;
    _this.find('ul').css('height', height * count_submenu_li + 'px');
  }
});


function windowResize() {
  var width = $(window).width();
  if (width <= 992) {
    $('#left-menu').addClass('small-left-menu');
    $('#logo').addClass('small-left-menu p-0 pl-1');
  } else {
    $('#left-menu').removeClass('small-left-menu');
    $('#logo').removeClass('small-left-menu p-0 pl-1');
  }
}

$('input,textarea').keyup(() => {
  const firstname = $('#fName').val()
  const lastname = $('#lName').val()
  const emailname = $('#email').val()
  const contactno = $('#cno').val()
  const enquiry = $('#msg').val()

  if (!firstname || !lastname || !emailname || !contactno || !enquiry) {
    $("#modify-cols-btn").attr("disabled", true);
    $('#modify-cols-btn').css("cursor:not-allowed !important")
  }
  else {
    $("#modify-cols-btn").attr("disabled", false);
  }
  //  second form
  const firstname2 = $('#fName2').val()
  const lastname2 = $('#lName2').val()
  const emailname2 = $('#email2').val()
  const contactno2 = $('#cno2').val()
  const enquiry2 = $('#msg2').val()
  if (!firstname2 || !lastname2 || !emailname2 || !contactno2 || !enquiry2) {
    $("#modify-cols-btn2").attr("disabled", true);
    $('#modify-cols-btn2').css("cursor:not-allowed !important")

  }
  else {
    $("#modify-cols-btn2").attr("disabled", false);

  }
}
)


// for (syllabus list-item code)

var topic = $('#onedata').text()
var subtopic = (topic);
const myArray = subtopic.split(",");
var sum = ``
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  var data = `<li>${element}</li>`
  sum = sum + data

}
$('#onedata').html(sum)
$('#oneitem').html(sum)

function phonumber() {
  var input =document.getElementById("cno2,cno"),
      value = input.val(),
      length = value.length,
      inputCharacter = parseInt(value.slice(-1));

  if (!((length > 1 && inputCharacter >= 0 && inputCharacter <= 9) || (length === 1 && inputCharacter >= 7 && inputCharacter <= 9))) {
      $input.val(value.substring(0, length - 1));
   }
}



















