var animation = lottie.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/animations/arrowPoint.json'


    // rendererSettings: {
     
    //   preserveAspectRatio: 'xMinYMin slice', // Supports the same options as the svg element's preserveAspectRatio property
    
  
    // }
  })
  animation.setSpeed(1.5);