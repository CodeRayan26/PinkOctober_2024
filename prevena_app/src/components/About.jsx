import aboutImage from '../assets/aboutus.png'; 

export default function About() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#FBE9E9]">
            <div className="w-full max-w-screen-xl bg-white rounded-2xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-8">
                <img 
                    className="w-full md:w-1/2 rounded-lg object-cover shadow-md" 
                    src={aboutImage} 
                    alt="About Us" 
                />
                <div className="text-center md:text-left flex flex-col">
                    <h2 className="text-xl font-semibold text-[#d02f46] mb-3">About Us</h2>
                    <h1 className="text-5xl font-bold mb-4">Mission Statement</h1>
                    <p className="text-lg text-gray-700 mb-4">
                        Our mission is to raise awareness about cosmetic ingredients and their potential health impacts, particularly regarding breast cancer. We believe that informed consumers can make healthier choices.
                    </p>
                    <a href="#learn-more" className="inline-block mt-4 px-6 py-2 bg-[#d02f46] text-white rounded-full hover:bg-[#b02b38] transition duration-300">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}
