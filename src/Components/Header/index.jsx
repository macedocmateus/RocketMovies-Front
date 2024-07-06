import { Container, Profile } from './styles.js';

export function Header() {
    return (
        <Container>
            <Profile>
                <a href="#">RocketMovies</a>

                <form>
                    <input type="text" placeholder="Pesquisar pelo titulo" />
                </form>

                <div>
                    <div>
                        <strong>Mateus Macedo</strong>
                        <a href="#">sair</a>
                    </div>

                    <img
                        src="https://github.com/macedocmateus.png"
                        alt="Foto do usuário"
                    />
                </div>
            </Profile>
        </Container>
    );
}
