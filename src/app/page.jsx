import Header from './components/Header/Header'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function Page() {
	return (
		<div>
			<Header />
			<Home  />
			<AboutUs />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	)
}
