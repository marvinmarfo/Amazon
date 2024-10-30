const cell_array = ['.each-cell-01','.each-cell-02','.each-cell-03','.each-cell-04','.each-cell-05','.each-cell-06','.each-cell-07','.each-cell-08','.each-cell-09','.each-cell-10','.each-cell-11','.each-cell-01','.each-cell-12','.each-cell-13','.each-cell-14']

const added_to_cart_array = ['.added-to-cart-01','.added-to-cart-02','.added-to-cart-03','.added-to-cart-04','.added-to-cart-05','.added-to-cart-06','.added-to-cart-07','.added-to-cart-08','.added-to-cart-09','.added-to-cart-10','.added-to-cart-11','.added-to-cart-12','.added-to-cart-13','.added-to-cart-14','.added-to-cart-15']

const add_to_cart_array = ['.add-to-cart-01','.add-to-cart-02','.add-to-cart-03','.add-to-cart-04','.add-to-cart-05','.add-to-cart-06','.add-to-cart-07','.add-to-cart-08','.add-to-cart-09','.add-to-cart-10','.add-to-cart-11','.add-to-cart-12','.add-to-cart-13','.add-to-cart-14','.add-to-cart-15']

document.querySelector(add_to_cart_array).forEach((value,index) =>{
    value.addEventListener('click',() => {
        document.querySelector(added_to_cart_array.forEach((v,i) =>{
            v.innerHTML = 
            `<img src="amazon-images/checkmark.png"><p>Added</p> `
        }))
    })
})


