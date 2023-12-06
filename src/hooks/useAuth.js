import { useAppSelector } from "./redux";

export function useAuth() {
    const {id, email, token} = useAppSelector((state) => state.userSlice)

    return {
        isAuth: !!email, // true
        email,
        id,
        token
    }
}