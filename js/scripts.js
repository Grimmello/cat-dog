$(function() {
  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click (function() {
      $(this).remove();
    });
  });

  $("button#woof").click(function() {
    $("ul#dog").prepend("<li>Woof woof!</li>");
    $("ul#cat").prepend("<li>*hisses*</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#ruff").click(function() {
    $("ul#dog").prepend("<li>RUFF RUFF RUFF RUFF RUFF!</li>");
    $("ul#cat").prepend("<li>*ignores dog*</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
