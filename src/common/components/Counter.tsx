import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import CounterStore from '../store/CounterStore';
import './counter.css';

interface CounterProps {
  counter?: CounterStore;
}

type Props = CounterProps;

@inject('counter')
@observer
class Counter extends Component<Props> {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1 className="iam">{counter?.number}</h1>
        <button type="button" onClick={counter?.increase}>+</button>
        <button type="button" onClick={counter?.decrease}>-</button>
      </div>
    );
  }
}

export default observer(Counter);
