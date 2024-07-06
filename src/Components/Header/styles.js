import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 11.6rem;
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;

    padding: 2.4rem 12.3rem;

    > a {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK};
        font-weight: 700;
    }

    > form {
        display: flex;
        flex: 1;
        justify-content: center;

        input {
            flex: 1;
            max-width: 63rem;
            height: 5.6rem;
            border-radius: 1rem;
            border: 0;
            padding: 1.9rem 2.4rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            font-size: 1.4rem;
            font-weight: 400;
        }
    }

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.9rem;

        img {
            width: 6.4rem;
            height: 6.4rem;
            border-radius: 50%;
            cursor: pointer;
        }

        div {
            display: flex;
            flex-direction: column;
            text-align: end;

            strong {
                font-size: 1.4rem;
            }

            a {
                font-size: 1.4rem;
                color: ${({ theme }) => theme.COLORS.GRAY_300};
            }
        }
    }
`;
