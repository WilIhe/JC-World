import Header from "../components/Header";
import Content from "../components/Content";
import FilterAndSearch from "../components/FilterAndSearch";
import { CssBaseline } from '@mui/material'


const HomePage = () =>
{
    return (
    <CssBaseline>
      <Header />
      <main>
        <FilterAndSearch />
        <Content />
      </main>
    </CssBaseline>
    );
}

export default HomePage;