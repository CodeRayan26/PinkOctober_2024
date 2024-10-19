import './css/landing.css'

export default function Landing() {
    
    return (
        <div className="landing"  >
            <div className="left flex flex-col items-center justify-around h-[350px] w-[450px] rounded-3xl mr-[1px]" style={{backgroundColor: '#FDF2F0'}}>
                <h3 className="font-bold font-[30px] text-xl" style={{color: '#d02f46'}}>Enter Product Name or Ingredients</h3>
                <form action="" className="relative w-[80%] ">
                    <input className="w-[100%] placeholder:text-sm px-[30px] py-[20px]  rounded-xl" type="text" placeholder="Search for an ingredient or product"/>
                    <button className="absolute px-[15px] py-[10px] top-[11px] left-[75%] w-[fit] h-[fit] text-white text-sm rounded-lg" style={{backgroundColor: '#ED8182'}}>Analyze</button>
                </form>
                <p className="text-xs text-gray m-[-35px]">Or</p>
                <button className="text-xl font-bold text-white rounded-3xl px-[20px] py-[15px]" style={{backgroundColor: '#ED8182'}}>Upload Image</button>
                <p className="text-sm mt-[-40px] text-gray-400">Or drop a file</p>
            </div>
            <div className="right flex flex-col items-center relative ml-[20px]">
                <div className='images'>
                    <img className='w-[350px] ' src="././public/doctor.png" alt="" />
                    <img className='w-[120px] absolute rounded-xl left-[-40px] top-[150px] sm:visible' src="././public/deco-landing.png" alt="" />
                </div>
                <div style={{border: 'solid 4px #F5E4E1', borderBottom: 0}} className='textbox flex flex-col items-center justify-center bg-white rounded-xl px-[20px] py-[20px] '>
                    <h1 className='font-bold text-3xl' style={{color: '#d02f46'}}>Ingredient Risk Scanner</h1>
                    <p className=' ' style={{color: '#ED8182'}}>100% Automatic and Free</p>
                </div>
            </div>
           

        </div>
        
    )
}