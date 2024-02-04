function checkOrder (available, ordered) {
    switch(true){
        case ordered>available:
            console.log('Your order is too large, we don’t have enough goods.');
            break;
        case ordered === 0:
            console.log('Your order is empty');
            break;
        default:
            console.log('Your order is accepted');
    }
}
checkOrder(5,10)
checkOrder(5,0)
checkOrder(5,3)