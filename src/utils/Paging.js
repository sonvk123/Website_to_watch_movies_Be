const paginate = (array, pageSize, currentPage) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const totalRecords = array.length; // Tổng số bản ghi
  const totalPages = Math.ceil(totalRecords / pageSize); // Tổng số trang

  // Lấy dữ liệu cho trang hiện tại
  const currentPageData = array.slice(startIndex, endIndex);

  // Tổng số bản ghi
  const currentPageDataLength = currentPageData.length;

  return {
    totalRecords,
    totalPages,
    currentPageData,
    currentPageDataLength,
  };
};

module.exports = paginate;
