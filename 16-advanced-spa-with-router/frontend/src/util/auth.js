import { redirect } from "react-router-dom";


export const getTokenDuration = () => {
  const storedVal = localStorage.getItem("expiration");
  const expirationdate = new Date(storedVal);
  const today = new Date();
  //calcutes difference in milliseconds
  //if positive = token is valid
  const duration = expirationdate.getTime() - today.getTime();
  return duration;
};

export const getAuthToken = () => {
    const token = localStorage.getItem('token');
    const duration = getTokenDuration();

    if(!token) {
        return null;
    }
    if(duration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export const tokenLoader = () => {
    return getAuthToken();
}

export const checkAuthLoader = () => {
    const token = getAuthToken();

    if(!token) {
        return redirect('/');
    }
    return null;
}