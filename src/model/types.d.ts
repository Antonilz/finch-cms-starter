import { UserAction } from '~features/user/model/types';
import { AppState } from './store';

declare global {
  type RootAction = UserAction;
  type RootState = AppState;
}
