import Skeleton from '@mui/material/Skeleton';

export const Placeholder = (props) => {
    const { variant, width, height } = props;

    return (
        <Skeleton variant={variant} width={width} height={height} />
    );
}