import React from "react";
import './DiseaseDict.css';
export function DiseaseDict(){
    return (
        <div className="conteudo">
            <div className="carousel">
                <article className="card">
                    <h1 className="cardTitle">New Castle Disease</h1>
                    <br/>
                    <p className="cardP">
                   
                    Newcastle Disease (ND) is a highly contagious viral infection that predominantly affects poultry, particularly chickens. It is caused by the Newcastle disease virus (NDV) and is transmitted through direct contact with infected birds, their secretions, and contaminated materials. Symptoms range from mild respiratory issues to severe neurological signs, with highly virulent strains causing severe outbreaks and significant economic losses in the poultry industry. Prevention involves strict biosecurity practices, targeted vaccination programs, and vigilant surveillance to detect and manage outbreaks. While primarily a poultry disease, some strains of ND pose a low zoonotic risk to humans in close contact with infected birds, emphasizing the importance of proper handling and hygiene. ND is a global concern due to its potential for rapid spread and economic consequences in the poultry sector.
                    </p>
                    <img className="cardImage" src='https://www.infonet-biovision.org/sites/default/files/styles/full_image_popup/public/animal_health/livestock_health/3105.400x400.jpeg?itok=VzF0mwH_'/>
                </article>
                <article className="card">
                    <h1  className="cardTitle">Salmonella</h1>
                    <br/>
                    <p className="cardP">
                        
Salmonella in poultry, particularly chickens, is a bacterium that can colonize their intestines without causing visible illness in the birds. However, it can be shed in their feces, contaminating poultry products like eggs and meat. When these products are consumed undercooked or raw, they can transmit Salmonella to humans, resulting in symptoms like diarrhea, abdominal cramps, nausea, vomiting, fever, and headache. Prevention involves stringent hygiene measures on poultry farms, careful handling, and thorough cooking of poultry products to reduce the risk of infection, and regulatory oversight to ensure food safety.
                    </p>
                    <img className="cardImage" src="https://nypost.com/wp-content/uploads/sites/2/2022/08/salmonella-regulations-02.jpg"/>
                </article>
                <article className="card">
                    <h1  className="cardTitle">Coccidiosis</h1>
                    <br/>
                    <p className="cardP">Coccidiosis is a common parasitic disease that affects chickens and other poultry species. It is caused by protozoa from the Eimeria genus, with various species of Eimeria affecting different parts of the chicken's digestive tract. When chickens ingest oocysts (the infective form of the parasite), they can develop coccidiosis. Symptoms include diarrhea, weight loss, reduced feed conversion efficiency, and, in severe cases, high mortality rates. The disease is primarily spread through contact with contaminated feces or bedding material. Preventive measures include maintaining clean and dry living conditions, proper hygiene, and the use of coccidiostats (medications to control the disease) in poultry feed or water. Effective management is crucial for minimizing the impact of coccidiosis on poultry health and productivity.</p>
                    <img className="cardImage" src="https://afarmgirlinthemaking.com/wp-content/uploads/2015/12/1-2.jpg"/>
                </article>
                <article className="card">
                    <h1  className="cardTitle">Why These Diseases Specifically?</h1>
                    <br/>
                    <p className="cardP">
                        Salmonella, Coccidiosis, and New Castle Disease all typically require a combination of clinical observations, laboratory tests, and sometimes post-mortem examinations, depending on the disease and its severity. As a result, farmers without the the necessary resources at hand may be unable to catch the outbreaks of these specific diseases at the early stages. Even farmers who have the ability to diagnose their chickens will need to wait for the laboratory results to come back, causing the same problem to occur. This website aims to help reduce these risks by allowing farmers to take fecal images to see if the chickens are infliced with these particular diseases, so outbreaks can be stopped and resources saved.
                    </p>
                    <img className="cardImage" src="https://www.ppsthane.com/wp-content/uploads/2019/05/qtq80-4qC4bd.jpeg"/>
                </article>
            </div>

        </div>
    )
}