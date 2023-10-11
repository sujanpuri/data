function jaadu(){
    let url = "https://ipapi.co/json";
    fetch(url)
        .then(response =>{
            return response.json();
        })
        .then(data=>{
            document.querySelector(".p").innerHTML = 
                " : &nbsp "        + data.country_name
                + "<br>: &nbsp; " + data.city
                + "<br>: &nbsp; " + data.country_calling_code
                + "<br>: &nbsp; " + data.country_capital
                + "<br>: &nbsp; " + data.currency
                + "<br>: &nbsp; " + data.currency_name
                + "<br>: &nbsp; " + data.ip
                + "<br>: &nbsp; " + data.org
                + "<br>: &nbsp; " + data.region
                + "<br>: &nbsp; " + data.timezone
                + "<br>: &nbsp; " + data.utc_offset
                + "<br>: &nbsp; " + data.version;
        })
}
