import { signInwWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInwWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};
export default SignIn;
