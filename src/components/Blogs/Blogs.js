import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center my-10 text-4xl">Question and Answer</h1>
      <div className="bg-gray-100 p-8 rounded-md mb-6">
        <h5 className="font-bold mb-2">What is Context API?</h5>
        <p>
          The Context API is a React structure that enables to exchange of
          unique details and assists in solving prop-drilling from all levels of
          application. Context API is an alternative to prop drilling or moving
          props from grandparent to child to parent, and so on. In Context API,
          React.createContext() is return a consumer and a provider. The
          provider is a component that provides the state to its children. It
          holds the store and is the parent of all the components that might
          need that store. The Consumer as it so happens is a component that
          consumes and uses the state.
        </p>
      </div>
      <div className="bg-gray-100 p-8 rounded-md">
        <h5 className="font-bold mb-2">What is Semantic Tag?</h5>
        <p>
          HTML is markup language. In HTML5 which is HTML updated version. In
          this version, there are a lot of tags included which provided many
          features on the webpage. Semantic tag are those that clearly describe
          their meaning in a human and machine readable way. Some of the
          semantic tag is header, nav, main, article, aside, section and footer.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
