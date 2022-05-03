$(document).ready(function () {
    $("#next-quote").on("click", function (e) {
      e.preventDefault();
  
      var randomQuoteNumber = getRandomQuoteNumber();
      updateQuote(randomQuoteNumber);
    });
  
    var q = location.search.split("?q=")[1];
  
    if (q >= 0 && q < quotes.length) {
      updateQuote(q);
    } else {
      $("#next-quote").click();
    }
  });
  
  function updateQuote(quoteNumber) {
    var randomQuote = quotes[quoteNumber];
  
    $("#quote").html(randomQuote.quote);
    $("#author").html(randomQuote.author);
    $("#quote-box").removeClass().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass();
    });
  
   $("#share").attr("href", "https://twitter.com/intent/tweet?text=\"" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" carlcastanas" + quoteNumber);
  }
  
  function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
  }
  
  var quotes = [
    {"author": "Aristotle", "quote": "Knowing yourself is the beginning of all wisdom"},
    {"author": "Cesar Chavez", "quote": "Our language is the reflection of ourselves”"},
    {"author": "T.D. Jakes.", "quote": "If you always do what you’ve always done, you’ll always be where you’ve always been"},
    {"author": "John C. Maxwell.", "quote": "Reflective thinking turns experience into insight"},
    {"author": "Jerry Cortsen ", "quote": "Never forger to remain a student while you teach others"},
]