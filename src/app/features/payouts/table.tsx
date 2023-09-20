import { useEffect, useMemo, useState } from "react";
import { fetchPayouts } from "./payoutSlice";
import { PayoutDto } from "./types";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Pill } from "../../components/statusPill";
import dayjs from 'dayjs';
import { StyledTable, StyledTableHeader, StyledTableRow } from "../../components/styles/table.styled";
import { Pagination } from "../../components/pagination";
import { MessageBox } from "../../components/styles";

export const Table: React.FC<unknown>  = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
    const payoutRes = useAppSelector(state => state.payout)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchPayouts())
    }, [])

    useMemo(() => {
        if(payoutRes?.metadata)
            setCurrentPage(payoutRes?.metadata?.page)
    }, [payoutRes])
    return (
        <>
            <StyledTable>
                
                <StyledTableRow>
                    <StyledTableHeader>Username</StyledTableHeader>
                    <StyledTableHeader>Value</StyledTableHeader>
                    <StyledTableHeader>Status</StyledTableHeader>
                    <StyledTableHeader>Date and Time</StyledTableHeader>
                </StyledTableRow>
                {payoutRes.loading &&  <MessageBox p="10px" m='10px' textColor="#6F767E" bg="#F4F4F480">Loading...</MessageBox>}
                {!payoutRes.loading && payoutRes.error ? <MessageBox p="10px" m='10px' textColor="#f1f3f6" bg="#f36c6cb3">Error: {payoutRes.error}</MessageBox> : null}
                {!payoutRes.loading && payoutRes?.payouts?.length ? (
                    <>
                    {payoutRes.payouts.map((payout : PayoutDto, index: number)=> (
                        <StyledTableRow key={index} bg={index%2 === 0 ? "#F4F4F480" : ""}>
                        <StyledTableHeader>{payout.username}</StyledTableHeader>
                        <StyledTableHeader>{payout.value}</StyledTableHeader>
                        <StyledTableHeader>
                            <Pill status={payout.status}/>
                        </StyledTableHeader>
                        <StyledTableHeader>{dayjs(payout.dateAndTime).format('ddd, MMM D, HH:mm')}</StyledTableHeader>
                    </StyledTableRow>
                    ))}
                    </>
                ) : !payoutRes?.loading && !payoutRes.error ? <MessageBox p="10px" m='10px' textColor="#6F767E" bg="#F4F4F480">There are no records to show</MessageBox> : null }
            </StyledTable>
            {
                payoutRes.metadata && 
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(payoutRes.metadata.totalCount/payoutRes.metadata.limit)}
                    onPageChange={handlePageChange}
                />
            }
            
        </>
    
    );
}
  