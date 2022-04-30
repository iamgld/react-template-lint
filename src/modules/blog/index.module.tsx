import React, { FC, ReactElement, lazy, Suspense } from 'react'
const BlogLazy = lazy(() => import('./Blog.component').then(({ Blog }) => ({ default: Blog })))

interface BlogProps {}

export const Blog: FC<BlogProps> = (props: BlogProps): ReactElement => {
	return (
		<Suspense fallback={<>Loading...</>}>
			<BlogLazy />
		</Suspense>
	)
}
