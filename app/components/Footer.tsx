import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-md text-center leading-relaxed text-gray-500">
          I'm a dev who works on fun projects to learn new technology, go follow
          me on{" "}
          <a
            className=" text-blue-400  hover:text-blue-800"
            href="https://www.github.com/fewdw"
          >
            github
          </a>{" "}
          👋😊
        </p>
      </div>
    </footer>
  );
};

export default Footer;
