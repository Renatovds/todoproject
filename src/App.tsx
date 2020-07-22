import React from 'react';
import Main from './pages/Main';
import GlobalStyle from './styles/globalStyle';
import { TaskData } from './hooks/taskData';

const App: React.FC = () => (
  <>
    <TaskData>
      <Main />
    </TaskData>
    <GlobalStyle />
  </>
);

export default App;
