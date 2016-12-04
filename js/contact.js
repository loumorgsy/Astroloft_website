  $(document).ready(function(){
    $('.contact-btn').click(function(e) {
      $.ajax({
        url: "contact.php",
        data:
        {
         name: $('input[name="contactname"]').val(),
         email: $('input[name="email"]').val(),
         message: $('#message').val(),
        },
        type: "POST",
        dataType: "json",
        success: function (data)
        {
          if (data.status == 1)
          {
            alert(data.message);
          }
          else if(data.status == 0)
          {
            alert(data.message)
          }
        },

        error: function (xhr, status)
        {
          alert('There was an error');
        }

      });
      e.preventDefault();
    });
  });
