import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateInterface } from './redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateInterface> = useSelector;
