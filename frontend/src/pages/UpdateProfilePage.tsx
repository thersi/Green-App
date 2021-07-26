import React from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from 'state/context';
import UpdateProfileForm from 'forms/UpdateProfileForm';
import { updateUser } from 'utils/auth';

function UpdateProfilePage() {
  const history = useHistory();
  const { state } = useContext(GlobalContext);
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [error, setError] = useState<string>('');
  const userID = state.user?.id;
  const email = state.user?.email;


  console.log(typeof userID);

  // const [picture, setPicture] =
  const uploadedImage = React.useRef<HTMLImageElement>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleImageUpload: any = (e) => {
    const [file] = e!.target.files;
    if (file) {
      const reader = new FileReader();
      const { current }: any = uploadedImage;
      current.file = file;
      reader.onload = (e: any) => {
        const target: any = e?.target;
        if (target) {
          current.src = target?.result as any;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (_: React.MouseEvent) => {
    console.log('click', firstname, lastname)
    setError('');

    try {
      const data = await updateUser(userID, email, firstname, lastname);

      if (data) {
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

  return (
    <UpdateProfileForm
      firstname={state.user?.first_name}
      lastname={state.user?.last_name}
      handleImageUpload={handleImageUpload}
      uploadedImage={uploadedImage}
      onFirstnameChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setFirstname(e.currentTarget.value)
      }
      onLastnameChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setLastname(e.currentTarget.value)
      }
      onSubmitButtonClick={handleSubmit}
    />
  );
}

export default UpdateProfilePage;
