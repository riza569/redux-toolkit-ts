import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { Rootstate, AppDispatc } from "./store";
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatc>();
