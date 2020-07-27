import React, { useState, useEffect } from 'react';
import firebaseFunctions from "../firebase";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '../components/Input';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Register() {
  let [section, setSection] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [name, setName] = useState('');


  const register = () => {
    console.log(email, password, name, section)
    firebaseFunctions.auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
      console.log(auth.user.uid)
        return firebaseFunctions.db.collection("users").doc(auth.user.uid).set({
          section: section,  
          name: name,
          email: email,
    
        })
    })
  
  }

  const classes = useStyles();


  return (
    <main className= "reg-img">
      <Container component="main" maxWidth="xs" className="register">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className="link-login">
            Cadastro
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>.
              <div className= "Reg-select">
              <label className="link-login">Qual o setor que você trabalha?</label>
              <NativeSelect
                value={section}
                onChange= {e=> setSection(e.target.value)}
                name="section"
                className={classes.selectEmpty} 
                className="select-option"
                inputProps={{ "aria-label": "age" }}
              >
                <option value="" hidden>Selecionar</option>
                <option value="kitchen">Cozinha</option>
                <option value="saloon">Atendimento</option>
              </NativeSelect>
              </div>
              <Grid item xs={12}>
              <Input placeholder= "Nome completo" type= "text" value={name} onChange={e=> setName(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
              <Input placeholder= "E-mail" type= "email" value={email} onChange={e=> setEmail(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
              <Input placeholder= "Senha" type= "password" value={password} onChange={e=> setPassword(e.target.value)}/>
              </Grid>
            </Grid>
            <Button fullWidth variant="contained" color="primary" className="btn-register" onClick={register}>
              Cadastrar
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2" className="link-login">
                  Já possui conta? Acessar
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </main>
  );
}
