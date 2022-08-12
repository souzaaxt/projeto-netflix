import { ProfilesContainer } from "./style";
import backgroundImg from '../../assets/background_login.jpg'
import { PasswordInput } from "../../components/PasswordInput";

export function Profiles () {
    return (
        <ProfilesContainer>
            <div className="background">
                <img src={ backgroundImg } alt="" />
            </div>
            <div className="user">
                <form>
                    <header>
                        <h2>Entrar</h2>
                    </header>
                    <main>
                        <PasswordInput />
                    </main>
                </form>
            </div>
        </ProfilesContainer>
    )
}