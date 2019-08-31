function addMain(add) {
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
        </article>
        <article class="information">
        <h3 class="active" id="contact">contact</h3>
        <p>I would be thrilled to write, call, or video chat about any job opportunities. Feel free to contact me through any method below.</p>
        <ul id="contacts">
            <li>github</li>
            <li>linkedIn</li>
            <li>email</li>
            <li>skype</li>
    </article>
    <footer id="final-links">
        <ul id="contact-links">
            <li id="github-link"><a href="https://github.com/ldail"><img src="github.png" alt="GitHub" /></a></li>
            <li id="linkedin-link"><a href="#"><img src="linkedin.png" alt="LinkedIn" /></a></li>
            <li id="email-link"><a href="mailto:leondailofficial@gmail.com"><img src="email.png" alt="Email" /></a></li>
        </ul>
    </footer>`
    );
    $('main').fadeIn();
    $('.inactive').text('projects');
  }
}

function fillNav(add) {
  if (!add) { //first page
    $('nav').html(
      `<ul>
      <li><a href="#bio">bio</a></li>
      <li><a href="#projects">projects</a></li>
      <li><a href="contact">contact</a></li>
      </ul>`);
  }
  else {
    $('nav').html(
      `<ul>
        <li><a href="#bio">bio</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="contact">contact</a></li>
      </ul>`);
  }
}

function showSecondPage() {
  $('h2').html('');
  fillNav();
  addMain('add');
  $('*').removeClass('first').addClass('second');
}

function showFirstPage() {
  $('h1').html('leon<span>dail</span>');
  $('h2').html('full-stack <span>web developer</span>');
  fillNav('add');
  addMain();
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
      }
    }
    else {
      showFirstPage();
    }
  });
  $('nav').on('click','a', function(e) {
    e.preventDefault();
    let href = $(e.currentTarget).attr('href');
    showSecondPage();
    let name = $(href);
    $('html,body').animate({scrollTop: name.offset().top-100},'slow');
  });
  $('h1').on('click', e => showFirstPage());
}

$(ready);