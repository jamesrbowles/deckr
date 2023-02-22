import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [nameValue, setNameValue] = useState(false);
  const [emailValue, setEmailValue] = useState(false);
  const [messageValue, setMessageValue] = useState(false);

  const handleNameValue = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmailValue = (e) => {
    setEmailValue(e.target.value);
  };
  const handleMessageValue = (e) => {
    setMessageValue(e.target.value);
  };

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div className="flex flex-col justify-center w-6/12 max-w-lg  mx-auto">
      <header>
        <h1 className="mt-[75px] text-4xl py-5 mb-5 text-left">Contact</h1>
      </header>

      <form
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/hello@jamesbowles.co"
        method="POST"
      >
        <div className="input-group">
          <label
            className="input-group__label"
            htmlFor="nameInput"
          >
            Name
          </label>
          <input
            onInput={handleNameValue}
            id="nameInput"
            className="mb-5 input-group__input font-opensans"
            type="text"
            placeholder="Enter your name..."
            {...register('name', {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-red mt-1">
              {errors.name.type === 'required' && 'This field is required.'}
              {errors.name.type === 'maxLength' &&
                'Max length is 100 characters.'}
            </p>
          )}
        </div>

        <div className="input-group">
          <label
            className="input-group__label"
            htmlFor="emailInput"
          >
            Email
          </label>
          <input
            onInput={handleEmailValue}
            id="emailInput"
            className="mb-5 input-group__input font-opensans"
            placeholder="Enter your email..."
            type="text"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-red mt-1">
              {errors.name.type === 'required' && 'This field is required.'}
              {errors.name.type === 'pattern' && 'Invalid email address.'}
            </p>
          )}
        </div>

        <div className="input-group">
          <label
            className="input-group__label"
            htmlFor="messageInput"
          >
            Message
          </label>
          <textarea
            onInput={handleMessageValue}
            id="messageInput"
            className="mb-5 input-group__input font-opensans"
            placeholder="Enter your message..."
            type="text"
            rows="4"
            cols="50"
            {...register('message', {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-red mt-1">
              {errors.name.type === 'required' && 'This field is required.'}
              {errors.name.type === 'maxLength' &&
                'Max length is 2000 characters.'}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-darker-green border-darker-green hover:bg-opacity-90 rounded-md w-full py-3 text-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
