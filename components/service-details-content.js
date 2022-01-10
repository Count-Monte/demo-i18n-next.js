import React from "react";
import { useRouter } from 'next/router';
import serviceS1 from "@/images/s1.png";
import serviceS5 from "@/images/s5.jpg";
const ServiceDetailsContent = () => {
  const { locale } = useRouter();
  return (
    <div className="serviceArea">
      <h2 className="livres-audio">Production de livres audio</h2>
      <img src={serviceS1} alt="" />
      <p>
        {locale === 'en-US' 
          ? `Our audiobook production, experience, processes and infrastructure are optimized to deliver unmatched quality, unbeatable lead time and competitive pricing. 
          From production to distribution, our infrastructure and ecosystem are all you need to be above industry standards.` 
          : `Notre production de livres audio, notre expérience, nos processus et nos infrastructures sont optimisés afin d’offrir une qualité inégalée, 
          un délai imbattable et des tarifs concurrentiels. De la production à la distribution, notre infrastructure et notre écosystème sont tous ce 
          dont vous avez besoin pour être au-dessus des standards de l'industrie.`}
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS5} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>{locale === 'en-US' ? "Private cabins" : "Cabines privées"}</h3>
          <p>
            {locale === 'en-US' 
              ? "Our dedicated and passionate engineers as well as our specialized equipment will bring a new dimension to your audiobook project." 
              : "Nos ingénieurs dévoués et passionnés ainsi que nos équipements spécialisés amèneront une nouvelle dimension à votre projet de livre audio."}
          </p>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>{locale === 'en-US' ? "Private and personalized recordings" : "Enregistrements privés et personnalisés"}
            </li>
            <li>
              <i className="fa fa-check-square"></i>{locale === 'en-US' ? "Diversified equipment and devices" : "Équipements et appareils diversifiés"}
            </li>
            <li>
              <i className="fa fa-check-square"></i>{locale === 'en-US' ? "Several simultaneous narrators possible" : "Plusieurs narrateurs simultanés possibles"}
            </li>
            <li>
            <i className="fa fa-check-square"></i>{locale === 'en-US' ? "Sound Design | Mixing | Mastering" : "Design Sonore | Mixage | Mastering"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsContent;
