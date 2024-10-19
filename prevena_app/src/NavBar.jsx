import './Nav.css'
export default function Nav(){
    
    return (
        <div className="flex flex-col items-center justify-between py-[20px] px-[5px] relative  sm:flex-row ">
            <img src="../public/logo.jpg" alt="" className='w-[150px]  mb-[10px] sm:mb-[0]' />
            <div className="flex items-center justify-evenly w-[90%] font-bold text-gray-500 sm:w-[50%] ">
                <p><a href="">Home</a></p>
                <p><a href="">About</a></p>
                <p><a href="">Product</a></p>
                <p><a href="">Contact</a></p>
            </div>
        </div>
    )

}