if(localStorage.getItem('cart')==null) {
    var cart = {};   

} else {
    try {
        cart = JSON.parse(localStorage.getItem('cart'));
    } catch (e) {
        console.error('Error parsing cart from localStorage', e);
        cart = {};
    }}
//working on the button
$(document).on('click', '.jss', function() {
    var item_id = this.id.toString();
    if (cart[item_id] != undefined) {
        quantity = cart[item_id][0] + 1;
        cart[item_id][0] = quantity

    } else {
        quantity = 1;
        var product = document.getElementById("productId").innerHTML;
        cart[item_id] = [quantity, product];
    }
    console.log(cart)

    //learn JQUERY for making added items appear in another template
    
    document.getElementById('cart').innerHTML = quantity; //this will change the cart icon numbering 
    localStorage.setItem('cart', JSON.stringify(cart)); //adding to cart won't change when browser refreshed 
});
for (item in cart) {
    let nameD = cart[item][1];
    let qD = cart[item][0];
    itemString = `<li>${nameD} -> ${qD}`;
    $('#list').append(itemString);
}
$('#items').val(JSON.stringify(cart));
