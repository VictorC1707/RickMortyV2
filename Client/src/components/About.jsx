import { Link } from "react-router-dom"
import ViC from "../img/VC.png"
export default function About(){
    return(

    <div>

<div class="grid md:grid-cols-2 grid-cols-1 p-10">
    <div class="md:p-10">
      <h2 class="m-2 text-4xl text-white font-bold">Rick and Morty Project</h2>
      <div class="info text-gray-500 mt-7 leading-relaxed">
      Welcome to my Rick and Morty project! Here, I apply my basic front-end and back-end 
      knowledge to bring you a platform where you can explore the captivating world of Rick 
      and Morty. I fetch data from an API to provide you with the latest information about 
      your favorite characters and present it in an engaging way. Join me on this journey of 
      fun and learning!
      </div>
      <div class="cta mt-7">
      <Link to="/home" class="mt-10 bg-gradient-to-r from-green-400 to-yellow-500 hover:from-yellow-500 hover:to-green-600 font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-1500 ease-in-out  hover:animate-pulse active:animate-bounce">
  Go Home
</Link>
      </div>
    </div>
    <div class="mt-10">
      <img class="w-full mx-auto max-w-sm" src="https://www.sonsofgotham.com/cdn/shop/collections/rick-morty.png?v=1660054592&width=1600"/>
    </div>
  </div>
  <div class="bg-slate-200  bg-opacity-40 grid md:grid-cols-2 grid-cols-1 p-10">
    <div class="mt-10">
      <img class="w-full mx-auto max-w-sm" src={ViC}/>
    </div>
    <div class="md:p-10">
      <h2 class="m-2 text-4xl font-bold">About Me</h2>
      <div class="info text-gray-800 mt-7 leading-relaxed">
      Hi, I'm Víctor Canchis, a passionate 23-year-old Full Stack Developer from Venezuela. I've been the 
      mastermind behind the creation and development of this website. From design to functionality, I've 
      invested time and effort to offer you a unique experience. Feel free to explore and enjoy everything 
      I've created for you. I hope this project sparks your curiosity and inspires you to explore new possibilities
      </div>
      <div class="cta mt-7">
        <a href="" class="mt-10 bg-gradient-to-r from-green-400 to-yellow-500 hover:from-yellow-500 hover:to-green-600 font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-1500 ease-in-out  hover:animate-pulse active:animate-bounce">Portfolio</a>
      </div>
    </div>
  </div>
  <div class="grid md:grid-cols-2 grid-cols-1 p-10">
    <div class="md:p-10">
      <h2 class="m-2 text-4xl text-white font-bold">Contact</h2>
      <div class="info text-gray-500 mt-7 leading-relaxed">
      Would you like to get in touch? Don't hesitate to visit my LinkedIn profile to learn more about me 
      and my projects! I'm interested in collaborating and hearing your ideas. I believe in the power of 
      communication and building meaningful relationships. If you have any questions, suggestions, or just 
      want to chat about your passion for the digital world, I would love to connect with you! Looking forward 
      to connecting with you soon!
      </div>
      <div class="cta mt-7">
        <a href="" class="mt-10 bg-gradient-to-r from-green-400 to-yellow-500 hover:from-yellow-500 hover:to-green-600 font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-1500 ease-in-out  hover:animate-pulse active:animate-bounce"><i class="fa-brands text-blue-800 fa-linkedin-in"></i> LinkedIn</a>
      </div>
    </div>
    <div class="mt-10">
      <img class="w-full mx-auto max-w-sm" src="https://raw.githubusercontent.com/VictorC1707/ImagesIA/master/IA/perfil1.jpeg"/>
    </div>
  </div>
    </div>
    )
}