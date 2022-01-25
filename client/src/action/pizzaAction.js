import axios from 'axios'

export const getAllPizzas =()=>async (despatch) => {
    dispatch({type: 'GET_PIZZAS_REQUEST'})
    try {
        const res=await axios.get('/api/pizzas/getPizzas')
        console.log(res)
        dispatch({type:'GET_PIZZAS_SUCCESS', payload:res.data})
    } catch (error) {
        dispatch({type: 'GET_PIZZAS_FAIL',payload:error})
    }
}