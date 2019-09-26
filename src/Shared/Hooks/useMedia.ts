import { useMediaQuery } from '@material-ui/core';

export const useSmallMedia = useMediaQuery('(min-width:576px)');
export const useMediumMedia = useMediaQuery('(min-width:768px)');
export const useLargeMedia = useMediaQuery('(min-width:992px)');
