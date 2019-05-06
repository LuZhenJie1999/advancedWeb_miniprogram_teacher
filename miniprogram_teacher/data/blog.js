var courses = new Vue({
    el: '#courses',
    data: {
        /**
         * 课程列表
         */
        courseList: [
            {
                id: 1,
                courseName: 'java-从入门到放弃',
                coursePrice: 39.9,
                content: '玩转Java高并发分布式架构核心技术',
                img: 'images/img-1.jpg',
                detailPath: 'blogCourse.html'
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
        ]
        //选中的商品列表，用于计算总
    }

});

