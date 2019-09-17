
//primary webpage with data
function showSecondPage() {
  $('h2').html('');
  $('header h2').hide();
  $('main').show();
  $('*').removeClass('first').addClass('second');
}

//initial loading page
function showFirstPage() {
  $('main').hide();
  $('*').removeClass('second').addClass('first');
}

function eventListeners() {

  //load second page when the user scrolls
  $(window).scroll( function() {
    if ($('body').hasClass('first')) {
      showSecondPage();
    }
  });

  //soft scroll to navigation location
  $('nav').on('click','a', function(e) {
    e.preventDefault();
    let href = $(e.currentTarget).attr('href');
    showSecondPage();
    let name = $(href);
    $('html,body').animate({scrollTop: name.offset().top-100},'slow');
  });

  //reload takes them back the user back to the loading page
  if (window.performance) {
    if (performance.navigation.type === 1) {
      window.scrollTo(0,0);
    }
  }
  //return to loading page
  //$('body').on('click', 'h1', e => showFirstPage());

  //easter egg listeners
//   $('body').on('click', '#easter-egg', function(e) {
//     $('#easter-div').fadeIn('slow');
//     $('#second-easter-egg').css('transform', 'rotate(1080deg)').css('transition', '10s all');
//   });
//   $('body').on('click', '#second-easter-egg', e => {
//     $('*').css('transform', 'rotate(360deg)').css('transition', '10s all');
//     $('#easter-div').fadeOut();
//     setTimeout(function() {   //calls click event after a certain time
//       $('*').css('transform', '').css('transition', '.5s all');
//       showFirstPage();
//     }, 10000);
//   });
}

function ready() {
  $('*').addClass('first');
  showFirstPage();
  eventListeners();
}

$(ready);