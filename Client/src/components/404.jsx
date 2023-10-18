import "./404.css"
import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <div class="background-img">
		<div class="space"></div>
			<div class="wrapper">
				<div class="img-wrapper">
					<span>44</span>
				</div>
				<p className="mb-10">The page has been moved to another universe.</p>
				<Link to="/home" type="button" class="mt-10 bg-gradient-to-r from-green-400 to-yellow-500 hover:from-yellow-500 hover:to-green-600 font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-1500 ease-in-out  hover:animate-pulse active:animate-bounce">Go Home!</Link>
			</div>
		</div>
    )
}