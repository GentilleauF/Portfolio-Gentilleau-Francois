const HeroBanner = () => {
    return (
        <div className="flex justify-around pt-48 h-screen bg-slate-900">
            <div className="flex flex-col  text-white ">
                <h1 className="text-4xl mb-5">Hi ! I'm GENTILLEAU François</h1>
                <h2 className="text-3xl">Web développeur</h2>
                <p>Jeune développeur de 28ans venez découvrir mon portfolio !</p>
            </div>
            <div>
                <img className="w-[30vw] h-[50vh] object-cover" src="/icons/profil.JPG" alt="" />
            </div>

        </div>
    );
}

export default HeroBanner;