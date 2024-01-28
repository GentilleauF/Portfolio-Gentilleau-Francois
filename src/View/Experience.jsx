import { MapPinIcon } from "@heroicons/react/24/outline";

const Experience = () => {
    return ( 
        <div className="flex text-white flex-col bg-slate-900 min-h-screen p-16" id="Experience">
            <h2 className="text-center text-4xl font-semibold py-10">Expérience professionnelle</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {/* 1 */}
                <div className="bg-slate-600 rounded-sm p-4">
                    <p>Aout 2018 à Septembre 2021</p>
                    <p className="text-lg font-bold">Infirmier</p>
                    <div className="flex flex-row items-center">
                        <MapPinIcon className="w-5 mr-1"/>
                        <p>CHU de Montpellier - Adecco médical Bordeaux</p> 
                    </div>
                    <button className="mt-5">+ de détails</button>
                </div>  
                
                {/* 2 */}
                <div className="bg-slate-600 rounded-sm p-4">
                    <p>Septembre 2021 à Mars 2022</p>
                    <p className="text-lg font-bold">Formation developpeur web en indépendant </p>
                    <div className="flex flex-row items-center">
                        <MapPinIcon className="w-5 mr-1"/>
                        <p>Bordeaux</p> 
                    </div>
                    <button className="mt-5">+ de détails</button>
                </div>


                 {/* 3 */}
                <div className="bg-slate-600 rounded-sm p-4">
                    <p>Mars 2022 à Juillet 2023</p>
                    <p className="text-lg font-bold">Jobs en Working Holiday Visa en Australie</p>
                    <div className="flex flex-row items-center">
                        <MapPinIcon className="w-5 mr-1"/>
                        <p>Australia</p> 
                    </div>
                    <button className="mt-5">+ de détails</button>
                </div>


                {/* 4 */}
                <div className="bg-slate-600 rounded-sm p-4">
                    <p>Septembre 2023 à maintenant</p>
                    <p className="text-lg font-bold">Formation Concépteur développeur d'applications</p>
                    <div className="flex flex-row items-center">
                        <MapPinIcon className="w-5 mr-1"/>
                        <p>Adrar pôle numérique Toulouse</p> 
                    </div>
                    <button className="mt-5">+ de détails</button>
                </div>

            </div>

      </div>
     );
}
 
export default Experience;