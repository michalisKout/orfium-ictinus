// @ts-nocheck
/** @jsx jsx */
import { jsx } from '@emotion/core';
import useTheme from 'hooks/useTheme';
import usePagination from 'hooks/usePagination';
import IconButton from '../IconButton';

type Props = {
  page: number;
  count: number;
  onChange?: (page: number) => void;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  showFirstButton?: boolean;
  showLastButton?: boolean;
};

const Pagination = ({ page = 1, count, onChange = () => {} }: Props) => {
  const theme = useTheme();
  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    navigateToFirstPage,
    navigateToLastPage,
    navigateToNextPage,
    navigateToPrevPage,
  } = usePagination({ page, count, onChange });

  return (
    <div
      css={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        '> *': { padding: theme.spacing.sm },
      }}
    >
      <IconButton
        name={'arrowToLeft'}
        onClick={navigateToFirstPage}
        iconSize={24}
        disabled={!hasPrevPage}
      />
      <IconButton
        name={'arrowLeft'}
        iconSize={24}
        onClick={navigateToPrevPage}
        disabled={!hasPrevPage}
      />

      <div>
        page {currentPage} of {count}
      </div>

      <IconButton
        name={'arrowRight'}
        iconSize={24}
        onClick={navigateToNextPage}
        disabled={!hasNextPage}
      />
      <IconButton
        name={'arrowToRight'}
        iconSize={24}
        onClick={navigateToLastPage}
        disabled={!hasNextPage}
      />
    </div>
  );
};

export default Pagination;