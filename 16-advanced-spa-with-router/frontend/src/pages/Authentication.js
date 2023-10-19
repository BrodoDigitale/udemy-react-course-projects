import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';

export function AuthenticationPage() {
  return <AuthForm />;
}

export const authAction = async({request}) => {

  //check if it is login or signup mode
  const urlParams = new URL(request.url).searchParams;
  let mode = urlParams.get("mode");

  if(mode !== "signup" && mode !== "login") {
    mode = "login";
  }

  //retrieve form data
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  //send request
  const res = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  //handle response
  if(res.status === 422 || res.status === 401) {
    return res;
  }

  if(!res.ok) {
    throw json({ message: 'Authentification error'}, {status: 500});
  }

  //success
  return redirect("/");
}