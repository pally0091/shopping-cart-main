document.getElementById("btn-phone-minus").addEventListener('click', function(){
    const phoneQuantity = document.getElementById("input-phone");
    const phoneQuantityString = phoneQuantity.value;
    const phoneQuantityAmmount = parseFloat(phoneQuantityString);

    phoneQuantity.value = phoneQuantityAmmount - 1;
    const newPhoneQuantity =phoneQuantityAmmount - 1;

    const pricePhone = document.getElementById("price-phone");
    const pricePhoneString = pricePhone.innerText;
    // const phonePrice = parseFloat(pricePhoneString);

    const totalPhonePrice = 1219 * newPhoneQuantity;
    
    pricePhone.innerText = totalPhonePrice
})

document.getElementById("btn-phone-plus").addEventListener('click', function(){
    const phoneQuantity = document.getElementById("input-phone");
    const phoneQuantityString = phoneQuantity.value;
    const phoneQuantityAmmount = parseFloat(phoneQuantityString);

    phoneQuantity.value = phoneQuantityAmmount + 1;
    const newPhoneQuantity =phoneQuantityAmmount + 1;

    const pricePhone = document.getElementById("price-phone");
    const pricePhoneString = pricePhone.innerText;
    // const phonePrice = parseFloat(pricePhoneString);

    const totalPhonePrice = 1219 * newPhoneQuantity;
    
    pricePhone.innerText = totalPhonePrice
})

document.getElementById("btn-cover-minus").addEventListener('click', function(){
    const coverQuantity = document.getElementById("input-cover");
    const coverQuantityString = coverQuantity.value;
    const coverQuantityAmmount = parseFloat(coverQuantityString);

    coverQuantity.value = coverQuantityAmmount - 1;
    const newCoverQuantity = coverQuantityAmmount - 1;

    const priceCover = document.getElementById("price-cover");
    const priceCoverString = priceCover.innerText;
    // const coverPrice = parseFloat(priceCoverString);

    const totalCoverPrice = 59 * newCoverQuantity;
    
    priceCover.innerText = totalCoverPrice
})

document.getElementById("btn-cover-plus").addEventListener('click', function(){
    const coverQuantity = document.getElementById("input-cover");
    const coverQuantityString = coverQuantity.value;
    const coverQuantityAmmount = parseFloat(coverQuantityString);

    coverQuantity.value = coverQuantityAmmount + 1;
    const newCoverQuantity =coverQuantityAmmount + 1;

    const priceCover = document.getElementById("price-cover");
    const priceCoverString = priceCover.innerText;
    // const coverPrice = parseFloat(priceCoverString);

    const totalCoverPrice = 59 * newCoverQuantity;
    
    priceCover.innerText = totalCoverPrice
})

