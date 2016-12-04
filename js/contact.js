  $(document).ready(function(){
    $('.contact-btn').click(function(e) {
      $.ajax({
        url: "contact.php",
        data:
        {
         name: $('input[name="name"]').val(),
         email: $('input[name="email"]').val(),
         message: $('#message').val(),
        },
        type: "POST",
        dataType: "json",
        success: function (data)
        {
          if (data.status == 1)
          {
            swal("Success", data.message, "success");
          }
          else if(data.status == 0)
          {
            swal("Oops!", data.message, "error");
          }
        },

        error: function (xhr, status)
        {
          swal("Oops!", 'We\'ve encountered an error', "error");
        }

      });
      e.preventDefault();
    });
  });
