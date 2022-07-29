function ProductCard({ product }) {
  return (
    <div class="wrapper">
      <div class="product-img">
        <img src={product.image_link} height="420" width="327" />
      </div>
      <div class="product-info">
        <div class="product-text">
          <h1>{product.name}</h1>
          <h2>{product.brand}</h2>
          <p>
            {product.description}
          </p>
        </div>
        <div class="product-price-btn">
          <p>
            <span>{product.price}</span>{product.price_sign}
          </p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
