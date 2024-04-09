import Form from "./components/Form"


function App() {
  return (
<div className='flex w-full h-screen bg-gradient-to-r from-violet-100'>
<div className="w-full lg:w-1/2 flex justify-center items-center "> 
<Form />
</div>
<div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
<div className="w-80 h-80  bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin flex justify-center">
</div>
  <div className=" w-[50%] h-1/2 fixed bottom-0 bg-white/10  backdrop-blur-xl"></div>
</div>
</div>
  )
}

export default App
