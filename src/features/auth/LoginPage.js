import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, TextField, Button } from "@material-ui/core";
import { fetchUserLoginRequest } from "./redux";
import { REQUEST_STATUS } from "../../utils";

const { initial, succeeded, creates, error } = REQUEST_STATUS;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const status = useSelector((state) => state.currentUser.status);
  const hasError = useSelector((state) => state.currentUser.error);

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (status === succeeded) {
      history.push("/");
    }
  }, [status, history]);

  const canDispatch =
    [initial, creates, error].includes(status) &&
    [email, password].every(Boolean);

  const onLogin = (e) => {
    e.preventDefault();
    if (canDispatch) {
      dispatch(fetchUserLoginRequest({ username: email, password }));
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={onLogin}>
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
        <TextField
          id="login"
          label="Mot de passe"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Se connecter
        </Button>
        {hasError && <div>{hasError}</div>}{" "}
      </Grid>
    </form>
  );
};

export default LoginPage;
