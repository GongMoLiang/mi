import StudentFormContainer from '../layout/student/StundentForm'
import LoginFormContainer from '../layout/login/LoginForm'
import RegisterFormContainer from '../layout/register/RegisetForm'


export default [
	{
        path: '/student/*',
		exact: true,
		component: StudentFormContainer
	},
	{
		path: '/approval/*',
		exact: true,
		component: StudentFormContainer
	},
	{
		path: '/material/*',
		exact: true,
		component: StudentFormContainer
	},
	{
		path: '/login',
		exact: true,
		component: LoginFormContainer
	},
	{
		path: '/register',
		exact: true,
		component: RegisterFormContainer
	}
]
