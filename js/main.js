
$('#projektlink').click(
    function (){
        $('#kontakt').hide();
        $('#projekte').show();
    }
)

$('#logoa').click(
    function (){
        $('#kontakt').hide();
        $('#projekte').show();
    }
)

$('#kontaktlink').click(
    function (){
        $('#projekte').hide();
        $('#kontakt').show();
    }
)

$('#sendemail').click(
    function (e){
        e.preventDefault();
        sendEmail();
    }
)

function sendEmail() {
    var name = $("#enquirer");
    var email = $("#email");
    var subject = $("#subject");
    var message = $("#message");

    if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(message)) {
        $.ajax({
           url: 'php/sendEmail.php',
           method: 'POST',
           dataType: 'json',
           data: {
               name: name.val(),
               email: email.val(),
               subject: subject.val(),
               body: message.val()
           }, success: function (response) {
            console.log(response.status);
               if(response.status == "success"){
                $('#kontaktform')[0].reset();
                $('#emailsendModal').modal('toggle'); 
               } else {
                $('#emailmodalbody').html('Leider konnte Ihre Email nicht verschickt werden.');
               }
                 
           },
            error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText);
            console.log(jqXHR + textStatus +  errorThrown);
            $('#emailmodalbody').html('Leider konnte Ihre Email nicht verschickt werden.');

          }
           
        });
    } 
}

function isNotEmpty(caller) {
    if (caller.val() == "") {
        caller.css('border', '1px solid red');
        return false;
    } else
        caller.css('border', '');
    return true;
} 


