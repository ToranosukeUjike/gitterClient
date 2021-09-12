import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports'
import '@aws-amplify/ui-vue';
import { Scalars } from 'practice-gitter';

Amplify.configure(awsconfig);

class UserAuthInteractor {
  public async isSignIn(): Promise<boolean> {
    try {
      await Auth.currentAuthenticatedUser ({
        bypassCache: false,
      });
      return true;
    } catch(error) {
      return false;
    }
  }

  public async userDetails() {
    const userDetails =  await Auth.currentAuthenticatedUser()
    return userDetails;
  }

  public async signIn(
    username: string, 
    password: string
  ): Promise<void> {
    await Auth.signIn(username, password);
  }

  public async signOut(): Promise<void> {
    await Auth.signOut();
  }

  public async signUp(
    email: Scalars['AWSEmail'], 
    username: string, 
    password: string
  ): Promise<void> {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email }
      });
    } catch(error) {
      console.log('error sign up', error);
    }
  }

  public async confirmSignUp(
    username: string, 
    code: string,
  ): Promise<void> {
    try {
      await Auth.confirmSignUp(username, code);
    } catch(error) {
      console.log('error confirming sign up', error);
    }
  }
}

export const userFunctions = new UserAuthInteractor();