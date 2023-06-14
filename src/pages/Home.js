import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ScrollTransitionImage from "../components/ScrollTransitionImage";
import { useLoaderData } from "react-router-dom";
import { first, fourth, second, third } from "../assests";
import { Fade } from "react-reveal";
const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  const banner = ['https://mir-s3-cdn-cf.behance.net/project_modules/fs/196b1e150744213.62ff81a0c9937.jpg', second, third, fourth];
  return (
    <div>
      <Fade>
        <Banner images={banner} />

        <div className="pt-4">
          <div className="bg-white rounded-lg gap-6 p-6 flex flex-col items-center">
            <h2 className="text-2x1 bg-black text-white py-2 w-80 text-center">
              Gastrointestinal Diseases and Healthcare
            </h2>
            <p className="text-gray-700 font-semibold">
              Gastrointestinal (GI) diseases refer to a wide range of conditions
              that affect the digestive system, which includes the esophagus,
              stomach, small intestine, large intestine, liver, gallbladder, and
              pancreas. These diseases can cause various symptoms such as
              abdominal pain, diarrhea, constipation, bloating, and indigestion.
              Proper healthcare and management of gastrointestinal diseases are
              essential for maintaining overall health. This involves a
              multidisciplinary approach that includes medical professionals
              specializing in gastroenterology, nutritionists, and other
              healthcare providers. The goal is to diagnose the specific
              condition accurately and develop an individualized treatment plan.
              Treatment options for gastrointestinal diseases depend on the
              underlying cause and may include medication, dietary
              modifications, lifestyle changes, and, in some cases, surgery.
              Regular monitoring and follow-up visits are often necessary to
              assess the effectiveness of the treatment and make any necessary
              adjustments. It is crucial to emphasize the importance of
              preventive measures to maintain a healthy gastrointestinal system.
              This includes adopting a balanced diet rich in fiber, fruits, and
              vegetables, staying hydrated, exercising regularly, avoiding
              excessive alcohol consumption and smoking, and managing stress
              levels. If you experience persistent or severe gastrointestinal
              symptoms, it is important to consult a healthcare professional
              promptly. Early diagnosis and treatment can help manage the
              condition effectively and improve the quality of life. Remember,
              this description serves as a general overview, and specific
              conditions and treatment approaches may vary. Always consult a
              medical professional for personalized advice and guidance.
            </p>
          </div>
        </div>
      </Fade>
      <section className="py-8">
        <div className="container mx-auto">
          <ScrollTransitionImage />
        </div>
      </section>
    </div>
  );
};

export default Home;
