import { useMediaQuery } from '@material-ui/core';

export const useSmallMedia = () => useMediaQuery('(max-width:576px)');
export const useMediumMedia = () => useMediaQuery('(max-width:768px)');
export const useLargeMedia = () => useMediaQuery('(max-width:992px)');
export const useExtraLargeMedia = () => useMediaQuery('(max-width:1200px)');
