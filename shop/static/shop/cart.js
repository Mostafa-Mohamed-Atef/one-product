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
        cart[item_id] = cart[item_id] + 1;
    } else {
        cart[item_id] = 1;
    }
    x = Object.values(cart);
    document.getElementById('cart').innerHTML = x; //this will change the cart icon numbering 
    localStorage.setItem('cart', JSON.stringify(cart)); //adding to cart won't change when browser refreshed 
});
