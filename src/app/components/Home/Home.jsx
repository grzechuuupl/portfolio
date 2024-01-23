import React from 'react'
import Image from 'next/image'

const Home = () => {
	return (
		<section className='flex justify-around '>
			<div className='flex-col text-white m-9 p-9 '>
				<h1 className='text-5xl'>Hello, I'm Grzegorz </h1>
				<h2 className='text-2xl font-bold'>Fronted Developer</h2>
			</div>
			<div className=' m-9 p-9'>
				<Image className='rounded-xl' src='/hero-img.jpeg' width={500} height={250} />
			</div>
		</section>
	)
}

export default Home
