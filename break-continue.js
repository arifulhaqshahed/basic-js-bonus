const products = [
    {name: 'samsung s3 phone', price: 22000},
    {name: 'asus laptop', price: 200000},
    {name: 'apple smart watch', price: 28000},
    {name: 'bosundhara binding paper', price: 2000},
    {name: 'LED TV', price: 9000},
    {name: 'camera', price: 20000}
]

for (const product of products) {
    if(product.price < 20000){
        continue;
    }
    console.log(product)
}