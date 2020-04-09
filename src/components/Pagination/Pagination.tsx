// @ts-nocheck
/** @jsx jsx */
import { jsx } from '@emotion/core';
import useTheme from 'hooks/useTheme';
import usePagination from 'hooks/usePagination';
import IconButton from '../IconButton';

type Props = {
  /** The current page you are on if you need to control it, defaults to 1 **/
  page: number;
  /** The total pages **/
  count: number;
  /** An onChange callback that will return the page on navigation **/
  onChange?: (page: number) => void;
  /** Hide the double button functionality, this way the jump to first and last page will be hidden **/
  hideDoubleButtons?: boolean;
};

const Pagination = ({ page = 1, count, onChange = () => {}, hideDoubleButtons = false }: Props) => {
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
      {!hideDoubleButtons && (
        <IconButton
          name={'arrowToLeft'}
          onClick={navigateToFirstPage}
          iconSize={24}
          disabled={!hasPrevPage}
        />
      )}
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
      {!hideDoubleButtons && (
        <IconButton
          name={'arrowToRight'}
          iconSize={24}
          onClick={navigateToLastPage}
          disabled={!hasNextPage}
        />
      )}
    </div>
  );
};

export default Pagination;
