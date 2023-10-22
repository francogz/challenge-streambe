import React from "react";
import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

const DefaultField = (props) => {
  const { name, type, label } = props;

  // RETURN
  return (
    <Container>
      <CustomField
        name={name}
        type={type}
        label={label}
        variant="outlined"
        color="primary"
        placeholder={label}
        {...props}
      />
      <ErrorMessageCustom name={name} component={CustomError} />
    </Container>
  );
};

export default DefaultField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const CustomError = styled.span`
  font-size: 0.89rem;
  font-weight: 700;
  color: #f8423f;
`;

const CustomField = styled(Field)`
  border: solid 1px #007bff;
  width: 100%;
  text-align: center;
  color: #007bff;
  font-weight: bold;
  height: 3rem;
  border-radius: 10px;
  outline: none;
`;

const ErrorMessageCustom = styled(ErrorMessage)`
  position: absolute;
  left: 10px;
  bottom: -18px;
  width: fit-content;
  overflow: visible;
`;
