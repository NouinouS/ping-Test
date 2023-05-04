import styled from 'styled-components';
import List from 'components/List';
import Ul from 'components/List/Ul';

const StyledList = styled(List)`
  grid-row: 5/-1;
  grid-column: 6/8;
  & > ${Ul} {
    { 
      padding-top: 5px;
      max-height: 100%;
    }
`;

export default StyledList;