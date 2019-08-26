import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({ pageForward, pageBack, count = 1, page }) {

  const totalPages = Math.ceil(count / 25);
  const clickBack = page >= totalPages ? true : false;
  const clickForward = page > 1 ? false : true;
  if(count === 0) page = 0;

  return (
    <>
      <button disabled={clickBack} onClick={() => pageBack()}>←</button>
      <label>Page {page} of {totalPages}</label>
      <button disabled={clickForward} onClick={() => pageForward()}>→</button>
    </>
  );
}

Pagination.propTypes = {
  pageForward: PropTypes.func.isRequired,
  pageBack: PropTypes.func.isRequired,
  count: PropTypes.number,
  page: PropTypes.number
};
