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
      '<h3 class="item-title portion" id="spl-item1">Contents</h3><p class="portion">As the foundation of theoretical research in condensed matter physics and materials science, we focus on advancing computational methodologies including structure prediction, graph theory, machine learning force fields, and machine-learned Hamiltonians, striving to provide comprehensive solutions spanning crystal structures, dynamics, and electronic properties. Recent achievements include: the development of <a href=\"https://gitlab.com/bigd4/magus" target=\"_blank\"> MAGUS</a>, a machine learning and graph theory-enhanced crystal structure prediction method demonstrating over 10-fold acceleration compared to conventional first-principles searches; the creation of  <a href=\"https://gitlab.com/bigd4/hotpp\" target=\"_blank\"> HotPP</a>, a higher-order tensor message-passing machine learning force field achieving accuracy comparable to the world\'s most precise ML force fields; and collaborative development of <a href=\"https://github.com/brucefan1983/GPUMD" target=\"_blank\"> GPUMD</a>, a GPU-accelerated machine learning molecular dynamics engine capable of simulating systems with tens of millions of atoms using a single graphics card.</p>',
      '<h3 class="item-title portion" id="spl-item1">Representative works</h3><p class="portion">\
       <a href=\"https://www.nature.com/articles/s43588-025-00775-z" target=\"_blank\">\
        1.Han et al., Efficient crystal structure prediction based on the symmetry principle, Nature Computational Science 5, 255 (2025).</a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1093/nsr/nwad128" target=\"_blank\">\
        2.Wang et al.,MAGUS: machine learning and graph theory assisted universal structure searcher, Natl. Sci. Rev. 10, nwad128, (2023).</a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1038/s41467-024-51886-6" target=\"_blank\">\
        3.Wang et al., E(n)-Equivariant cartesian tensor message passing interatomic potential, Nature Commun. 15, 7607 (2024).</a></p><p class="portion"> \
       <a href=\"https://www.nature.com/articles/s41467-024-54554-x" target=\"_blank\">\
        4.Song et al., General-purpose machine-learned potential for 16 elemental metals and their alloys, Nature Commun. 15, 10208 (2024).</a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1063/5.0106617" target=\"_blank\">\
        5.Fan et al., GPUMD: A package for constructing accurate machine-learned potentials and performing highly efficient atomistic simulations, J. Chem. Phys. 157, 114801 (2022).</a></p><p class="portion"> \
        ',

    ]
    },
    {
      short: 'Research Direction 2:',
      title:'Dynamical Simulations of Novel States of Matter and Phase Transitions',
      mediaCode:
      '<div><img style="width: 42%;margin-right: 50px;" src="static/image/research_direction2-1.png"><img style="width: 30%;" src="static/image/research_direction2-2.png"></div>',
      details: [
      '<h3 class="item-title portion" id="spl-item1">Contents</h3><p class="portion">While static calculations typically study zero-temperature properties, dynamical simulations form the basis for investigating finite-temperature states and phase transitions. Leveraging first-principles and machine learning molecular dynamics, we have made significant progress in characterizing exotic states (superionic, plastic crystal, and cooperative diffusion states, etc) and phase transition pathways. Key contributions include: predicting high-pressure helium-water/ammonia/methane compounds and Si-O-H, Mg-O-H compounds, that reshape understanding of planetary interior structures; revealing one-dimensional cooperative diffusion in compressed calcium with its electronic origin, discovering an elemental analog to superionic states; and elucidating high-pressure phase transition mechanisms in carbon and carbon dioxide systems that have guided experimental investigations.</p>',
      '<h3 class="item-title portion" id="spl-item1">Representative works</h3><p class="portion">\
       <a href=\"https://doi.org/10.1038/s41567-019-0568-7" target=\"_blank\">\
        1.Liu et al., Multiple superionic states in helium-water compounds, Nature Physics 15, 1065 (2019).</a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1093/nsr/nwaa064" target=\"_blank\">\
        2. Gao et al., Coexistence of plastic and partially diffusive phases in a helium-methane compound, National Science Review 7, 1540 (2020).[Cover story] </a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1103/PhysRevLett.128.035702" target=\"_blank\">\
        3.Gao et al., Superionic Silica-Water and Silica-Hydrogen Compounds in the Deep Interiors of Uranus and Neptune, Phys. Rev. Lett. 128, 035702 (2022).</a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1103/PhysRevX.11.011006" target=\"_blank\">\
        4.Wang et al., Electronically driven 1D cooperative diffusion in a simple cubic crystal, Phys. Rev. X 11, 011006 (2021).</a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1103/PhysRevLett.131.146101" target=\"_blank\">\
        5.Shi et al., Double-Shock Compression Pathways from Diamond to BC8 Carbon, Phys. Rev. Lett. 131, 146101 (2023).</a></p><p class="portion"> \
        ',

    ]
    },
    {
      short: 'Research Direction 3:',
      title: 'Prediction and Design of High-Pressure Materials',
      mediaCode:
      '<div><img style="width: 52%;margin-right: 50px;" src="static/image/research_direction3-1.png"><img style="width: 30%;" src="static/image/research_direction3-2.png"></div>',
        details: [
      '<h3 class="item-title portion" id="spl-item1">Contents</h3><p class="portion">High pressure serves as a crucial means to modulate material properties and synthesize novel materials. Our recent work spans predictions of geologically relevant materials under planetary interior conditions, nitrogen-rich ultrahard/energetic materials, superconductors, and topological quantum materials. Notable achievements include: identifying mixed-coordination SiO2 phases under Neptune\'s core conditions; designing superhard nitrogen-rich materials later experimentally synthesized; and proposing strategies for high-pressure synthesis of novel quantum materials.</p>',
      '<h3 class="item-title portion" id="spl-item1">Representative works</h3><p class="portion">\
       <a href=\"https://doi.org/10.1103/PhysRevLett.126.035701" target=\"_blank\">\
        1.Liu et al., Mixed coordination silica at megabar pressure, Phys. Rev. Lett. 126, 035701 (2021).</a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1016/j.scib.2018.05.027" target=\"_blank\">\
        2. Xia et al., A novel superhard tungsten nitride predicted by machine-learning accelerated crystal structure search, Sci. Bull. 63, 817 (2018). [Cover story]</a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1103/PhysRevLett.126.065702" target=\"_blank\">\
        3.Salke et al., Tungsten hexanitride with single-bonded armchair-like hexazine structure at high pressure, Phys. Rev. Lett. 126, 065702 (2021).</a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1103/PhysRevLett.130.256002" target=\"_blank\">\
        4.Ying et al., Record High 36 K Transition Temperature to the Superconducting State of Elemental Scandium at a Pressure of 260 GPa, Phys. Rev. Lett. 130, 256002 (2023). </a></p><p class="portion"> \
       <a href=\"https://doi.org/10.1103/PhysRevLett.117.146402" target=\"_blank\">\
        5.Zhou et al., Pressure-induced new topological Weyl Semimetal phase in TaAs, Phys. Rev. Lett. 117, 146402 (2016).</a></p><p class="portion"> \
        ',
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
