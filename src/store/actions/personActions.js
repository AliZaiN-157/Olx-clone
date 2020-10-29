import Sellitem from '../../Sellitem'
export const UPDATE_ITEM = 'UPDATE__ITEM'


const update_Item = {
    type: UPDATE_ITEM,
    payload: Sellitem.name,
}

export default update_Item