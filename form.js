$(document).ready(function(){
        console.log("dharemendra");
        $("#submit").click(function(){
         $("#id_fullname_show").html('<b>' + $("#id_fullname").val() + '</b>');
         $("#id_email_show").html('<b>' + $("#id_email").val() + '</b>');
         $("#id_phone_show").html('<b>' + $("#id_phone").val() + '</b>');
         $("#id_subject_shown").html('<b>' + $("#id_subject").val() + '</b>');
         $("#id_comments_show").html('<b>' + $("#id_comments").val() + '</b>');
         $("#input_data_show").show();
         $("#id_form").hide(); 
           var val = [];
             $(':radio:checked').each(function(i){
            val[i] = $(this).val();
            $("#id_checkbox_show").html('<b>' + val[i] + '</b>');
            });
        });

        $("#id_fullname").blur(function() {

            if($(this).val() == null || $(this).val() == undefined || $(this).val() == ""  )
            {
               alert("field is empty");
               return true;;
            }
            if (   $(this).val() != $(this).val().match('^[a-zA-Z]{3,25}$'))
            {
               alert("Insert the correct name");
               return true;
      
            }
      
         });

        
});


$(document).ready(function()
{
   $("#id_phone").blur(function() {

      if($(this).val() == null || $(this).val() == undefined || $(this).val() == ""  )
      {
         alert("field is empty");
         return true;

      }
      if ( $(this).val() != $(this).val().match('^[0-9]{10}$'))
      {
         alert("Insert the correct phone number ");
         return true;

      }

   });
});

$(document).ready(function()
{
   $("#id_email").blur(function() {

      if($(this).val() == null || $(this).val() == undefined || $(this).val() == ""  )
      {
         alert("Field is Empty");
         return true;

      }
      if ( $(this).val() != $(this).val().match('\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/'))
      {
         alert("Insert the correct Email id  ");
         return true;

      }

   });
});
$(document).ready(function()
{
   $("#id_subject").blur(function() {

      if($(this).val() == null || $(this).val() == undefined || $(this).val() == ""  )
      {
         alert("Field is Empty");
         return true;

      }
     

   });
});
$(document).ready(function()
{
   $("#id_comments").blur(function() {

      if($(this).val() == null || $(this).val() == undefined || $(this).val() == ""  )
      {
         alert("Field is Empty");
         return true;

    }
     

   });
});
