import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './Containers/App';

import types from './test/types';
types();

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
