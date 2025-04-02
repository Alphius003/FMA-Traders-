const Products = () => {
  const products = [
    {
      name: "1121 Golden Sella Basmati",
      image:
        "https://www.mahavirricemill.com/uploads/product/1121%20Golden%20Sella%20Basmati%20Rice-min_16963308342614.jpg",
    },
    {
      name: "Sharbati Basmati Rice",
      image:
        "https://www.mahavirricemill.com/uploads/product/Sharbati%20Basmati%20Rice-min_16963308342614.jpg",
    },
    {
      name: "Non-Basmati White Rice",
      image:
        "https://www.mahavirricemill.com/uploads/product/Non-Basmati%20White%20Rice-min_16963308342614.jpg",
    },
  ];

  return (
    <section className="container mx-auto my-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="shadow-md rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
