import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1 className="text-5xl text-purple-500">Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
  </div>
);
