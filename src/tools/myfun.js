/**
 * 返回滾輪是否在底部
 */
export const isScrollInBottom = () => {
    //文檔內容實際高度（包括超過窗口的重疊部分）
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    //滾動條滾動距離
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //窗口可視範圍高度
    const clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight, document.body.clientHeight);
    //返回滾輪是否在底部
    return clientHeight + scrollTop >= scrollHeight
}
