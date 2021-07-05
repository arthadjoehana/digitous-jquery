$(function (){
    $(".btn").click(function (){
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function(data, statuts, response) {
                $("#country").html(data[0].name)
                $("#capital").html(data[0].capital)
                console.log(data[0].name);
                console.log(data[0].capital);
            }
        });
    });
});




