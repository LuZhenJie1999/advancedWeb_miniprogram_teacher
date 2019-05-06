var coursesDetail = new Vue({
    el: '#coursesDetail',
    data: {
        /**
         * 课程详情
         */
        courseName: {
            isMine: 1,
            message: [
                {
                studentId: '1',
                studentName: '仙王',
                courseName: 'java',
                time: '2019/12/2 2:30:50',
                content: '放声大哭了看手机倒海翻江打款发货'

            },
                {
                    studentId: '2',
                    studentName: '仙也',
                    courseName: 'java',
                    time: '2019/12/2 2:30:50',
                    content: '放声大哭了看手机倒海翻江打款发货'
                }
            ],
            value: 'java--从入门到放弃',
            introduction: '适用人群\n' +
            '希望学习Java的学员，不需要有任何计算机基础\n' +
            '\n' +
            '课程概述\n' +
            '☆ Java程序员居家旅行必备课程 ☆\n' +
            '\n' +
            '本篇是〖Java学习指南系列〗的第1篇课程，Java编程的零基础入门教程。\n' +
            '提示：不需要C基础，可以直接学习！\n' +
            '\n' +
            '☆ 全套课程资源 ☆\n' +
            '- PPT与示例源码\n' +
            '- 配套在线题库 \n' +
            '- 配套教材 / 电子书\n' +
            '\n' +
            '☆ 对学员的要求 ☆\n' +
            '（1）数学水平不作要求\n' +
            '（2）英语水平高中以上\n' +
            '（3）不需要任何编程基础\n' +
            '提示：本篇预计需要30天的学习时间。\n' +
            '\n' +
            '☆ 进阶教程 ☆ \n' +
            '- Swing 桌面GUI应用开发教程\n' +
            '- Android 手机APP开发教程\n' +
            '- Java Web 网站开发系列教程\n' +
            '- 数据库 MySQL 开发教程\n' +
            '- JavaFX 桌面开发教程\n' +
            '- 数据结构、Linux/CentOS ... \n' +
            '更多教程，尽在 〖Java学习指南系列〗！',
            menu: '第1章 Java语言概论\n' +
            '1.1Java语言简介\n' +
            '1.1.1Java语言的由来\n' +
            '1.1.2Java语言的目标\n' +
            '1.1.3Java语言实现机制\n' +
            '1.2Java语言面向对象编程\n' +
            '1.2.1面向对象编程的基本概念\n' +
            '1.2.2类与包\n' +
            '1.2.3对象创建、初始化、使用和删除\n' +
            '1.2.4Java源程序结构\n' +
            '1.2.5Java程序编写及运行的过程\n' +
            '习题\n' +
            '第2章 基本数据类型\n' +
            '2.1概述\n' +
            '2.1.1标识符\n' +
            '2.1.2关键字\n' +
            '2.1.3常量\n' +
            '2.1.4变量\n' +
            '2.2基本数据类型\n' +
            '2.2.1整型数据\n' +
            '2.2.2浮点型数据\n' +
            '2.2.3布尔型数据\n' +
            '2.2.4字符型数据\n' +
            '2.2.5各类数据之间的转换\n' +
            '2.3引用数据类型\n' +
            '2.3.1引用赋值\n' +
            '2.3.2方法参数传递\n' +
            '2.3.3this与super的引用\n' +
            '2.4Java类库中对基本数据类型的wrapper类\n' +
            '习题\n' +
            '第3章 运算符和表达式\n' +
            '3.1概述\n' +
            '3.1.1运算符\n' +
            '3.1.2表达式\n' +
            '3.2算术运算符和算术表达式\n' +
            '3.2.1一元算术运算符\n' +
            '3.2.2二元算术运算符\n' +
            '3.2.3算术运算符的优先级\n' +
            '3.3关系运算符和关系表达式\n' +
            '3.4布尔逻辑运算符和布尔逻辑表达式\n' +
            '3.5位运算符和位运算表达式\n' +
            '3.5.1位逻辑运算符\n' +
            '3.5.2移位运算符\n' +
            '3.5.3位运算符的优先级\n' +
            '3.6赋值运算符和赋值表达式\n' +
            '3.6.1赋值运算符\n' +
            '3.6.2扩展赋值运算符\n' +
            '3.7条件运算符与条件表达式\n' +
            '3.8运算符的优先级和复杂表达式\n' +
            '3.9表达式语句\n' +
            '习题\n' +
            '第4章 流程控制\n' +
            '4.1概述\n' +
            '4.2分支(选择)语句\n' +
            '4.2.1条件语句\n' +
            '4.2.2多分支语句\n' +
            '4.3循环语句\n' +
            '4.3.1while循环\n' +
            '4.3.2do-while循环\n' +
            '4.3.3for循环\n' +
            '4.4跳转语句\n' +
            '4.4.1break语句\n' +
            '4.4.2continue语句\n' +
            '4.4.3return语句\n' +
            '4.5循环语句与分支语句的嵌套\n' +
            '4.6递归\n' +
            '习题\n' +
            '第5章 Java的继承、多态、高级类特性和数组\n' +
            '5.1概述\n' +
            '5.1.1Object类\n' +
            '5.1.2Class类\n' +
            '5.1.3String类\n' +
            '5.2覆盖方法\n' +
            '5.3重载方法\n' +
            '5.4高级类特性\n' +
            '5.4.1static关键字\n' +
            '5.4.2final关键字\n' +
            '5.4.3枚举类型\n' +
            '5.4.4抽象类\n' +
            '5.4.5接口\n' +
            '5.5内部类\n' +
            '5.6数组\n' +
            '5.6.1一维数组的创建、初始化和引用\n' +
            '5.6.2多维数组的创建、复制和调整大小\n' +
            '习题\n' +
            '第6章 异常和断言\n' +
            '6.1概述\n' +
            '6.2异常处理类型\n' +
            '6.2.1捕获异常\n' +
            '6.2.2声明抛出异常\n' +
            '6.2.3自定义异常\n' +
            '6.3异常处理编程的提醒\n' +
            '6.3.1try和catch语句\n' +
            '6.3.2finally语句\n' +
            '6.3.3异常处理的原则\n' +
            '6.4断言\n' +
            '6.4.1断言语法\n' +
            '6.4.2断言的使用\n' +
            '6.4.3什么情况下不要使用断言\n' +
            '习题\n' +
            '第7章 输入输出及文件操作\n' +
            '7.1概述\n' +
            '7.1.1计算机中数据的I/O方向\n' +
            '7.1.2Java中的标准输入/输出类\n' +
            '7.1.3Java中包含的输入输出流类\n' +
            '7.2文件\n' +
            '7.2.1创建文件\n' +
            '7.2.2File类提供的方法\n' +
            '7.2.3随机文件流\n' +
            '7.2.4压缩文件流\n' +
            '7.3字节流\n' +
            '7.3.1字节输入流\n' +
            '7.3.2字节输出流\n' +
            '7.3.3内存的读写\n' +
            '7.4字符流\n' +
            '7.4.1字符输入流\n' +
            '7.4.2字符输出流\n' +
            '7.5对象流\n' +
            '7.6过滤流\n' +
            '7.7管道流\n' +
            '7.8不同流的速度比较\n' +
            '7.8.1内存映射文件\n' +
            '7.8.2文件通道\n' +
            '7.8.3CRC32类\n' +
            '7.9输入输出流和正则表达式\n' +
            '7.9.1Pattern类\n' +
            '7.9.2Matcher类\n' +
            '7.10JavaI/O流的其他应用\n' +
            '习题\n' +
            '第8章 线程\n' +
            '8.1概述\n' +
            '8.1.1什么是线程\n' +
            '8.1.2Java中的线程模型\n' +
            '8.2线程的创建\n' +
            '8.3线程的调度与控制\n' +
            '8.3.1线程优先级与线程调度策略\n' +
            '8.3.2线程的基本控制\n' +
            '8.4线程同步\n' +
            '8.4.1多线程并发操作中的问题\n' +
            '8.4.2对象的锁及其操作\n' +
            '8.4.3死锁的防治\n' +
            '8.4.4线程间的交互：wait()和notify()\n' +
            '8.4.5不建议使用的一些方法\n' +
            '8.5线程状态与生命周期\n' +
            '8.6线程相关的其他类与方法\n' +
            '8.6.1支持线程的类\n' +
            '8.6.2线程组\n' +
            '8.6.3Thread类的其他方法\n' +
            '习题\n' +
            '第9章 编写图形用户界面\n' +
            '9.1概述\n' +
            '9.2用AWT编写图形用户界面\n' +
            '9.2.1java.awt包\n' +
            '9.2.2组件、容器和布局管理器\n' +
            '9.2.3常用容器\n' +
            '9.2.4LayoutManager(布局管理器)\n' +
            '9.3AWT事件处理模型\n' +
            '9.3.1事件类\n' +
            '9.3.2事件监听器\n' +
            '9.3.3AWT事件及其相应的监听器接口\n' +
            '9.3.4事件适配器\n' +
            '9.4AWT组件库\n' +
            '9.4.1基本组件的应用\n' +
            '9.4.2组件与监听器的对应关系\n' +
            '9.5用Swing编写图形用户界面\n' +
            '9.5.1wing概述\n' +
            '95.2wing的类层次结构\n' +
            '9.5.3wing的特性\n' +
            '9.6wing组件和容器\n' +
            '9.6.1组件的分类\n' +
            '9.6.2使用wing的基本规则\n' +
            '9.6.3各种容器面板和组件\n' +
            '9.6.4布局管理器\n' +
            '9.7wing的事件处理机制\n' +
            '习题\n' +
            '第10章 Applet程序设计\n' +
            '10.1Applet的基本概念\n' +
            '10.1.1Applet的生命周期\n' +
            '10.1.2Applet的类层次结构\n' +
            '10.1.3Applet类API概述\n' +
            '10.2Applet的编写\n' +
            '10.2.1Applet编写的步骤\n' +
            '10.2.2用户Applet类的创建\n' +
            '10.2.3在HTML页中包含Applet\n' +
            '10.3Applet中的图形化用户界面GUI\n' +
            '10.3.1基于AWT组件的Applet用户界面',
            review: '欢迎进入课程讨论区，你可以与本课程的老师和同学在这里交流。如果你有课程相关的问题，请发到老师答疑区；经验、思考、创意、作品、转帖请发到综合讨论区。欢迎分享，鼓励原创，杜绝广告，请大家共同维护一个包容、积极、相互支持的交流氛围，谢谢。了解更多请点击“讨论区使用规则”↗',
            img: 'images/img-1.jpg',
            coursePrice: 39.9,
            courseTeacher: '王老师'
        },
        detailList: [
            {
                id: 1,
                courseName: 'java-从入门到放弃'
            },
            {
                id: 2,
                courseName: 'java-从入门到秃头',
                coursePrice: 39.9,
                content: '玩转Java高并发分布式架构核心技术',
                img: 'images/img-2.jpg',
                detailPath: 'blogCourse.html'
            },
            {
                id: 3,
                courseName: 'java-从入门到出家',
                coursePrice: 39.9,
                content: '玩转Java高并发分布式架构核心技术',
                img: 'images/img-3.jpg',
                detailPath: 'blogCourse.html'
            },
            {
                id: 4,
                courseName: 'java-从入门到放弃',
                coursePrice: 39.9,
                content: '玩转Java高并发分布式架构核心技术',
                img: 'images/img-4.jpg',
                detailPath: 'blogCourse.html'
            }, {
                id: 5,
                courseName: 'java-从入门到秃头',
                coursePrice: 39.9,
                content: '玩转Java高并发分布式架构核心技术',
                img: 'images/img-5.jpg',
                detailPath: 'blogCourse.html'
            }, {
                id: 6,
                courseName: 'java-从入门到出家',
                coursePrice: 39.9,
                content: '玩转Java高并发分布式架构核心技术',
                img: 'images/img-6.jpg',
                detailPath: 'blogCourse.html'
            }, {
                id: 7,
                courseName: 'java-从入门到秃头',
                coursePrice: 39.9,
                content: '玩转Java高并发分布式架构核心技术',
                img: 'images/img-2.jpg',
                detailPath: 'blogCourse.html'
            }, {
                id: 8,
                courseName: 'java-从入门到出家',
                coursePrice: 39.9,
                content: '玩转Java高并发分布式架构核心技术',
                img: 'images/img-5.jpg',
                detailPath: 'blogCourse.html'
            }
        ],


        //学生的消息
        message: [
            {
                studentID: 0,
                studentName: '小明',
                studentPhoto: 'images/img-1.jpg',
                messageContent: '老师我今天请假',
                messageTime: '2018-2-1'

            },
            {
                studentID: 1,
                studentName: '小红',
                studentPhoto: 'images/img-2.jpg',
                messageContent: '老师我今天请假',
                messageTime: '2018-2-1'
            },
            {
                studentID: 2,
                studentName: '小蓝',
                studentPhoto: 'images/img-3.jpg',
                messageContent: '老师我今天请假',
                messageTime: '2018-2-1'
            }
        ],

        myCourseDetail:
            {
                // students: [
                //     {name: '小红'},
                //     {name: '小兰'}
                //
                // ],
                select: [
                    {name: '小兰'},
                    {name: '小红'}
                ],
                homework: [
                    {
                        title: 'xml',
                        content: 'xml非常重要，说说你的理解',
                        studentList: [
                            {
                                name: '撒大大',
                                done: 1
                            },
                            {
                                name: '鼓风机',
                                done: 0
                            },
                            {
                                name: '从吃',
                                done: 1
                            }
                        ],
                        time: '2018-2-12'
                    },
                    {
                        title: 'http',
                        content: 'http非常重要，说说你的理解',
                        studentList: [
                            {
                                name: '申股',
                                done: 1
                            },
                            {
                                name: '繁荣',
                                done: 1
                            },
                            {
                                name: '刚发的',
                                done: 1
                            }],
                        time: '2018-3-2'
                    },
                    {
                        title: 'http',
                        content: 'http非常重要，说说你的理解',
                        studentList: [
                            {
                                name: '申股',
                                done: 1
                            },
                            {
                                name: '繁荣',
                                done: 1
                            },
                            {
                                name: '刚发的',
                                done: 1
                            }],
                        time: '2018-3-2'
                    }
                ]


            }


    }

});



