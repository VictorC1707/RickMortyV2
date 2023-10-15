export default function Card(props) {
   return (
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">

<div class="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl bg-slate-600 before:bg-gradient-to-bl from-sky-200 via-green-400 to-green-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
<div class="flex justify-end w-full">
                            <a onClick={props.onClose} class=" pe-10 cursor-pointer z-10 h-6 w-6 text-black fill-current">
                            <i class="fa-solid fa-xmark hover:text-red-500"></i>
                            </a>
                        </div>
  <img class="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-100 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500" src={props.image}></img>
  <div class="z-10  group-hover:-translate-y-20 transition-all duration-500">
    <span class="text-2xl font-semibold">{props.name}</span>
    <p>{props.species}</p>
  </div>
</div>
            

        </div>
   );
}
