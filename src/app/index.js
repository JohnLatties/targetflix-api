import * as movieRouter from './movies/router'
import * as authRouter from './auth/router'
import * as userRouter from './users/router'


export const initializeRoutes = router => {
  authRouter.init(router)
  movieRouter.init(router)
  userRouter.init(router)
  //seriesRouter.init(router)
  //usersRouter.init(router)
  //...
  return router
}