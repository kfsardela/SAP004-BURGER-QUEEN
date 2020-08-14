import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
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
import swal from 'sweetalert';

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
  let history = useHistory();


  const register = () => {
    if (!name || !email || !section || !password) {
      alert("Preencha todos os campos")
      }
      else {
    firebaseFunctions.auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
      swal({
        text: "Usuario cadastrado com sucesso",
        icon: "success",
        button: "Ok",
      });
        return firebaseFunctions.db.collection("users").doc(auth.user.uid).set({
          section: section,  
          name: name,
          email: email,
    
        })
        .then(() => {
          if(section === "kitchen") {
            history.push('/kitchen')
          } else {
            history.push('/saloon')
          }
        })
    })
    .catch((error) =>{
      if (error.code === "auth/invalid-email"){
        swal({
          text: "Email inválido",
          icon: "error",
          button: "Ok",
        });
      }
      else if (error.code === "auth/weak-password"){
        swal({
          text: "Digite uma senha de pelo menos 6 digitos",
          icon: "warning",
          button: "Ok",
        });
        }
        else if (error.code === "auth/email-already-in-use"){
          swal({
            text: "Email já cadastrado",
            icon: "info",
            button: "Ok",
          });
          }
      else{
        alert(error.code)
      }
    })
  
  }
  }
  const classes = useStyles();


  return (
    <main className= "reg-img">
      <Container component="main" maxWidth="sm" className="register">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className="link-login">
          <p><img alt="title5"className="titleRegister" src="./images/cadastro.png"/> </p>
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>.
              <div className= "Reg-select">
              <label className="link-login">Qual o setor que você trabalha?</label>
              <NativeSelect
                value={section}
                onChange= {e=> setSection(e.target.value)}
                name="section"
                className={[classes.selectEmpty, "select-option"]} 
                inputProps={{ "aria-label": "age" }}
              >
                <option value="" hidden>Selecionar</option>
                <option value="kitchen">Cozinha</option>
                <option value="saloon">Atendimento</option>
              </NativeSelect>
              </div>
              <Grid item xs={12}>
              <Input placeholder= "Nome completo" type= "text" value={name} className="inputLogin" onChange={e=> setName(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
              <Input placeholder= "E-mail" type= "email" value={email} className="inputLogin" onChange={e=> setEmail(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
              <Input placeholder= "Senha" type= "password" value={password} className="inputLogin" onChange={e=> setPassword(e.target.value)}/>
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
