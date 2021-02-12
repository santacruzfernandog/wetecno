import {firebase} from '../firebase'

//Data inicial
const dataInicial = {
    array: []
}

//Constantes
const OBTENER_PRODUCTOS_EXITO = 'OBTENER_PRODUCTOS_EXITO'

//Reducer
export default function productoReducer(state = dataInicial, action){
    switch(action.type){

    }
}

//Acciones - con dispatch activamos el reducer, y con getState obtenemos la dataInicial o lo que se almacene en el state.
export const obtenerProductosAccion = ()=> async(dispatch, getState)=> {
    try {
        
    } catch (error) {
        console.log(error)
    }
}