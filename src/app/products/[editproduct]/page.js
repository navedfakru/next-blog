"use client"
import { useEffect, useState } from 'react'
import './../../style.css'
import Link from 'next/link';
export default function Page({params}){
	const productId = params.editproduct

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");
	const [company, setCompany] = useState("");
	const [category, setCategory] = useState("");
	

	useEffect(() => {
		getProductsDetail()
	},[])

	const getProductsDetail = async () => {
		let productData = await fetch(`http://localhost:3000/api/products/${productId}`)
		productData = await productData.json();
		if(productData.success){
			let result = productData.result
			setName(result.name)
			setPrice(result.price)
			setColor(result.color)
			setCompany(result.company)
			setCategory(result.category)
		}
	}

	const updateProduct = async () => {
		let data = await fetch(`http://localhost:3000/api/products/${productId}`, {
			method: "PUT",
			body: JSON.stringify({name, price, color, company, category})
		})
		data = await data.json();
		if(data.result){
			alert("Product has been updated")
		}
	}

	return (
		<div className='add-user'>
			<h1>Update Product</h1>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" className='input-field' />
			<input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" className='input-field' />
			<input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter Product Color" className='input-field' />
			<input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" className='input-field' />
			<input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" className='input-field' />
			<button onClick={updateProduct} className='btn'>Update Product</button>
			<Link className='link' href={"/products"}>Go To Product Page</Link>
		</div>
	)
}