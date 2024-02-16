const WhoAmI = () => {
  return (
    <div className="flex flex-col mt-20 p-16" id="WhoAmI">
      <h2 className="text-white text-center text-4xl font-semibold">Qui suis je?</h2>
      <div className="flex flex-row">
        <p className=" text-white overflow-auto text-justify w-[65%] px-5 pr-20 py-10">
          Bonjour et bienvenue sur mon portfolio ! Je m'appelle François Gentilleau, j'ai 28 ans et je suis passionné par le développement d'applications. Actuellement sur Toulouse, j'ai toujours été attiré par le monde de la technologie et de l'ingénierie.
          <br />
          <br />
          Après avoir obtenu mon baccalauréat en sciences de l'ingénieur, j'ai obtenu un bac+3 de Concepteur Développeur d'Applications. Cette expérience m'a permis d'acquérir une solide expertise dans le développement logiciel et de découvrir les nombreuses facettes de la conception d'applications modernes.
          <br />
          En plus de ma formation de concepteur développeur d'applications, j'ai également obtenu un diplôme d'infirmier, ce qui m'a permis d'exercer pendant deux ans dans ce domaine. Par ailleurs, j'ai eu l'opportunité enrichissante de vivre une expérience professionnelle en Australie grâce à un visa vacances-travail.          <br />
          <br /> 
          Curieux de nature, j'aime me plonger dans de nouveaux défis et découvrir les dernières technologies. Mon parcours m'a enseigné l'importance de rester constamment à jour avec les dernières tendances du secteur pour créer des solutions innovantes et performantes.
          <br />
          <br />
          Que ce soit en travaillant sur des projets personnels ou en collaborant avec d'autres professionnels, je m'efforce toujours de repousser les limites de mes compétences et de fournir des résultats de qualité.
          <br />
          <br />
          N'hésitez pas à explorer mon portfolio pour en savoir plus sur mes réalisations et à me contacter si vous souhaitez discuter d'une collaboration ou d'un projet passionnant !
        </p>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 w-[35%] py-10 ">
          <img
            className="row-start-1"
            src="/icons/photoTest.jpg"
            alt="photo bio 1"
          />
          <img
            className="row-start-2 col-start-2"
            src="/icons/photoTest.jpg"
            alt="photo bio 2"
          />
          <img
            className="row-start-3"
            src="/icons/photoTest.jpg"
            alt="photo bio 3"
          />
        </div>
      </div>
    </div >
  );
};

export default WhoAmI;
