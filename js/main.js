function calculateAll(price, priceType) {
    var passengers = document.getElementById('passengers').value;
    var trips = document.getElementById('trips').value;
    var days = document.getElementById('days').value;

    var requestedAmounOfTrips = (passengers * trips * days);  
    
    var totalPrice = (requestedAmounOfTrips * price);      

    // 
    // рахуємо, скільки нам потрібно зробити покупок по 4 квитки
    // var numberOfTickets = Math.ceil(requestedAmounOfTrips/numberOfTrips);

    // рахуємо залишок квитків
    // var remainingTiket = (numberOfTickets * numberOfTrips) - requestedAmounOfTrips;
    if  (['four-ride-short-trip-ticket'].contains(priceType)) {
        totalPrice /= 4;
    } 
        if  (['four-ride-short-trip-ticket', 'four-ride-single-ticket-ab', 'four-ride-single-ticket-bc', 'four-ride-single-ticket-abc'].contains(priceType)) {
           totalPrice /= 4;
           if (totalPrice % 4 == 0) {
               return totalPrice;
           } else {
               return Math.ceil(totalPrice); 
           }
       } 

       if  (['four-ride-short-trip-ticket', 'four-ride-single-ticket-ab', 'four-ride-single-ticket-bc', 'four-ride-single-ticket-abc'].contains(priceType)) {
           Math.ceil(totalPrice);
           if (incomingData % 4 == 0) {
               return totalPrice;
           } else {
               return Math.ceil(totalPrice); 
               return totalPrice * 2;
           }
       } 


            if (['four-ride-short-trip-ticket', 'four-ride-single-ticket-ab', 'four-ride-single-ticket-bc', 'four-ride-single-ticket-abc'].contains(priceType)) {
        
                function getRemainingTickets(requestedAmounOfTrips) {
                    for (var i; i < length.document.getElementsByClassName('four-ride-single-ticket'); i++) {
                        var td2 = tr2[i].getElementsByTagName('td');
        
                        var value = parseFloat(td2[2].innerHTML) / parseFloat(td1[1].innerHTML)
        
                        td2[2].innerHTML = value;
        
                        var remainingTickets = requestedAmounOfTrips % 4;
                        
                        document.getElementsByClassName('remaining-tickets-').innerHTML = remainingTickets;
        
                    }
        
                }
        
            }
            
        return totalPrice.toFixed(2);

        }


function getTotalPrice() {
    var prices = document.getElementsByClassName('price');
    
    for (var i = 0; i < prices.length; i++) {

        var price = parseFloat(prices[i].getAttribute('price'));
        var priceType = prices[i].getAttribute('data');

        var totalPrice = calculateAll(price, priceType);  

        document.getElementsByClassName(priceType + '-price-total')[0].innerHTML = totalPrice;
        
    }
}

document.addEventListener('DOMContentLoaded', function () {
    getTotalPrice();
}, false);

Array.prototype.contains = function (obj) {
    return this.indexOf(obj) > -1;
};