import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import renderer from 'react-test-renderer'


it('renders simple addition', () => {
  debugger
  const tree = renderer.create(
    <Board values={["23","+", "4"]}></Board>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders simple addition with integer added', () => {
  var board = new Board({values: ["22","+","3"]});
  board.handler("3")
  expect(board.handler("=")).toEqual(55)
});
//
it('renders subtaction', () => {
  var board = new Board({values: ["22","-","3"]});
  board.handler("3")
  expect(board.handler("=")).toEqual(-11)
});

it('renders addition', () => {
  var board = new Board({values: ["22","+","33","+","22"]});
  expect(board.handler("=")).toEqual(77)
});

it('renders complex evaluation', () => {
  var board = new Board({values: ["2","*","10","+","22","-", "55"]});
  expect(board.handler("=")).toEqual(-13)
});

it('renders complex evaluation', () => {
  var board = new Board({values: ["2","*","10","+","22","-", "55", "/", "2"]});
  expect(board.handler("=")).toEqual(-6.5)
});
