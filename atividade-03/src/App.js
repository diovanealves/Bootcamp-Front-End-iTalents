import { Form } from "./components/Form";
import { Greeting } from "./components/Greeting";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";

import { MovieListData } from "./data/movieListData";

function App() {
  return (
    <div>
      <Header name="Diovane" />
      <Greeting name="Diovane">
        Meus filmes favoritos podem ser uma ótima escolha para você explorar!
      </Greeting>
      <MovieList movies={MovieListData} />
      <Form />
    </div>
  );
}

export default App;
