import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 11.6rem;
    width: 100%;

    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    padding: 0 8rem;
`;

export const Profile = styled.div`
    > img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
    }
`;
