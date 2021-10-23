import { Switch, Redirect, Route } from 'react-router-dom';
import { useAppSelector } from './hooks';

import Home from './modules/Home';
import LoginAdminPage from './modules/AuthAdminPage/components/LoginAdminPage';
import RegisterPage from './modules/AuthPage/components/RegisterPage';
import LoginPage from './modules/AuthPage/components/LoginPage';
import AdminProfile from './modules/AdminProfile';
import Profile from './modules/Profile';
import Filters from './modules/Users/components/Filters';

import { Container } from './modules/common/style';
import Navbar from './modules/Navbar';
import NonAuthNavbar from './modules/Navbar/nonAuthNavbar';

const useRouter = (isAuthenticated: boolean, isAdmin: boolean) => {
  const users = useAppSelector((state) => state.allUsers.data);

  if (isAuthenticated || isAdmin) {
    return (
      <>
        <Navbar isAdmin={isAdmin} />
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/profile">
            <Container>
              {isAdmin ? <AdminProfile /> : <Profile />}
            </Container>
          </Route>

          <Route path="/users/:userId">
            <Container>
              <Profile />
            </Container>
          </Route>

          <Route path="/users">
            <Container>
              <Filters users={users} />
            </Container>
          </Route>

          <Redirect to="/home" />
        </Switch>
      </>
    );
  }

  return (
    <>
      <NonAuthNavbar />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/top-secret-route">
          <LoginAdminPage />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Redirect to="/home" />
      </Switch>
    </>
  );
};
export default useRouter;
