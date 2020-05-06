const reducer = (state, action) => {
    const { type, payload } = action
    const { iceCreams, cart } = state
    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...payload
            }
        } case 'INCREMENT_COUNTER': {
            const { index } = payload
            cart[index].quantity++
            return {
                ...state,
                cart: [...cart]
            }
        }
        case 'DECREMENT_COUNTER': {
            const { index } = payload
            cart[index].quantity--
            return {
                ...state,
                cart: [...cart]
            }
        }
        case 'TOTAL_AMOUNT': {
            const totalCost = cart.map(Product => parseInt(Product.price)
                * Product.quantity)
            return {
                ...state,
                totalAmount: totalCost.reduce((acc, amount) => acc + amount, 0)
            }
        }
        case 'ADD_ITEM': {
            const { index } = payload
            iceCreams[index].incart = "true"
            return {
                ...state,
                iceCreams: [...iceCreams],
                cart: [...cart, iceCreams[index]],
            }

        }
        case 'REMOVE_PRODUCT': {

            const { index } = payload
            const Id = cart[index].id
            iceCreams[Id-1].incart="false"
            cart.splice(index, 1)

            return {
                ...state,
                iceCreams: [...iceCreams],
                cart: [...cart]
            }
        }
        case 'SUNDAES': {
            const Sundaes = iceCreams.filter(icecream => icecream.category == "sundae")
            return {
                ...state,
                Sundaes: [...Sundaes]
            }

        }
        case 'CONES': {
            const Cones = iceCreams.filter(icecream => icecream.category == "cones")
            return {
                ...state,
                Cones: [...Cones]
            }

        }
        case 'SCOOPS': {
            const Scoops = iceCreams.filter(icecream => icecream.category == "scoops")
            return {
                ...state,
                Scoops: [...Scoops]
            }

        }
        case 'ITEM': {
            debugger;
            const { index } = payload
            return {
                ...state,
                item: [iceCreams[index]], 
            }

        }
        case 'RESET':{
            for( var i=0;i<iceCreams.length;i++){
                iceCreams[i].incart="false"
            }

            return{
                ...state,
                iceCreams:[...iceCreams],
                cart:[]
            }
        }
        default: {
            return state
        }
    }
}
export default reducer