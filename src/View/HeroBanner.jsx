const HeroBanner = () => {
    return (
        <div className="flex flex-col lg:min-h-[75vh] lg:flex-row justify-around pt-10 ">
            <div className="flex justify-center flex-col mt-10 p-10 text-white ">
                <h1 className="text-xl mb-3"> 👋 Bonjour, Je suis Gentilleau François</h1>
                <h2 className=" text-4xl md:text-5L xl:text-6xl font-semibold text-blueprimary mb-6">Concepteur développeur <br /> d'Applications</h2>
                <p className="text-2xl ">Jeune développeur de 28 ans, venez découvrir mon portfolio !</p>
            </div>
            <div className="flex justify-center items-center">
                <img className=" w-[80vw]  lg:w-[25vw] h-auto object-cover" src="/icons/profil.png" alt="" />
            </div>

        </div>
    );
}

export default HeroBanner;