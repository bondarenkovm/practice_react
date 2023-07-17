import user from "../data/user";
import data from "../data/data";
import { Container } from "./App.styled";

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </Container>
  );
}

export default App;
