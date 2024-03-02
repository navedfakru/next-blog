import Link from "next/link";
import './style.css'
export default function Home() {
  return (
    <main className="user-item">
      <h1>connect mongodb and Next.JS</h1>
      <span><Link href={"/addproduct"}>Add Products</Link></span>
      <span><Link href={"/products"}>Product List</Link></span>
    </main>
  );
}
