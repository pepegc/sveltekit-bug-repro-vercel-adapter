//import { readRecentRepositories } from '$lib/api/backend/repositories';
import type { PageLoad } from './$types';

export const load:PageLoad = async ({ params }) => {

	//const recentRepositories = await readRecentRepositories();

	return {
		a: params.a,
		b: params.b,
		c: params.c
	};
}