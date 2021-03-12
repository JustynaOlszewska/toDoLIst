import React, { lazy, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {
  StyledMain,
  StyledSection,
  StyledH1
} from '../../styles/stylesComponents/StyledMain';
const Form = lazy(() => import('../organism/Form'));
const TaskList = lazy(() => import('../organism/TaskList'));
const Alert = lazy(() => import('../molecules/Alert'));

const Main = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <StyledMain>
      <StyledSection primary>
        <Form />
        <Alert />
      </StyledSection>
      <StyledSection>
        <StyledH1>Organize your time</StyledH1>
        <TaskList />
      </StyledSection>
    </StyledMain>
  );
};

export default Main;