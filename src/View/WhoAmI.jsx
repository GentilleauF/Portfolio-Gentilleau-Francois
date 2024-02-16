const WhoAmI = () => {
  return (
    <div className="flex flex-col p-16" id="WhoAmI">
      <h2 className="text-white text-center text-4xl font-semibold">Qui suis je?</h2>
      <div className="flex flex-row">
        <p className=" text-white overflow-auto text-justify w-[65%] px-5 pr-20 py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          delectus iure repellat suscipit cupiditate dolorem vitae dolores!
          Dolores consequatur, molestias amet perferendis quos provident sint at
          facere labore fugit, placeat sed commodi nostrum eius vitae id, rem
          excepturi consequuntur? Voluptas, impedit corporis. Velit nulla
          facilis, doloribus repellendus aliquam voluptatem a architecto, quo
          minima fugit ipsa ipsum accusamus, et quidem quisquam iste praesentium
          consequuntur impedit officiis atque. Autem non dolorem ipsum ducimus
          provident voluptates ipsam beatae qui excepturi, soluta reiciendis,
          sunt illo? Perspiciatis, obcaecati distinctio! Vitae rerum
          exercitationem itaque soluta, sapiente amet beatae dolores aperiam
          atque laboriosam iste voluptas perferendis quas tenetur nobis!
          Voluptates laborum illo alias doloribus enim unde ea recusandae
          possimus at incidunt tempore aut sed, impedit suscipit officia a,
          eaque molestias totam reprehenderit corrupti vero repudiandae ullam
          sint in. Distinctio deserunt dolorum nobis dolores, dignissimos modi
          sequi, eum dolor magni cumque facere vero labore illum voluptatum nisi
          officiis perferendis, tempora nemo aperiam necessitatibus. Quod est,
          ad veritatis ex voluptate placeat nobis dolore aperiam! Sequi est
          assumenda alias quidem, dolorem natus adipisci voluptatibus ducimus ut
          quos saepe, sint labore sed nihil neque eum explicabo animi at
          dignissimos quae minus. Minima quis accusamus velit ullam tempora
          animi earum nobis facilis rerum voluptatum pariatur, illo at sit
          ducimus, vero, commodi fugit! Magnam in sit, quaerat velit odio autem?
          Unde recusandae ab voluptatem quo minima dolor eius? Aliquam corrupti
          quis sapiente! Odio explicabo recusandae deserunt consectetur,
          deleniti maiores sint odit inventore numquam! Tempore iste libero nisi
          illum soluta ea vel commodi ipsa velit expedita mollitia possimus quam
          nobis quaerat sequi eligendi non explicabo illo, eum, culpa molestias
          amet! Quia repellat aliquid at culpa pariatur iure veniam facere
          tenetur, ex assumenda dicta, fuga possimus facilis quo ullam quas? Nam
          maiores id exercitationem dolores. Debitis laborum odio rerum sunt hic
          beatae voluptates impedit molestias?
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
    </div>
  );
};

export default WhoAmI;
