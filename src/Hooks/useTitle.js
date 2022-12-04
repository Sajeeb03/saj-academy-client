import { useEffect } from "react"

const useTitle = (title) => {
    // console.log(title)
    useEffect(() => {
        document.title = `SajAcademy ${title}`;
        window.scrollTo(0, 0)
    }, [title])
}

export default useTitle;