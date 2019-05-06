var myCourse = new Vue({
    el: '#myCourse',
    data: {
        //我的课程列表
        courses: [
            {
                href: 'blogCourse.html',
                image: 'images/img-1.jpg',
                course_name: 'Advanced Web',
                instruction: '高级web',
                note:{
                    backgroundImage:"url(images/img-1.jpg)"
                }
            },
            {
                href: 'blogCourse.html',
                image: 'images/img-2.jpg',
                course_name: 'Advanced Web',
                instruction: '高级web',
                note:{
                    backgroundImage:"url(images/img-2.jpg)"
                }
            },
            {
                href: 'blogCourse.html',
                image: 'images/img-3.jpg',
                course_name: 'Advanced Web',
                instruction: '高级web',
                note:{
                    backgroundImage:"url(images/img-3.jpg)"
                }
            }
        ]
        //选中的商品列表，用于计算总价
    }
});

