module.exports = api => {
    return {
        presets:[
            [
                '@babel/preset-env',
                // Нижнее можем удалять, если у нас нет jest
                {
                    useBuiltIns: "entry",
                    corejs: "3.22",
                    targets: api.caller(caller => caller && caller.target === 'node')
                    ? {node: "current"}
                    : {chrome: "58", ie: "11"}
                }
            ]
        ]
    }
}