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
        short: 'Magus',
        title: 'Machine learning and graph theory assisted crystal structure prediction method',
        mediaCode:
        '<div><img style="width: 50%;margin-right: 20px;" src="static/image/Magus1.jpg"><img style="width: 45%" src="static/image/Magus2.jpg"></div>',
        details: [
        '<h3 class="item-title portion" id="spl-item1">Introduction</h3><p class="portion">The higher-order tensor message-passing interatomic potential function, HotPP, is an E(n)-equivariant message-passing neural network capable of extending Cartesian tensor embeddings and messages to arbitrary orders. It supports the calculation of potential energy surfaces, electric dipole moments, and polarizabilities. Additionally, it provides interfaces with commonly used software such as ASE and LAMMPS, making it applicable for computing phonon spectra, infrared spectra, and Raman spectra.</p>',
        '<p class=\"portion\">For more details and access to the Magus, visit the <a href=\"https://gitlab.com/bigd4/magus" target=\"_blank\"> code repository</a>.</p>'

    ]
      },
      {
        short: 'HotPP',
        title:'High order tensor Passing Potential',
        mediaCode:
        '<div><img style="width: 55%;margin-right: 20px;" src="static/image/HotPP1.png"><img style="width: 35%" src="static/image/HotPP2.png"></div>',
        details: [
        '<h3 class="item-title portion" id="spl-item1">Introduction</h3><p class="portion">The higher-order tensor message-passing interatomic potential function, HotPP, is an E(n)-equivariant message-passing neural network capable of extending Cartesian tensor embeddings and messages to arbitrary orders. It supports the calculation of potential energy surfaces, electric dipole moments, and polarizabilities. Additionally, it provides interfaces with commonly used software such as ASE and LAMMPS, making it applicable for computing phonon spectra, infrared spectra, and Raman spectra.</p>',
        '<p class=\"portion\">For more details and access to the HotPP, visit the <a href=\"https://gitlab.com/bigd4/hotpp\" target=\"_blank\"> code repository</a>.</p>'

    ]
      },
      {
        short: 'GPUMD',
        title: 'Graphics Processing Units Molecular Dynamics',
        mediaCode:
        '<div><img style="width: 42%;margin-right: 20px;" src="static/image/gpumd.png"><img style="width: 45%;" src="static/image/nep.png"></div>',
          details: [
        '<h3 class="item-title portion" id="spl-item1">Introduction</h3><p class="portion">GPUMD (Graphics Processing Units Molecular Dynamics) is a high-performance molecular dynamics simulation software package developed and maintained by Professor Zheyong Fan and his team, initially released in 2017. Designed to leverage GPU acceleration, it enables efficient simulations of large-scale systems while maintaining high computational accuracy. A key feature of GPUMD is its integration of the Neuroevolution Potential (NEP), a machine-learning interatomic potential trained via evolutionary algorithms, which achieves exceptional computational speed (up to 10^7 atom-steps per second on consumer-grade GPUs) and precision without relying on external ML frameworks like TensorFlow or PyTorch. The software supports diverse functionalities including NVE, NVT, and NPT ensembles, thermal transport analysis (via Green-Kubo, NEMD, and HNEMD methods), structural optimization, phonon dispersion calculations, and elastic constant determination. Compatible with both Windows and Linux systems, GPUMD requires NVIDIA GPUs (compute capability ≥3.5) and CUDA environments for installation. Its ecosystem includes auxiliary tools like PyNEP, GPYUMD, and CALORINE for preprocessing/postprocessing and interoperability with platforms like ASE and LAMMPS. Widely applied in heat transfer, mechanical properties, phase transitions, irradiation damage, and catalysis, GPUMD has been utilized in over 130 high-impact publications and continues to evolve through active community contributions.</p>',
        '<p class=\"portion\">For more details and access to the GPUMD, visit the <a href=\"https://github.com/brucefan1983/GPUMD" target=\"_blank\"> code repository</a>.</p>'

    ]
      },

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
