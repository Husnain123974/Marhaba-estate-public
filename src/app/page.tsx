 
import HeroSection from "./components/HeroSection";
import FeaturedProperties from "./components/FeaturedProperties";
import GreyStructures from "./components/GreyStructures";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Ratings from "./components/Ratings";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
   
     
      <div className="pt-20">  
        <HeroSection />
      </div>


      <div className=" top-[851px] p-[3rem]">
       <FeaturedProperties/>

       
      <div className="pt-20"> 
         <GreyStructures /> 
      </div>

   
       <div className="pt-20">
       <WhyChooseUs />
       </div>
      
   
       <div className="pt-20">
       <Services />
       </div>

   
      <div className="pt-20">
       <Ratings />
       </div>

       <div className="pt-10">
       <ContactForm />
       </div>
        
       <div className="pt-10">
       <Footer />
       </div>
      

       </div>
      
 
    </div>
  );
}
