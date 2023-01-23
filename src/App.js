import React from "react";
import Introduction from "./Components/Introduction/Introduction";
import Statistics from "./Components/Statistics/Statistics";
import './Assets/css/index.css';
import BuyTrade from "./Components/BuyTrade/BuyTrade";
import Partners from "./Components/Partners/Partners";
import Card from "./Components/Card/Card";
import Tools from "./Components/Tools/Tools";
import Security from "./Components/Security/Security";
import GetStarted from "./Components/GetStarted/GetStarted";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
function App() {
    const scrollToUp = (e) => {
        let animationTime = 500;
        let framesCount = 60;
        // убираем стандартное поведение
        e.preventDefault();
        
        let scroller = setInterval(function() {
            let scrollBy = document.body.scrollHeight / framesCount;
            if(document.documentElement.scrollTop > 0) {
                window.scrollBy(0, -scrollBy);
            } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, 0);
                clearInterval(scroller);
            }
        // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
    };
    return (
      <>
        <main className=''>
            <div class="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient -z-10"></div>
            <Introduction/>
            <Statistics/>
            <BuyTrade/>
            <Partners/>
            <Card/>
            <Tools/>
            <Security/>
            <GetStarted/>
            <FAQ/>
            <div className="flex justify-center mb-11">
                <button className=" hover:shadow-md border border-[#DDDDDD] rounded-md bg-[#FAFAFA]
                py-3 px-7 hover:bg-gray-100 transition-all duration-300" onClick={(e) => scrollToUp(e)}>
                    <div className="flex items-center">
                        Back to top
                        <span aria-hidden="true" role="img" class="material-design-icon arrow-up-icon" data-v-b444fb2c="">
                            <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" class="material-design-icon__svg">
                                <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </button>
            </div>
            <Footer/>
        </main>
      </>

    );
}

export default App;
