import React, { lazy, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {
  StyledMain,
  StyledSection,
  StyledH1
} from '../../styles/stylesComponents/StyledMain';
import ErrorBoundary from '../../ErrorBoundary';
const Form = lazy(() => import('../organism/form/Form'));
const TaskList = lazy(() => import('../organism/taskList/TaskList'));
const Alert = lazy(() => import('../molecules/alert/Alert'));

const Main: React.FC = () => {
  useEffect((): void => {
    M.AutoInit();
  }, []);

  return (
    <StyledMain>
      <ErrorBoundary>
        <StyledSection primary>
          <Form />
          <Alert />
        </StyledSection>
      </ErrorBoundary>
      <ErrorBoundary>
        <StyledSection>
          <StyledH1>Organize your time</StyledH1>
          <TaskList />
        </StyledSection>
      </ErrorBoundary>
    </StyledMain>
  );
};

export default Main;
