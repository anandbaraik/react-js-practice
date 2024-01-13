import { useEffect, useState } from 'react'
import './App.css'

function App() {
  	const [products, setProducts] = useState([])
	const [page, setPage] = useState(0);
	const [totalPage, setTotalPage] = useState(0);
	const fetchProducts = async () => {
		try {
			const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10}`);
			const {products, total} = await response.json();
			setProducts(products);
			setTotalPage(total/10);
		} catch(err) {
			console.log(`Something went wrong - `, err);
		}
	}
	useEffect(() => {
		fetchProducts();
	}, [page]);
  return (
    <>
		{
			(products.length > 0) && (
				<>
					<div className='products'>
						{
							products?.map(product => (
								<div className='products__single' key={product.id}>
									<img src={product.thumbnail} alt={product.title} />
									<h3>{product.title}</h3>
								</div>
							))
						}
					</div>
					<div className='pagination'>
							<div className='pagination__item'>
								◀️
							</div>
							{
								[...Array(totalPage)]?.map((_, index) => (
									<div className='pagination__item'
										key={index}>
										{index + 1}
									</div>
							))
								}
							<div className='pagination__item'>
								▶️
							</div>
					</div>
				</>
			)
		}
    </>
  )
}

export default App
