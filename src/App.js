import React from 'react';

import './App.css';
import SampleParentComponent from './Component/SampleParentComponent';

const App=()=>{
  return (
    <div className='app-container'>
      <h1>Flexible React Component</h1>
      <SampleParentComponent/>
    </div>

  )
}
export default App;