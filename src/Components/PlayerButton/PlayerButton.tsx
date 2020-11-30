import React, { FC, ReactNode, ReactText } from 'react';
import './PlayerButton.scss';

interface PlayerButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  children?: ReactText
  className?: string

  // allow for spreading other props to this HOC
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [props:string]: any;
}

const PlayerButton: FC<PlayerButtonInterface> =
  ({ children, className, type, ...props }) => {

    return (
      <button
        type="button"
        className={`text-lg bg-purple-600 px-4 py-1 m-1 h-12 text-white text-2xl font-extrabold rounded-md flex items-center justify-center ${className || ''}`}
        {...props}
      >
        {children}
      </button>
    );
  };

export { PlayerButton };
