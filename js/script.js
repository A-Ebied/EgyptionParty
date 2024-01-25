$(".btn-open").click(function () {
  if ($(".btn-open").css("marginLeft") == "0px") {
    $(".btn-open").animate({ marginLeft: `250px` }, 1000);
    $(".sideBar").animate({ left: `0px` }, 1000);
  } else {
    $(".btn-open").animate({ marginLeft: `0px` }, 1000);
    $(".sideBar").animate({ left: `-250px` }, 1000);
  }
});

// $(".btn-open").click(function () {
//   $(".btn-open").animate({ marginLeft: `250px` }, 1000);
//   $(".sideBar").animate({ left: `0px` }, 1000);
// });

$(".btn-close").click(function () {
  $(".btn-open").animate({ marginLeft: `0px` }, 1000);
  $(".sideBar").animate({ left: `-250px` }, 1000);
});

$(".accordion__heading").click(function () {
  if ($(".accordion__body").css("display") == "none")
    $(".accordion__body").css({ display: "block" });
  else {
    $(".accordion__body").css({ display: "none" });
  }
});

$(function () {
  var max = 100;
  $("textarea").keyup(function () {
    var length = $(this).val().length;
    var character = max - length;
    console.log(character);
    if (character <= 0) {
      $("#char").text("your available character finished");
    } else {
      $("#char").text(character + " Characyer Reamining");
    }
  });
});

// $("a[href^='#']").click(function (e) {
//   let linkHref = $("e.target").attr("href");
//   let sectionOffset = $(linkHref).offset().top;
//   $("html,body").animate({ scrollTop: sectionOffset }, 2000);
// });

// Count

function countdown() {
  var now = new Date();
  var eventDate = new Date(2022, 12, 28);

  var currentTiime = now.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime - currentTiime;

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24) - 30;

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
  document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";

  document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
  document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
  document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";

  setTimeout(countdown, 1000);
}

countdown();
