function addMain(add) {
  $('main').empty();
  $('.inactive').empty();
  if (add) {
    $('main').html(`
        <article class="information">
            <h3 class="active" id="bio">bio</h3>
            <p class="bold">Hi! My name is Leon, and I'm a full-stack web developer.</p>
            <p>I find myself most proud when I am able to solve a challenging problem. I am confident knowing that I can look at a question from all sides and execute the best solution.</p>
            <p>My experience with HTML, CSS, and coding goes back many years. In the past, I was the designer and administrator of small, hobby websites, and taught myself how to manage a community and all its coding needs (through trial-and-error, of course). I crafted many programs using a C-type language, and taught myself C++ as well. Now, I am exploring every avenue of JavaScript to further my abilities as a web developer.</p>
            <p>My biggest passions are designing and creating games; I am always extremely eager to piece together board games, pen and paper games, and internet games alike and test my creativity. Another outlet for my creativity is writing stories!</p>
                <ul class="skills">
                    <li class="skill-html"><img src="images/html5.png" alt="HTML 5" /></li>
                    <li class="skill-css"><img src="images/css.png" alt="CSS 3" /></li>
                    <li class="skill-javascript"><img src="images/javascript.png" alt="JavaScript" /></li>
                    <li class="skill-jQuery"><img src="images/jquery.png" alt="jQuery" /></li>
                    <li class="skill-api"><img src="images/api.png" alt="API" /></li>
                </ul>
        </article>
        <article class="information">
            <h3 class="active" id="projects">projects</h3>


            <div class="project-info">
                <div class="project-info-text">
                    <h4 class="project-name">Your Bookmarks</h4>
                    <h5 class="project-description">Keep up to tabs with your favorite websites</h5>
                    <ul class="view-code">
                        <li class="github-code"><a href="https://github.com/thinkful-ei-gecko/leon-dail-bookmarks-app"><img src="images/github-code.png" alt="View on Github" /></a></li>
                        <li class="deploy-code"><a href="https://thinkful-ei-gecko.github.io/leon-dail-bookmarks-app/"><img src="images/eye.png" alt="View Deployment" /></a></li>
                    </ul>
                    <p>This web application allows a user to keep track of their favorite websites. The user can add, delete, and edit the bookmarked tabs, as well as display them by ranking.</p>
                    <ul class="skills">
                        <li class="skill-html"><img src="images/html5.png" alt="HTML 5" /></li>
                        <li class="skill-css"><img src="images/css.png" alt="CSS 3" /></li>
                        <li class="skill-javascript"><img src="images/javascript.png" alt="JavaScript" /></li>
                        <li class="skill-jQuery"><img src="images/jquery.png" alt="jQuery" /></li>
                        <li class="skill-api"><img src="images/api.png" alt="API" /></li>
                    </ul>
                </div>
                <a href="https://thinkful-ei-gecko.github.io/leon-dail-bookmarks-app/" class="project-image-link"><img src="images/bookmark-app.png" alt="Your Bookmarks Screenshot" class="project-image" /></a>
            </div>

            <div class="divider"></div>

            <div class="project-info">
                <div class="project-info-text">
                    <h4 class="project-name">Quiz Application</h4>
                    <h5 class="project-description">Test your knowledge about the quizmaker's choice!</h5>
                    <ul class="view-code">
                        <li class="github-code"><a href="https://github.com/thinkful-ei-gecko/JamesJ-Leon-quiz-app"><img src="images/github-code.png" alt="View on Github" /></a></li>
                        <li class="deploy-code"><a href="https://thinkful-ei-gecko.github.io/JamesJ-Leon-quiz-app/"><img src="images/eye.png" alt="View Deployment" /></a></li>
                    </ul>
                    <p>Although originally designed as a small and fun Game of Thrones quiz application, the questions and styles can be ported to any topic by editing the database. This application is fully robust, and the contents can be easily changed for a variety of quizzes.</p>
                    <ul class="skills">
                        <li class="skill-html"><img src="images/html5.png" alt="HTML 5" /></li>
                        <li class="skill-css"><img src="images/css.png" alt="CSS 3" /></li>
                        <li class="skill-javascript"><img src="images/javascript.png" alt="JavaScript" /></li>
                        <li class="skill-jQuery"><img src="images/jquery.png" alt="jQuery" /></li>
                    </ul>
                </div>
                <a href="https://thinkful-ei-gecko.github.io/JamesJ-Leon-quiz-app/" class="project-image-link"><img src="images/got-app.png" alt="Quiz Application Screenshot" class="project-image" /></a>
            </div>
        </article>
        <article class="information">
        <h3 class="active" id="contact">contact</h3>
        <p>I would be thrilled to write, call, or video chat about any job opportunities. Feel free to contact me through any method below.</p>
    </article>
    <footer id="final-links">
        <ul id="contact-links">
            <li id="github-link"><a href="https://github.com/ldail"><img src="images/github.png" alt="GitHub" /></a></li>
            <li id="linkedin-link"><a href="#"><img src="images/linkedin.png" alt="LinkedIn" /></a></li>
            <li id="email-link"><a href="mailto:leondailofficial@gmail.com"><img src="images/email.png" alt="Email" /></a></li>
        </ul>
    <img src="images/easteregg.png" id="easter-egg" alt="easter egg" />
    </footer>
    <div id="easter-div">
    <h5>You found the secret easter egg!</h5>
    <h6>Click below to activate!</h6>
    <img src="images/easteregg.png" id="second-easter-egg" alt="easter egg" />
    </div>`
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
      <li><a href="#contact">contact</a></li>
      </ul>`);
  }
  else {
    $('nav').html(
      `<ul>
        <li><a href="#bio">bio</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">contact</a></li>
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
    if ($('body').hasClass('first')) {
      showSecondPage();
    }
  });
  $('nav').on('click','a', function(e) {
    e.preventDefault();
    let href = $(e.currentTarget).attr('href');
    showSecondPage();
    let name = $(href);
    $('html,body').animate({scrollTop: name.offset().top-100},'slow');
  });
  $('body').on('click', 'h1', e => showFirstPage());
  $('body').on('click', '#easter-egg', function(e) {
    $('#easter-div').fadeIn('slow');
    $('#second-easter-egg').css('transform', 'rotate(1080deg)').css('transition', '10s all');
  });
  $('body').on('click', '#second-easter-egg', e => {
    $('*').css('transform', 'rotate(360deg)').css('transition', '10s all');
    $('#easter-div').fadeOut();
    setTimeout(function() {   //calls click event after a certain time
      $('*').css('transform', '').css('transition', '.5s all');
      showFirstPage();
    }, 10000);
  });
}

$(ready);