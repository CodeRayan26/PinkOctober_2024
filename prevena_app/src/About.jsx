
export default function About(){
    return (
        <div className="about flex items-center gap-[60px] p-[50px] rounded-2xl mt-[50px]" style={{backgroundColor: '#fdf2f0'}} >
            <img className="hidden sm:block min-w-[200px]" src="././public/aboutus.png" alt="" />
            <div className="txt flex flex-col items-start gap-[20px]">
                <p className="text-white font-sm p-[10px] rounded-3xl rounded-br-lg" style={{backgroundColor: '#ED8182'}}>ABOUT US</p>
                <h1 className="font-bold text-3xl mt-[-10px]" style={{color:'#d02f46'}}>Mission Statement</h1>
                <p>Our mission is to raise awareness about cosmetic ingredients and their potential health impacts, particularly regarding breast cancer. We believe that informed consumers can make healthier choices.</p>
            </div>
        </div>
    )
}