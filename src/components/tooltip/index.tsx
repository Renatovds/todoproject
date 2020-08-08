import React from 'react';
import { format } from 'date-fns';
import { Container } from './style';

interface ToolTipProps {
  createdAt?: Date;
  finishedAt?: Date;
  title:string;
}
const ToolTip: React.FC<ToolTipProps> = ({
  children, createdAt, title, finishedAt,

}) => {
  const createdDate = createdAt ? `${format(new Date(createdAt), 'dd/MMM/yyyy HH:mm:ss')} ` : '';
  const finishDate = finishedAt ? `${format(new Date(finishedAt), 'dd/MMM/yyyy HH:mm:ss')} ` : '';

  return (
    <Container>

      <span>
        {title}
        <br />
        {createdDate}
        <br />
        {finishDate ? `Concluída: ${finishDate}` : ''}
      </span>

      {children}
    </Container>
  );
};

export default ToolTip;
