(function () {
  "use strict";
  var nav = document.querySelectorAll(".nv-lk > a");
  const ico = document.getElementById("ico");
  const tg = document.getElementById("toggle");
  const nv = document.getElementById("nav");
  $('#logo').on('click',function(){
    window.location.replace('index.html');
  })
  tg.addEventListener("click", function () {
    this.classList.toggle("open");
    nv.classList.toggle("active");
    ico.classList.toggle("active");
  });
  $(document).on("click", "div[data-target^=info-]", function () {
    var tg = $(this).data("target");
    $(this).find(".ico").toggleClass("active");
    $("#" + tg).toggleClass("active");
  });
  draw();
  for (var k = 0; k < nav.length; k++) {
    var nv1 = nav[k];
    nv1.addEventListener("click", function (e) {
      e.preventDefault;
    });
  }

  function footer() {
    var html =
      '<div class="d-flex" id="ft-ct"><div><a href="index.html">RachelHCoder.com</a></div><div><a href="contact.html">Contact</a></div></div>';
    $("#ft").html(html);
  }
  function draw() {
    var proj = data();
    var html = "";
    for (let i = 0; i < proj.length; i++) {
      var itm = proj[i];
      html += '<div class="col-6"><div class="card">';
      html +=
        '<div class="img"><img src="assets/images/' +
        itm.img +
        '" class="card-img-top" alt="' +
        itm.title +
        '"></div>';
      html +=
        '<div class="card-body"><div data-target="info-' +
        itm.id +
        '"><h5 class="card-title"><span class="ico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3f5efb" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span>' +
        itm.title +
        '</h5><div id="info-' +
        itm.id +
        '"><p class="card-text">' +
        itm.desc +
        '</p><a href="' +
        itm.link +
        '" class="btn custom" target="_blank">Launch Codepen</a></div></div>';
      html += "</div></div></div>";
    }
    $("#codepens").html(html);
    //	navigation();
    footer();
  }

  function data() {
    var dat = [
      {
        title: "Modal Pop-ups Based on Message",
        link: "https://codepen.io/rachelCoder/full/bGdoGVO",
        desc:
          "The purpose of this was to create my own modal design but also to apply a specific message to the user based on what action occurs.",
        img: "pop-up.jpg",
        id: 1,
        display: true,
      },
      {
        title: "Header with Hover",
        link: "https://codepen.io/rachelCoder/full/NWqPJej",
        desc:
          "The purpose of this was to create a responsive layout with an interactive header.  The header is the main element of the design and how it responds to both a hover but also as the window size decreases.",
        img: "hover-header.jpg",
        id: 2,
        display: true,
      },
      {
        title: "Header Challenge with CODEPEN",
        link: "https://codepen.io/rachelCoder/full/povXawa",
        desc:
          "The purpose of this challenge was to take a plain header and transform it to be more visually interesting.  I opted to add the user log in as its own slide down menu to allow for more space.  The menu slides down with a slight bounce as well!  This design is also responsive and looks great on mobile as well. The navigation for this site works and the content also load in a fun and animated way. ",
        img: "header.png",
        id: 3,
        display: true,
      },
      {
        title: "e-Newsletter",
        link: "https://codepen.io/rachelCoder/full/bGNJXeV",
        desc:
          "The purpose of this challenge was to recreate an online newsletter.  This is not email ready but it could easily be translated to an html email that works across email applications. This newsletter is mobile responsive. ",
        img: "newsletter.jpg",
        id: 4,
        display: true,
      },
      {
        title: "Landing Design",
        link: "https://codepen.io/rachelCoder/full/OJPdvZV",
        desc:
          "The purpose of this challenge was to a fun layout that has a primary animated background that shows both image and text.  The navigation uses an animated arrow hover to indicate visual selection.   ",
        img: "landing.jpg",
        id: 5,
        display: true,
      },
      {
        title: "Theme Selector",
        link: "https://codepen.io/rachelCoder/full/GRgYroq",
        desc:
          "The purpose of this challenge was to create a slant design, but I added in the extra functionality of testing different theme colors.  Another phase to this, is to add in the ability to actually save that theme.  ",
        img: "theme.jpg",
        id: 6,
        display: true,
      },
      {
        title: "Full Page Navigation",
        link: "https://codepen.io/rachelCoder/full/KKweQZe",
        desc:
          "As a part of the January 2020 CodePen Challenge to create a full page nav layout, I created this design.  The nav is also responsive and uses icons to identify when in a smaller mobile state. ",
        img: "fp-nav.jpg",
        id: 7,
        display: true,
      },
      {
        title: "Pure CSS Drawing",
        link: "https://codepen.io/rachelCoder/full/GRgQpyR",
        desc:
          "I love this. I found an online graphic of a male contact and I recreated it using SASS and some divs.  ",
        img: "male-icon.jpg",
        id: 8,
        display: true,
      },
      {
        title: "My Interactive Career Timeline",
        link: "https://codepen.io/rachelCoder/full/RwNjJBd",
        desc:
          "For fun I created an interactive timeline showing my web career and education. ",
        img: "timeline.jpg",
        id: 9,
        display: true,
      },
      {
        title: "Custom Progress Bar",
        link: "https://codepen.io/rachelCoder/full/qBEVEor",
        desc:
          "As a part of developing my skills I created a simple animated progress bar.  ",
        img: "progress.png",
        id: 10,
        display: true,
      },
      {
        title: "Grid Layout",
        link: "https://codepen.io/rachelCoder/full/mdyBbzy",
        desc: "Utilized css grid to create a layout with images.  ",
        img: "grid.jpg",
        id: 11,
        display: true,
      },
      {
        title: "Contact Form",
        link: "https://codepen.io/rachelCoder/full/mdymdWL",
        desc:
          "Created a fun and interactive contact form that has required fields and brings the user through a fake submission to show usability. ",
        img: "contact.jpg",
        id: 12,
        display: true,
      },
      {
        title: "Satisfaction Survey",
        link: "https://codepen.io/rachelCoder/full/ZEYeMpJ",
        desc:
          "Created a fun and interactive smiley face rating survey that animates in and shows the basic interactions of a satisfaction survey.",
        img: "survey.jpg",
        id: 13,
        display: true,
      },
      {
        title: "Happy Place",
        link: "https://codepen.io/rachelCoder/full/dyPvPdx",
        desc:
          "Created a fun and interactive sun / moon icon that displays pending the button you select.  I love how this turned  out.  I used css to draw the icons.",
        img: "happy.jpg",
        id: 14,
        display: true,
      },

      {
        title: "CSS Icon Drawing",
        link: "https://codepen.io/rachelCoder/full/abzpQxG",
        desc:
          "Created a fun SASS drawing using only divs and css.  This project also models an icon of a person contact that I found online and I recreated it with code. ",
        img: "female-icon.jpg",
        id: 15,
        display: true,
      },
      {
        title: "Alphabet Game",
        link: "https://codepen.io/rachelCoder/full/xxbGVEN",
        desc:
          "Created a very simple alphabet game using bootstrap, css, and javascript. ",
        img: "alpha.jpg",
        id: 16,
        display: true,
      },
      {
        title: "Random Color Generator",
        link: "https://codepen.io/rachelCoder/full/ExaKGPj",
        desc:
          "Created a very simple color randomizer that swaps out colors on click. ",
        img: "rando.jpg",
        id: 17,
        display: true,
      },
      {
        title: "Tip Calculator",
        link: "https://codepen.io/rachelCoder/full/PowqyvJ",
        desc:
          "Calculator takes in the total of the bill before tax, and adds in tax.  It lets you select your tip as well and displays a resulting page of the final amounts.  This project I used bootstrap, javascript, css, and jquery.",
        img: "calc.png",
        id: 18,
        display: true,
      },
    ];
    return dat;
  }
})();
