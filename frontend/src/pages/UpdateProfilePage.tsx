import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from 'state/context';
import UpdateProfileForm from 'forms/UpdateProfileForm';
import { updateUser, deleteUser, logout } from 'utils/auth';
import { user } from 'state/user/userActions';
import { getUser } from 'utils/user';
import Settings from 'components/Settings';
import StPaper from 'styledComponents/StPaper';

function UpdateProfilePage() {
  const history = useHistory();
  const { state, dispatch } = useContext(GlobalContext);
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [error, setError] = useState<string>('');
  const userID = state.user?.id!;
  const email = state.user?.email!;

  useEffect(() => {
    setFirstname(state.user?.first_name!);
    setLastname(state.user?.last_name!);
    setCompany(state.user?.company!);
  }, [state]);

  const handleSubmit = async (_: React.MouseEvent) => {
    setError('');

    try {
      const data = await updateUser(userID, email, firstname, lastname, company);

      if (data) {
        const myUser = await getUser();
        dispatch(user(myUser));
        history.push('/profile');
      }
    } catch (err) {
      if (err instanceof Error) {
        // handle errors thrown from frontend
        setError(err.message);
        console.log(error);
      } else {
        // handle errors thrown from backend
        setError(err);
        console.log(error);
      }
    }
  };

  const PasswordChange = (_: React.MouseEvent) => {
    history.push('/changepassword');
  };

  const DeleteUser = async (_: React.MouseEvent) => {
    setError('');

    try {
      const data = await deleteUser(userID);

      if (data) {
        logout();
        history.push('/logout');
      }
    } catch (err) {
      if (err instanceof Error) {
        // handle errors thrown from frontend
        setError(err.message);
        console.log(error);
      } else {
        // handle errors thrown from backend
        setError(err);
        console.log(error);
      }
    }
  };

  return (
    <StPaper elevation={0}>
      <UpdateProfileForm
        firstname={state.user?.first_name}
        lastname={state.user?.last_name}
        company={state.user?.company}
        onFirstnameChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFirstname(e.currentTarget.value)
        }
        onLastnameChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLastname(e.currentTarget.value)
        }
        onCompanyChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCompany(e.currentTarget.value)
        }
        onSubmitButtonClick={handleSubmit}
      />

      <Settings onPasswordChange={PasswordChange} onDelete={DeleteUser} />
    </StPaper>
  );
}

export default UpdateProfilePage;
