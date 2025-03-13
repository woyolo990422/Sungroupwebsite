// 定义 knockout viewmodel
var ViewModel = function () {
    // 预存储this为self
    var self = this;

    /* 模板部分 */
    // toggle nav list by clicking hamburger button
    // 点击hamburger按钮从而使导航栏显示或消失
    self.navStatus = ko.observable(-1);
    self.toggleNav = function () {
        if (self.navStatus() <= 0) {
            self.navStatus(1);
        } else {
            self.navStatus(-1);
        }
    };

    /* 首页部分 */
    var achievements = [
        {
            imgSrc: 'static/image/research_direction1.png',
            title: 'Development of Computational Methods',
            link: 'research?0'
        },
        {
            imgSrc: 'static/image/research_direction2-2.png',
            title: 'Dynamical Simulations of Novel States of Matter and Phase Transitions',
            link: 'research?1'
        },
        {
            imgSrc: 'static/image/research_direction3-2.png',
            title: 'Prediction and Design of High-Pressure Materials',
            link: 'research?2'
        }
    ];

    // 定义3大structure在knockout中对应的数组
    self.achievementsList = ko.observableArray(achievements);
};


