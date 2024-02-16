const HeroBanner = () => {
    return (
        <div className="flex justify-around pt-10 min-h-screen">
            <div className="flex flex-col mt-10 text-white ">
                <h1 className="text-xl mb-3">Hi ! I'm GENTILLEAU François</h1>
                <h2 className="text-6xl font-semibold text-blueprimary mb-6">Fullstack <br /> Developer</h2>
                <p className="text-2xl ">Jeune développeur de 28ans venez découvrir mon portfolio !</p>
            </div>
            <div>
                <img className="w-[30vw] h-auto object-cover" src="/icons/profil.jpg" alt="" />
            </div>

        </div>
    );
}

export default HeroBanner;