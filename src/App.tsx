import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextField from './components/TextField';
import SideBar from './components/SideBar';
import { defaultTextOptions } from './constants';

const StyledApp = styled.div`
  position: relative;
  height: 100%;
  text-align: center;
  background-color: #f4f4f4;
  overflow: scroll;
  .main {
    width: calc(100% - 240px);
    box-sizing: border-box;
    height: calc(100% - 60px);
    padding-top: 40px;
    display: flex;
    justify-content: center;
  }
`;

function App() {
  const [textOptions, setTextOptions] = useState(defaultTextOptions);

  useEffect(() => {
    const savedOptions = localStorage.getItem('textOptions');
    if (savedOptions) {
      console.log('saved set');
      setTextOptions(JSON.parse(savedOptions));
    }
  }, []);

  return (
    <StyledApp>
      <div className="main">
        <TextField textOptions={textOptions} />
      </div>
      <SideBar textOptions={textOptions} setTextOptions={setTextOptions} />
    </StyledApp>
  );
}

export default App;
