import userReducer, { userActions } from './user';
import allUserReducer, { allUserActions } from './allUsers';
import companiesReducer, { companiesActions } from './companies';
import allTechnologiesReducer, { allTechnologiesActions } from './technologies';
import adminReducer, { adminActions } from './admin';
import feedbacksReducer, { feedbacksActions } from './feedbacks';

const rootReducer = {
  user: userReducer,
  allUsers: allUserReducer,
  companies: companiesReducer,
  technologies: allTechnologiesReducer,
  admin: adminReducer,
  feedbacks: feedbacksReducer,
};

export default rootReducer;

export const actions = {
  ...userActions,
  ...allUserActions,
  ...companiesActions,
  ...allTechnologiesActions,
  ...adminActions,
  ...feedbacksActions,
};
