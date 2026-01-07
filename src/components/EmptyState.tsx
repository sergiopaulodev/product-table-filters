type EmptyStateProps = {
    message: string;
};

export const EmptyState = ({ message }: EmptyStateProps) => {
    return <p>{message}</p>;
}