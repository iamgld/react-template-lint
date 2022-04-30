import React, { ReactElement, lazy, Suspense, FC } from 'react'
const AuthLazy = lazy(() => import('./Auth'))

interface Props {}

const Auth: FC<Props> = (props: Props): ReactElement => {
	return (
		<Suspense fallback={<>Loading...</>}>
			<AuthLazy></AuthLazy>
		</Suspense>
	)
}

export default Auth
