$(function(){
  $(".devourStatus")

  $(".create-form").on("submit",function(event){
    event.preventDefault();

    var newBurger = {
      burger_name:$("#bger").val().trim(),
      devoured:0
    };

    $.ajax("/api/burgers",{
      type:"POST",
      data:newBurger
    }).then(
      function(){
        console.log("created new burger");
        location.reload();
      }
    );
  });

});