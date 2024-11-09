import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { redirect } from 'react-router-dom';

const orderLoader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    if (!user) {
      toast.warn('You must be logged in to view orders');
      return redirect('/login');
    }

    try {
      const response = await customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error showing your order';
      toast.error(errorMessage);
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return redirect('/login');
      }
      return null;
    }
  };

export default orderLoader;
