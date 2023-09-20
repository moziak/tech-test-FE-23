import * as React from "react";
import { Ellipsis, PageButton, PaginationContainer } from "./styles/pagination.styled";
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    maxButtons?: number;
    onPageChange: (newPage: number) => void;
  }
export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    maxButtons = 5,
  }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    const getPageButtons = () => {
        if (totalPages <= maxButtons) {
          return pageNumbers;
        }
    
        const halfMaxButtons = Math.floor(maxButtons / 2);
    
        if (currentPage <= halfMaxButtons) {
          return [...pageNumbers.slice(0, maxButtons - 2), 'ellipsis', totalPages];
        }
    
        if (currentPage >= totalPages - halfMaxButtons) {
          return [1, 'ellipsis', ...pageNumbers.slice(-maxButtons + 2)];
        }
    
        return [1, 'ellipsis', ...pageNumbers.slice(currentPage - halfMaxButtons, currentPage + halfMaxButtons), 'ellipsis', totalPages];
      };
    
      const pageButtons = getPageButtons();
    return (
      <PaginationContainer>
        {pageButtons.map((page, index) => (
            <React.Fragment key={index}>
            {page === 'ellipsis' ? (
              <Ellipsis>...</Ellipsis>
            ) : (
              <PageButton
                key={page}
                onClick={() => onPageChange(page as number)}
                active={page === currentPage}
              >
                {page}
              </PageButton>
            )}
          </React.Fragment>
          
        ))}
      </PaginationContainer>
    );
  };