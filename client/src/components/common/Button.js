import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  font-size: 14px;
  color: ${props => (props.color === 'primary' ? 'rgba(26, 137, 23, 1)' : 'rgba(41, 41, 41, 1)')};
  border: 1px solid ${props => (props.color === 'primary' ? 'rgba(26, 137, 23, 1)' : 'rgba(117, 117, 117, 1)')};
  border-radius: 4px;
  padding: 7px 16px 9px;
  background-color: #fff;
  cursor: pointer;
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
