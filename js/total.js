document.getElementById("confirm").addEventListener('click', function(){
    const coverPrice = document.getElementById("price-cover");
    const coverPriceString = coverPrice.innerText;
    const coverAmmount = parseFloat(coverPriceString);

    const phonePrice = document.getElementById("price-phone");
    const phonePriceString = phonePrice.innerText;
    const phoneAmmount = parseFloat(phonePriceString);

    const subtotal = document.getElementById("sub-total");
    const subtotalString = subtotal.innerText;
    const subtotalAmmount = parseFloat(subtotalString);

    newSubtotal = coverAmmount + phoneAmmount;
    subtotal.innerText = newSubtotal

    
    const total = document.getElementById("total");
    const totalString = total.innerText;

    const taxTotal =subtotalAmmount * 0.02;
    newTotal = subtotalAmmount + taxTotal ;
    total.innerText = newTotal
})