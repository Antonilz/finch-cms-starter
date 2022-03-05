import { routes, redirect } from '~features/routing';

export const redirectIfNeeded = () => {
  const redirectCondition = false;

  if (redirectCondition) {
    redirect({ route: routes.INDEX });
  }

  return false;
};
