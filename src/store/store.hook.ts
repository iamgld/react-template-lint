// Redux Imports
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// Store Imports
import { StoreDispatch, StoreState } from './store'

export const useStoreDispatch = (): StoreDispatch => useDispatch<StoreDispatch>()
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector
