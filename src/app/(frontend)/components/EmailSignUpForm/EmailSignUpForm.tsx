'use client';

import { useState } from 'react';
import { addEmailAction } from './addEmailAction';
import clsx from 'clsx';

const EmailSignUpForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setDisabled(true);
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;

    try {
      await addEmailAction(email);
      setEmail('');
      setMessage('Thank you for subscribing.');
    } catch {
      setDisabled(false);
      setMessage('Sorry, an error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="email">Sign up for updates:</label>
      <div className="flex gap-2">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={clsx('p-2 border', disabled ? 'border-gray-300' : '')}
          placeholder="Email"
          disabled={disabled}
        />
        <button
          type="submit"
          className={clsx(
            disabled ? 'bg-gray-300' : 'bg-primary',
            'text-white p-2 hover:cursor-pointer',
          )}
        >
          Subscribe
        </button>
      </div>
      {message && <p>{message}</p>}
    </form>
  );
};

export default EmailSignUpForm;
