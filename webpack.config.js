// 引入一个包   require-依赖  exports-出口
const path = require('path')

// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

// 引入clean 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {

    mode: 'development',
    // 入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {

        // 指定打包文件目录
        path: path.resolve(__dirname, 'dist'),

        filename: "bundle.js",

        // 告诉webpack 别使用箭头函数
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    // 指定webpack打包时要用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // 指定要生效的文件
                test: /\.ts$/,
                use: [
                    // 设置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        options: {
                            // 设置预定环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容目标的浏览器
                                        targets: {
                                            "chrome": "87",
                                            "ie": "11"
                                        },
                                        // 指定corejs 的版本
                                        "corejs": "3",

                                        // 使用corejs的方法 usage表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }

                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/
            },
            // 设置less 文件的处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]

            }
        ]
    },

    // 配置webpack 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: '这个是我自定义title'
            template: './src/index.html'
        })
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}