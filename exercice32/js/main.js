$(".btn").click(()=>{
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: (data)=>{
            console.log(data[0].name);
            console.log(data[0].capital);
        }
    });
});
