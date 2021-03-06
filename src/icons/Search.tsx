import * as React from 'react';

export const Search: React.FC<{}> = props => (
  <svg width={24} height={24} fill="none" {...props}>
    <path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.832 14.077l-.35.514 4.457 4.457-.891.891-4.457-4.457-.514.35a6.612 6.612 0 111.754-1.754zM5.01 10.362a5.351 5.351 0 1010.702 0 5.351 5.351 0 00-10.702 0z"
      fill="#C2C2C2"
    />
  </svg>
)
