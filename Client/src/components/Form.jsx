import { Formik } from "formik";

export default function Form({login}) {
  return (
    <>
    <div class="h-screen overflow-hidden flex items-center justify-center ">
  <div class="max-w-4xl flex  max-h-96 z-10 ">
    <img src="https://i.etsystatic.com/32050623/r/il/b627a1/4447274366/il_fullxfull.4447274366_1o7q.jpg" alt="" class="hidden md:block w-1/2 max-h-full rounded-l-xl"/>
    <div class="md:w-1/2 bg-white bg-opacity-50 py-14 px-12 rounded-r-xl">

    <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valuesF)=>{
            let errorsF = {}
            //validacion email
            if(!valuesF.email){
                errorsF.email ="Ingresa un email"
            } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valuesF.email)){
                errorsF.email = "Ingresa un email valido"
            }

            //validacion password
            if(!valuesF.password){
                errorsF.password ="Ingresa un password"
            } else if(!/^(?=.*\d)\S{6,10}$/.test(valuesF.password)){
                errorsF.password = "Ingresa un password entre 6 y 10 caracteres"
            } else if(!/^(?=\w*\d)/.test(valuesF.password)){
                errorsF.password = "Ingresa un password que contenga un numero"
            }

            return errorsF
        }}
        onSubmit={(valuesF, {resetForm}) => {
            login(valuesF);
            resetForm();
        }}
      >
        {({ values, errors, touched, handleSubmit, handleChange,handleBlur }) => (
          
          
          
          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold" htmlFor="email">Usuario</label>
              <input
              class="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <p className="text-red-800">{errors.email}</p>}
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold" htmlFor="Password">Password</label>
              <input
              class="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                type="text"
                id="password"
                name="password"
                placeholder="*********"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && <p className="text-red-800">{errors.password}</p>}
            </div>
            <div class="mb-4">

            <button class=" bg-gradient-to-r from-green-400 to-yellow-500 hover:from-yellow-500 hover:to-green-600 font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-1500 ease-in-out  hover:animate-pulse active:animate-bounce" type="submit">Submit</button>
            </div>
          </form>
        )}
      </Formik>
      

    </div>
  </div>
</div>
    </>
  );
}
