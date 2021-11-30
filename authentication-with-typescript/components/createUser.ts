import { useSnackbar } from 'notistack';

export async function CreateUser(
  name: string,
  email: string,
  age: number,
  password: string
) {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { enqueueSnackbar } = useSnackbar();

    const response = await fetch('/api/auth/registration', {
      method: 'POST',
      body: JSON.stringify({ name, email, age, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (!response.ok) {
     enqueueSnackbar(response.status,{
         variant:'error'
     })
     
        return;
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}
