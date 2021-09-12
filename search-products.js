const products = [
    {name: 'samsung s3 phone', price: 12000},
    {name: 'asus laptop', price: 52000},
    {name: 'apple smart watch', price: 8000},
    {name: 'bosundhara binding paper', price: 2000},
    {name: 'LED TV', price: 22000},
    {name: 'camera', price: 20000}
]

function searchProducts(products, searchText){
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if(name.indexOf(searchText) != -1){
            matched.push(product)
        }
    }
    return matched;
}
const matched = searchProducts(products, 'apple');
console.log(matched);