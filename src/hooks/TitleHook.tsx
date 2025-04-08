import { useEffect } from "react"

const useTitleHook = (title: string) => {
    useEffect(() => {
        if (!title) return;
        document.title = `KARMA Shop | ${title}`

        return () => {
            document.title = "KARAMA Shop"
        }
    }, [title])
}

export default useTitleHook