import styled from 'styled-components';
import backimg from '../../assets/notepad.svg';

const NoteBook = styled.div`

width: 700px;
height:100vh;
padding-top: 120px;
padding-right:22px;
padding-left:22px;

background: url( ${backimg}) no-repeat;
background-size: cover;
`;
export default NoteBook;
