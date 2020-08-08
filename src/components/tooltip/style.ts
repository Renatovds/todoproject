import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span{
    width: 160px;
    background: #f8dd76;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #232129;
    opacity: 0;
    transition: opacity 0.3s;
    text-align:center;
    visibility: hidden;

    &::before {
      content: '';
      border: solid;
      border-color: #f8dd76 transparent;
      position: absolute;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }

  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }

`;
