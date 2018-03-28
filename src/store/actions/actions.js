import { 

	RENDER_PAGE

} from './types';

export const updatePage = (pageNum) => {
	return {
		type: RENDER_PAGE,
		payload: pageNum
	}

};