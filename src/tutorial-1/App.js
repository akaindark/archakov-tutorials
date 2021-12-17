import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";

function App() {

  return (
    <>
      <Profile name='Вася!' registredAt={new Date(2021, 5, 22)} />
      <ProfileClass name='Вася!' registredAt={new Date(2021, 5, 22)} />
    </>

  );
}

export default App;