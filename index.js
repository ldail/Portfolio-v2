function addBio(add) {
  $('main').empty();
  $('.inactive').empty();
  if (add) {
    $('main').html(`
        <article class="information">
            <h3 class="active" id="bio">bio</h3>
            <p class="bold">Hi! My name is Leon, and I'm a full-stack web developer.</p>
            <p>I find myself most proud when I am able to solve a challenging problem. I am confident knowing that I can look at a question from all sides and execute the best solution.</p>
            <p>I have many years experience working with HTML and CSS. In the past, I was the designer and administrator of small, hobby websites, and taught myself how to keep a website running.</p>
                <ul id="skills">
                    <li id="skill-html"><img src="html5.png" alt="HTML 5" /></li>
                    <li id="skill-css"><img src="css.png" alt="CSS 3" /></li>
                    <li id="skill-javascript"><img src="javascript.png" alt="JavaScript" /></li>
                    <li id="skill-jQuery"><img src="jquery.png" alt="jQuery" /></li>
                    <li id="skill-api"><img src="api.png" alt="API" /></li>
                </ul>
        </article>
        <article class="information">
            <h3 class="active" id="projects">projects</h3>
            <p class="bold">Hi! My name is Leon, and I'm a full-stack web developer.</p>
            <p>Cras vitae augue volutpat risus gravida tincidunt. Suspendisse et tincidunt lorem. Praesent molestie mattis sem, rhoncus fermentum mi placerat ut. Etiam eu sapien lacus. Donec pretium cursus nisi, eu dictum purus efficitur quis. </p>
        </article>`
    );
    $('main').fadeIn();
    $('.inactive').text('projects');
  }
}

function fillNav(add) {
  if (!add) { //first page
    $('nav').html(
      `<ul>
        <li>bio</li>
        <li>projects</li>
        <li>contact</li>
      </ul>`);
  }
  else {
    $('nav').html(
      `<ul>
        <li><a href="#">bio</a></li>
        <li><a href="#">projects</a></li>
        <li>contact</li>
      </ul>`);
  }
}

function showThirdPage() {
  $('h2').html('');
  fillNav();
  addProjects('add');
  $('*').removeClass('first').addClass('second');
}

function showSecondPage() {
  $('h2').html('');
  fillNav();
  addBio('add');
  $('*').removeClass('first').addClass('second');
}

function showFirstPage() {
  $('h1').html('leon<span>dail</span>');
  $('h2').html('full-stack <span>web developer</span>');
  fillNav('add');
  addBio();
  $('*').removeClass('second').addClass('first');
}


function ready() {
  $('*').addClass('first');
  showFirstPage();
  console.log($(window).scrollTop());
  $(window).scroll( function() {
    if ($(this).scrollTop() > 0) {
      if ($('body').hasClass('first')) {
        showSecondPage();
        console.log($(this).scrollTop());
      }
    }
    else {
      showFirstPage();
    }
  });
  $('nav').on('click','a', function(e) {
    $(this).scrollView();
  });
}

$(ready);

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}