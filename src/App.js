import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import EventCreateForm from "./pages/Events/EventCreateForm";
import EventPage from "./pages/Events/EventPage";
import ContactCreateForm from "./pages/Contacts/ContactCreateForm";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";



function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id|| "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <PostsPage  message="No matching results were found. Please modify your search keyword "/>} />
          <Route exact path="/feed" render={() => <PostsPage  message="No matching results were found. Please modify your search keyword or follow a user." filter={`owner__followed__owner__profile=${profile_id}&`}/>} />
          <Route exact path="/liked" render={() => <PostsPage  message="No matching results were found. Please modify your search keyword or like a post" filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}/>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/events/create" render={() => <EventCreateForm/>} />
          <Route exact path="/events/:id" render={() => <EventPage />} />
          <Route exact path="/contacts/create" render={() => <ContactCreateForm/>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
