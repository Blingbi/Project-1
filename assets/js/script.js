$(document).ready(function (){
  var stockContainer = document.getElementById('stockData');
  var cryptoContainer =  document.getElementById('cryptoData')
  var fetchButton = document.getElementById('fetch-button');
  var today = new Date();
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate()-1)
  var lastWeek = new Date();
  lastWeek.setDate(today.getDate()-7);
  var twoWeeks= new Date()
  twoWeeks.setDate(today.getDate()-14)
  var targets = [yesterday,lastWeek,twoWeeks]
  
  $(".stockBtn").on("click", function () {
    var stockName = $(this).siblings(".description").val();
    targets.forEach(target =>{
      var dd = String(target.getDate()).padStart(2, '0');
      var mm = String(target.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = target.getFullYear();
      var dayTitle = yyyy + '-' + mm + '-' + dd;
      var requestUrl = 'https://api.polygon.io/v1/open-close/'+stockName.toUpperCase()+'/'+dayTitle+'?adjusted=true&apiKey=x9aOGMvupupwhHuYUerXqh9LBf1gm1HN';
  
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
      stockOpen.textContent = "Open: "+data.open;
      stockClose.textContent = "Close: "+data.close

      //Appending the dynamically generated html to the div associated with the id="users"
      //Append will attach the element as the bottom most child.
      stockContainer.append(stockName);
      stockContainer.append(stockOpen);
      stockContainer.append(stockClose);
      })
    })
  
  })
 
  
  $(".cryptoBtn").on("click", function () {
    var cryptoName = $(this).siblings(".description").val();
    targets.forEach( target => {
      var dd = String(target.getDate()).padStart(2, '0');
      var mm = String(target.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var dayTitle = yyyy + '-' + mm + '-' + dd;
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
})













