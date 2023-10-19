//Todo низкоприоритетная задача

export function sendAnalytics() {
    // отправить данные для аналитики
}

requestIdleCallback(() => {
    sendAnalytics()
}, {timeout: 2000});