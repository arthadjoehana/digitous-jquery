$(".btn").click(()=>{
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/' + $("input").val(),
        success: (data)=>{
            $("#country").html(data[0].name)
            $("#capital").html(data[0].capital)
        }
    })
})