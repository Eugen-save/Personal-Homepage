import { useDispatch, useSelector } from "react-redux"
import { SwitchButton } from "../../common/SwitchButton";
import { selectTheme, setTheme } from "./themeSwitcherSlice";



export const ThemeSwitcher = () => {
    const isThemeDark = useSelector(selectTheme);

    const dispatch = useDispatch();

    const onThemeSwitch = () => {
        dispatch(setTheme(!isThemeDark));
    };

    return (
        <SwitchButton 
            caption={`${isThemeDark ? "DARK MODE ON" : "DARK MODE OFF"}`}
            onClick={onThemeSwitch}
            shifted={isThemeDark}
        />
    )
}