import { RENDER_PAGE} from '../actions/types'
import {returnPage} from '../../../transcript/TextAPI.js';

const initialState = {
	page:1,
	content: returnPage(1)
}

const reducer = (state = initialState ,action) => {
	switch(action.type){
		case RENDER_PAGE: 
			return {
				page: action.payload,
				content: returnPage(action.payload)
			}
		default:
			return state;
	}
}

export default reducer