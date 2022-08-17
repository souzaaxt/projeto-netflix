import Banner from "../../components/Banner";
import { Header } from "../../components/Header";
import { SectionMovies } from "../../components/SectionMovies";
import { BrowseContainer } from "./style";

export function Browse () {
    return (
        <BrowseContainer>
            <Header />
            <Banner />
            <SectionMovies />
        </BrowseContainer>
    )
}