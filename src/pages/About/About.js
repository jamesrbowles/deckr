import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col justify-center w-10/12 max-w-lg  mx-auto">
      <header>
        <h1 className="mt-[75px] text-4xl py-5 mb-2">About</h1>
      </header>
      <p>
        This is a unique todo app that focuses on priority.
        <br />
        <br />
        Keeping your newest added task to the forefront leaves less temptation
        to shift your focus around all of your different tasks that need to be
        taken care of.
      </p>
    </div>
  );
};

export default About;
