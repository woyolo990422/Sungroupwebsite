// 定义 knockout viewmodel
var ViewModel = function() {
  // 预存储this为self
  var self = this;

  /* 模板部分 */
  // toggle nav list by clicking hamburger button
  // 点击hamburger按钮从而使导航栏显示或消失
  self.navStatus = ko.observable(-1);
  self.toggleNav = function() {
    if (self.navStatus() <= 0) {
      self.navStatus(1);
    } else {
      self.navStatus(-1);
    }
  };

  /* research部分 */
  // 构建research中3大结构所含内容的数组
  var achievementsDetail = [
    {
      short: 'Research Direction 1:',
      title: 'Development of Computational Methods',
      mediaCode:
      '<div><img style="width: auto;margin-right: 20px;" src="static/image/research_direction1-1.jpg"><img style="width: auto" src="static/image/research_direction1-2.png"></div>',
      details: [
      '<h3 class="item-title portion" id="spl-item1">Contents</h3><p class="portion">As the foundation of theoretical research in condensed matter physics and materials science, we focus on advancing computational methodologies including structure prediction, graph theory, machine learning force fields, and machine-learned Hamiltonians, striving to provide comprehensive solutions spanning crystal structures, dynamics, and electronic properties. Recent achievements include: the development of MAGUS, a machine learning and graph theory-enhanced crystal structure prediction method demonstrating over 10-fold acceleration compared to conventional first-principles searches; the creation of HotPP, a higher-order tensor message-passing machine learning force field achieving accuracy comparable to the world\'s most precise ML force fields; and collaborative development of GPUMD, a GPU-accelerated machine learning molecular dynamics engine capable of simulating systems with tens of millions of atoms using a single graphics card.</p>'
      ]
    },
    {
      short: 'Research Direction 2:',
      title:'Dynamical Simulations of Novel States of Matter and Phase Transitions',
      mediaCode:
      '<div><img style="width: 42%;margin-right: 50px;" src="static/image/research_direction2-1.png"><img style="width: 30%;" src="static/image/research_direction2-2.png"></div>',
      details: [
      '<h3 class="item-title portion" id="spl-item1">Contents</h3><p class="portion">While static calculations typically study zero-temperature properties, dynamical simulations form the basis for investigating finite-temperature states and phase transitions. Leveraging first-principles and machine learning molecular dynamics, we have made significant progress in characterizing exotic states (superionic, plastic crystal, and cooperative diffusion states, etc) and phase transition pathways. Key contributions include: predicting high-pressure helium-water/ammonia/methane compounds and Si-O-H, Mg-O-H compounds, that reshape understanding of planetary interior structures; revealing one-dimensional cooperative diffusion in compressed calcium with its electronic origin, discovering an elemental analog to superionic states; and elucidating high-pressure phase transition mechanisms in carbon and carbon dioxide systems that have guided experimental investigations.</p>'
      ]
    },
    {
      short: 'Research Direction 3:',
      title: 'Prediction and Design of High-Pressure Materials',
      mediaCode:
      '<div><img style="width: 52%;margin-right: 50px;" src="static/image/research_direction3-1.png"><img style="width: 30%;" src="static/image/research_direction3-2.png"></div>',
        details: [
      '<h3 class="item-title portion" id="spl-item1">Contents</h3><p class="portion">High pressure serves as a crucial means to modulate material properties and synthesize novel materials. Our recent work spans predictions of geologically relevant materials under planetary interior conditions, nitrogen-rich ultrahard/energetic materials, superconductors, and topological quantum materials. Notable achievements include: identifying mixed-coordination SiO2 phases under Neptune\'s core conditions; designing superhard nitrogen-rich materials later experimentally synthesized; and proposing strategies for high-pressure synthesis of novel quantum materials.</p>'
        ]
    }
  ];

  self.achievementsList = ko.observableArray(achievementsDetail);

  // 定义currentAchievement的值
  self.currentAchievement = ko.observable(
    (function() {
      // 取url中问号后面的数据
      var num = window.location.search;
      // 取该数据最后一位，赋给i
      var i = num.charAt(num.length - 1);
      // 当num存在，且i的值在achievementsList的数组长度内时，
      // currentAchievement应为第i个元素
      if (num && i >= 0 && i <= self.achievementsList().length) {
        return self.achievementsList()[i];
      } else {
        // 否则默认显示第1个元素
        return self.achievementsList()[0];
      }
    })()
  );

  // 根据点击的标题更新currentAchievement
  self.updateAchievement = function(achievement) {
    $('.achievement-details').css('opacity', 0);

    window.setTimeout(function() {
      self.currentAchievement(achievement);
      $('.achievement-details').css('opacity', 1);
    }, 200);
  };
};
