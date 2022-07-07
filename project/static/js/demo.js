

function displayDivDemo() {
  document.getElementById('form2').style.display = 'block';
}

$(document).ready(function(){
  $(".next").click(function(){
    $(this).parent(".form-box").removeClass("active");
    $(this).parent(".form-box").next().addClass("active");

  });
  $(".back").click(function(){
    $(this).parents(".form-box").removeClass("active");
    $(this).parents(".form-box").prev().addClass("active");

  });


  $(document).ready(function () {
    
    


    // $("#submitButton").click(function(ev) {
    //   var form = $("#form1").serialize();
    //   console.log("test")
    //   $.ajax({
    //     url: 'https://2ki73weiid.execute-api.ca-central-1.amazonaws.com/demo-form/demo-for-form',
    //     type: 'POST',
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     data: form,
    //     success: function(response) 
    //     {
    //         console.log(response);
    //     }
    //  });

    // });
  
  })

});

// $(".next").click(function(){
//   form_box = $(this).parent().parent()
//   stream = $(this).parent().find("#stream")
//   if (stream.length !=0) 
//   {data.push(stream.val())}
//   form_box.removeClass("active");
//   form_box.next().addClass("active");