
import useProducts from "./hooks/useProducts";

const ProductsFiltered = () => {

const {productsData} = useProducts ();
return (
<div>
<h1>Products</h1>
<ul>
    <ComponenteFiltrado products={products}/>
    {products.map((product) => { 
        <li key={product.id}>{product.name}</li>
    })
    }
</ul>
</div>
)
}

export default ProductsFiltered;