/**
 *
 * AddButton
 *
 */

import styled from 'styled-components';

const AddButton = styled.button`
text-indent: -9999px;
box-sizing: border-box;
position: relative;
display: block;
width: 22px;
height: 22px;
border: 2px solid;
transform: scale(var(--ggs,1));
border-radius: 22px;
color: ${props => props.theme.color};
background-color: ${props => props.theme.bgColor};
float: left;
margin-right: 10px;

& ::after, & ::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 60%;
  height: 12%;
  background: ${props => props.theme.color};
  border-radius: 5px;
  top: 44%;
  left: 20%;
}

& ::after {
  width: 12%;
  height: 60%;
  top: 20%;
  left: 44%;
}
`;

AddButton.defaultProps = {
  type: 'button',
  theme: {
    color: '#0099FF',
    bgColor: 'white'
  }
};

export default AddButton;
