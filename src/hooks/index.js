export const useFeedRedirect = (props) => {
    if(localStorage.getItem('token')) {
        return props.history.push('/dashboard');
      } else {
        return props.history.push('/');
      };
};