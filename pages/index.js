import Banner from "../comps/banner/Banner";
import Categories from "../comps/categories/Categories";
import Feature from "../comps/feature/Feature";
import Product from "../comps/products/Product";

export default function Home({ products}) {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Wooden Chair",
  //     price: 2000,
  //     img: "https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938",
  //   },
  //   {
  //     id: 2,
  //     name: "Steel Chair",
  //     price: 2000,
  //     img: "https://img.zcdn.com.au/lf/50/hash/38454/19055758/4/Etienne+Velvet+Dining+Chairs.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Wooden Bed",
  //     price: 2000,
  //     img: "https://d3home.com/wp-content/uploads/2019/04/b3e3568a-d0b5-44b0-922d-0d18e7b0c67e.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Wooden Chair",
  //     price: 2000,
  //     img: "https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938",
  //   },
  // ];

  const randomProducts = [
    {
      id: 5,
      name: "Wooden Chair",
      price: 2000,
      img: "https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938",
    },
    {
      id: 6,
      name: "Steel Chair",
      price: 2000,
      img: "https://img.zcdn.com.au/lf/50/hash/38454/19055758/4/Etienne+Velvet+Dining+Chairs.jpg",
    },
    {
      id: 7,
      name: "Wooden Bed",
      price: 2000,
      img: "https://d3home.com/wp-content/uploads/2019/04/b3e3568a-d0b5-44b0-922d-0d18e7b0c67e.jpg",
    },
    {
      id: 8,
      name: "Wooden Bed",
      price: 2000,
      img: "https://d3home.com/wp-content/uploads/2019/04/b3e3568a-d0b5-44b0-922d-0d18e7b0c67e.jpg",
    },
  ];

  console.log("products", products);
  return (
    <div>
      <main>
        <Banner />
        <Feature />
        <Categories  />
        <Product products={products.slice(0,4)} title="New Arrivals" />
        <Product products={products.slice(-4)} title="Random" />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://ecommerce-mern-api.vercel.app/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
