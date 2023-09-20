import { Container, Flex, SubTitle, Title } from "../../components/styles"
import { Table } from "./table"
import { useAppDispatch } from "../../hooks"
import { fetchPayouts, searchPayouts } from "./payoutSlice"
import SearchInputComponent from "../../components/searchInput"


export const Payout: React.FC = () => {
  const dispatch = useAppDispatch()
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if(value.length < 1){
      dispatch(fetchPayouts())
    }else{
      dispatch(searchPayouts(value));
    }
    
  };
  return (
    <Container>
      <Title>Payouts</Title>
      <Flex>
        <SubTitle>
          <div></div>
          Payout History
        </SubTitle>
        <SearchInputComponent handleChange={handleInputChange} />
        
      </Flex>
      <Table />
    </Container>
  )
}