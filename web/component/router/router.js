import StudentFormContainer from '../containers/student/StudentForm'
import LoginFormContainer from '../containers/login/LoginForm'
import RegisterFormContainer from '../containers/register/RegisterForm'

export default [
	{
		path: '/student',
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
