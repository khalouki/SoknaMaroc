import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    };
    const pageNumbers = [...Array(totalPages)].map((_, index) => index + 1);

    return (
        <ul className="flex items-center space-x-1 text-sm">
            {/* Previous Button */}
            <li>
                <a
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="flex items-center justify-center rounded-md w-8 h-8 text-gray-500 border border-gray-300  ${currentPage === 1 ? 'cursor-not-allowed text-gray-300' : 'hover:bg-gray-100 hover:text-gray-700"
                        
                >
                    <span className="sr-only">Previous</span>
                    <i className="fa-solid fa-arrow-left"></i>                
                    </a>
            </li>

            {/* Page Numbers */}
            {pageNumbers.map((page) => (
                <li key={page}>
                    <a
                        href="#"
                        onClick={() => handlePageChange(page)}
                        className={`flex items-center justify-center rounded-md font-fantasy w-8 h-8 ${currentPage === page
                                ? 'text-white bg-black '
                                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                            }`}
                    >
                        {page}
                    </a>
                </li>
            ))}

            {/* Next Button */}
            <li>
                <a
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`flex items-center justify-center rounded-md w-8 h-8 text-gray-500 border border-gray-300  ${currentPage === totalPages ? 'cursor-not-allowed text-gray-300' : 'hover:bg-gray-100 hover:text-gray-700'
                        }`}
                >
                    <span className="sr-only">Next</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </li>
        </ul>
    );
};

export default Pagination;
