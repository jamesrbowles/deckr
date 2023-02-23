import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col justify-center w-10/12 max-w-lg  mx-auto">
      <header>
        <h1 className="mt-[75px] text-4xl py-5 mb-2">About</h1>
      </header>
      <p>
        Welcome to deckr! A unique todo app that focuses on priority.
        <br />
        <br />
        Our app is designed to help you stay organized and productive by
        allowing you to create and manage your to-do list with ease. However, we
        believe that the key to effective task management is not just about
        having a long list of tasks to complete but rather focusing on one task
        at a time.
        <br />
        <br />
        When you focus on one task at a time, you are able to give it your full
        attention and complete it more efficiently. This can lead to a greater
        sense of accomplishment and a higher level of productivity.
        <br />
        <br />
        At deckr, we encourage you to prioritize your tasks and focus on one at
        a time. However, our app allows you to easily see and manage all your
        tasks by using the fan button when needed.
        <br />
        <br />
        Start using deckr today and experience the benefits of focusing on one
        task at a time!
      </p>
    </div>
  );
};

export default About;
