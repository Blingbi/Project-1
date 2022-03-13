var stockContainer = document.getElementById('stockData');
var cryptoContainer =  document.getElementById('cryptoData')
var fetchButton = document.getElementById('fetch-button');

var today = new Date();
var yesterday = new Date(today);
yesterday.setDate(yesterday.getDate()-1)
var dd = String(yesterday.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
document.write(today);

    $(document).ready(function () {
      $(".stockBtn").on("click", function () {
        
            // Get nearby values of the description in JQuery
            var stockName = $(this).siblings(".description").val();
          var requestUrl = 'https://api.polygon.io/v3/trades/'+stockName.toUpperCase()+'?adjusted=true&apiKey=x9aOGMvupupwhHuYUerXqh9LBf1gm1HN';
          
          fetch(requestUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              //Using console.log to examine the data
              console.log(data);
              console.log(data);
            
                console.log("looping");
                var stockName = document.createElement('h3');
                var stockOpen = document.createElement('p');
                var stockClose = document.createElement('p')

              //Setting the text of the h3 element and p element.
              stockName.textContent = data.symbol +" "+ today;
              stockOpen.textContent = "Open: "+data.results.price;
              stockClose.textContent = "Close: ";

              //Appending the dynamically generated html to the div associated with the id="users"
              //Append will attach the element as the bottom most child.
              stockContainer.append(stockName);
              stockContainer.append(stockOpen);
              stockContainer.append(stockClose);
              })
            })
      })
      $(document).ready(function () {
        $(".cryptoBtn").on("click", function () {
          
              // Get nearby values of the description in JQuery
              var cryptoName = $(this).siblings(".description").val();
            var requestUrl = 'https://rest.coinapi.io/v1/exchangerate/'+cryptoName.toUpperCase()+'/USD?apiKey=C4D62BF3-1B0B-45D4-9A3F-48DC7D801132';
            fetch(requestUrl)
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                //Using console.log to examine the data
                console.log(data);
                console.log(data);
              
                  console.log("looping");
                  var cryptoName = document.createElement('h3');
                  var cryptoValue = document.createElement('p');
  
                //Setting the text of the h3 element and p element.
                cryptoName.textContent = data.asset_id_base +" "+ today;
                cryptoValue.textContent = "Current Value: "+data.rate;
               
  
                //Appending the dynamically generated html to the div associated with the id="users"
                //Append will attach the element as the bottom most child.
                cryptoContainer.append(cryptoName);
                cryptoContainer.append(cryptoValue);
                })
              })
        })
