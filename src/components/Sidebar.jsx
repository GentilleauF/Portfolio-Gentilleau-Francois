const SideBar = () => {
  return (
    <div>
      <div className=" hidden lg:block fixed left-0 top-0 bottom-0 w-20 bg-white">
        <div className="flex flex-col justify-center items-center h-full">
          <a href="https://www.linkedin.com/in/francois-gentilleau-b09602293/" target="_blank">
            <img
              className=" flex w-8 pb-7"
              src="/icons/LinkedIn_svg.png"
              alt="LinkedIn logo"
            />
          </a>

          <a href="https://github.com/GentilleauF" target="_blank">
            <img
              className=" flex w-8 pb-7"
              src="/icons/GitHub_svg.png"
              alt="Github logo"
            />
          </a>

          <a href="https://www.gmail.fr" target="_blank">
            <img
              className=" flex w-8"
              src="/icons/Gmail_svg.png"
              alt="Gmail logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
