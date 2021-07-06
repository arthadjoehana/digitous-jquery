$(".btn").click(()=>{
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: (data)=>{
            $("#country").html(data[0].name)
            $("#capital").html(data[0].capital)
        }
    });
});




