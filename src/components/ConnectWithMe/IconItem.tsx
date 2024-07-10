import React from "react";

type Props = {
  url?: string;
  children: React.ReactNode;
  newTab: boolean;
};

function IconItem({ url, children, newTab }: Props) {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : ""}
      rel={newTab ? "noopener noreferrer" : ""}
      className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
    >
      {children}
    </a>
  );
}

export default IconItem;
