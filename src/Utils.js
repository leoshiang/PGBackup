/**
 * 顯示錯誤訊息並停止執行
 * @param {string} errorMessage 錯誤訊息
 */
function stopExecution (errorMessage) {
    console.error(errorMessage)
    process.exit(1)
}

module.exports = { stopExecution }