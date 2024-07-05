import { Container, Profile } from './styles.js';

export function Header() {
    return (
        <Container>
            <Profile>
                <img
                    src="https://github.com/macedocmateus.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Mateus Macedo</strong>
                </div>
            </Profile>
        </Container>
    );
}
