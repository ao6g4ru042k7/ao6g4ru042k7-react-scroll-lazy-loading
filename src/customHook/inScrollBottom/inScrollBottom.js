import { useEffect } from 'react'

const useInScrollBottom = (callback) => {
    useEffect(() => {
        const scrollHandler = () => {
            //文檔內容實際高度（包括超過窗口的重疊部分）
            const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            //滾動條滾動距離
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            //窗口可視範圍高度
            const clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight, document.body.clientHeight);
            if (clientHeight + scrollTop >= scrollHeight) {
                //滾到底部瞜
                callback()
            }
        }
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [callback])
}

export default useInScrollBottom
//參考 https://juejin.cn/post/6844903961862897672 