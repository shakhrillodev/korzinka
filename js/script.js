window.addEventListener('DOMContentLoaded', function(){
    let open = this.document.querySelector('.open'),
        buyBtn = document.querySelectorAll('button'),
        product = document.querySelectorAll('.product');


    function myCart(){
        let cart = document.createElement('div'),
            heading = document.createElement('h1'),
            field = document.createElement('div'),
            closeBtn = document.createElement('button');
        
        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');
        heading.textContent = 'Korzinkam';
        closeBtn.textContent = 'Yopish';
        
        document.body.appendChild(cart);

        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closeBtn)
    
    }
    myCart();
    
    let cart = document.querySelector('.cart'), closeBtn = document.querySelector('.close'),  field = document.querySelector('.cart-field');

    open.addEventListener('click', function(){
        cart.style.display = 'block'

    })

    closeBtn.addEventListener('click', function(){
        cart.style.display = 'none'
    })

    buyBtn.forEach((item, i) => {
        item.addEventListener('click', function(){
            let cloned = product[i].cloneNode(true),
            buy = cloned.querySelector('button');
            console.log(buy);
            buy.remove();
            product[i].remove()
            field.appendChild(cloned);          
        })
    })



})