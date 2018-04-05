document.addEventListener('DOMContentLoaded', function () {
    getTotalPrice();

}, false);

function getTotalPrice() {
    var ticketPrice = document.getElementsByClassName('price');
    
    for (var i = 0; i < ticketPrice.length; i++) {

        var ticketNumber = ticketPrice[i].getAttribute('number');
        var price = parseFloat(ticketPrice[i].getAttribute('price'));
        var priceType = ticketPrice[i].getAttribute('data');

        var totalPrice = calculateAll(price, priceType, ticketNumber);
        

        document.getElementsByClassName(priceType + '-price-total')[0].innerHTML = "EUR " + totalPrice.replace('.', ', ');

    }
}

function calculateAll(price, priceType, ticketNumber) {
    var passengers = document.getElementById('passengers').value;
    var trips = document.getElementById('trips').value;
    var days = document.getElementById('days').value;

    var requestedAmounOfTrips = (passengers * trips * days);  
    
    var numberOfTickets = Math.ceil(requestedAmounOfTrips/ticketNumber);

    
    if (priceType.indexOf('7day-ticket') !== -1) {
        if (days <= 7) {
            totalPrice = price * passengers;
        } else {
            totalPrice = price * passengers * Math.ceil(days/7);
        } 
    } else if (priceType.indexOf('small-group-day') !== -1) {
        if (passengers <= 5) {
            totalPrice = price * days;
        } else {
            totalPrice = price * days * Math.ceil(passengers/5);
        }
    } else if (priceType.indexOf('day-ticket') !== -1) {
        totalPrice = price * passengers * days;
    } else {
        totalPrice = numberOfTickets * price;
    }      
    
    
    return totalPrice.toFixed(2);
}
