import React from 'react';
import { format } from 'date-fns';
import { Container } from './style';

interface ToolTipProps {
  createdAt?: Date;
  finishedAt?: Date;
  title:string;
}
const ToolTip: React.FC<ToolTipProps> = ({
  children, createdAt, finishedAt, title,

}) => {
  const date = createdAt ? format(new Date(createdAt), 'dd-MMM-yyyy HH:mm:ss') : '';
  return (
    <Container>
      <span>{`${title}  ${date}`}</span>

      {children}
    </Container>
  );
};

export default ToolTip;
