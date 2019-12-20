import {sum, min, kali} from './sum';

import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import "./setupTests"

describe ('Test Jest', () => {

  let a = 2;
  let b = 2;

  it('Test Persamaan', () => {
    expect(sum(2,2)).toEqual(4);
    expect(sum(1,2)).toEqual(3);
    expect(min(a,b)).toEqual(0);
    expect(kali(a,b)).toEqual(4);
  });
});

describe ('Test Component Enzyme', () => {
  it('Render Component', () => {
    shallow(<App />)
  });
});

describe("test mocks",() => {
  it('Render Component', () => {
    const mock = jest.fn();

    let result = mock ("foo");
    expect (result).toBeUndefined();
    expect (mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith("foo");
  });
});