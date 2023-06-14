import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";
import { Button, animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { simple } from "../assests";

const ScrollTransitionImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    setIsVisible(false);
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const imageRef = useRef(null);
  const imageRef1 = useRef(null);

  useEffect(() => {
    if (isVisible && imageRef.current) {
      imageRef.current.classList.add("animate-fadeIn");
    }
  }, [isVisible]);

  return (
    <div className="flex flex-col gap-7">
      <div ref={ref}>
        <Fade when={inView}>
          <div className="flex flex-row justify-around gap-3">
            <img
              ref={imageRef}
              src={simple}
              alt="Image"
              className="transition-transform ml-10 w-[500px] h-[300px] duration-500 "
            />
            <div className="mt-20">
              <p className="text-gray-700 font-semibold ">
                Regular check-ins with gastroenterologists are important for
                maintaining gastrointestinal health. Gastroenterologists
                specialize in diagnosing and treating diseases of the digestive
                system. By scheduling regular appointments, individuals can
                ensure early detection and timely treatment of gastrointestinal
                conditions. Gastroenterologists have the expertise to accurately
                diagnose and provide personalized treatment plans. They can
                perform diagnostic procedures and recommend lifestyle changes or
                medications as needed. Overall, regular check-ups with
                gastroenterologists are essential for optimizing digestive
                health and managing gastrointestinal diseases.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div ref={ref}>
        <Fade when={inView}>
          <div className="flex flex-row justify-around gap-3">
            <div className="mt-20 ml-10">
              <p className="text-gray-700 font-semibold ">
                Gastrointestinal diseases can have serious implications on an
                individual's health and well-being. These conditions affect the
                digestive system, including the esophagus, stomach, intestines,
                liver, gallbladder, and pancreas. They range from common issues
                like acid reflux and gastritis to more severe conditions such as
                inflammatory bowel disease, liver cirrhosis, and
                gastrointestinal cancers. The seriousness of gastrointestinal
                diseases stems from their potential to cause significant
                discomfort, pain, and disruption to daily life. They can lead to
                symptoms like abdominal pain, bloating, diarrhea, constipation,
                nausea, vomiting, and unintended weight loss. In some cases,
                gastrointestinal diseases can also result in nutritional
                deficiencies and malabsorption of essential nutrients.
              </p>
            </div>
            <img
              ref={imageRef1}
              src="https://www.sonambekarhospital.com/wp-content/uploads/2021/08/gastrointestinal-diseases.jpg"
              alt="Image"
              className="transition-transform mr-10 w-[500px] h-[300px] duration-500 "
            />
          </div>
        </Fade>
      </div>
      <button className="items-center bg-gray-500 hover:bg-gray-700  text-white font-bold py-2 px-4 rounded-full shadow-md max-w-xs mx-auto">
        Lets explore about the diseases 
      </button>
    </div>
  );
};

export default ScrollTransitionImage;
