import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"

// dispatch: dispatch() 함수를 사용하여 다음 코드 형태로 리덕스 저장소에 저장된 
export const useAppDispatch = () => useDispatch<AppDispatch>()

// useSelector: 리덕스 저장소에 어떤 내용이 저장되었는지 알고자 스토어의 상탯값을 반환해주는 훅
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector