let x = document.getElementsByTagName("section")
console.log(x);//html Collection
function f(){
    x[0].innerHTML = `<div>
                        <h5>welcome</h5>
                        <h6>To access account and manage orders</h6>
                        <button>LOGIN/SIGNUP</button>
                        <ul>
                             <li>Orders</li>
                             <li>Wishlist</li>
                             <li>Giftcards</li>
                             <li>Contact us</li>
                             <li>Myntra insider</li>
                             <hr>
                             <li>Myntra credit</li>
                             <li>Cupons</li>
                             <li>Saved cards</li>
                             <li>Saved VPA</li>
                             <li>Saved Addresses</li>
                        </ul>
                    </div>`
}