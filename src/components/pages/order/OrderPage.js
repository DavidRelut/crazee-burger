import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from '../navbar/Navbar';


export default function OrderPage() {

  const {name} = useParams()
  
  return (
    <OrderPageSyled>
      <div className='container'>
        <Navbar name={name} />
      </div>
    </OrderPageSyled>
  );
}

const OrderPageSyled = styled.div`
  background: ${theme.colors.primary};
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  .container {
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px 15px 15px;

    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.extraRound};
    margin: ${theme.spacing.md};
    width: 100%;
    max-width: 1400px;
  }
`;