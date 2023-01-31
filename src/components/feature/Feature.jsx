import React from 'react';
import './feature.css';

export default function Feature({ title, text }) {
  return (
    // this style appears differently for the topmost feature, and is styled differently for the bottom 3 features.
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}