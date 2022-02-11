import React from "react";

const List = ({links}) => {
  return (
    <section>
      {links.map((link, key) => (
        <a
          href={link.url}
          key={key}
          className="h-full lg:w-1/2 my-4 p-3 container mx-auto bg-white/50 rounded-md 
        border border-white/50 flex justify-center text-xl text-center font-bold hover:bg-violet-700/60"
        >
          {link.name}
        </a>  
      ))}
    </section>
  );
};

export default List;
