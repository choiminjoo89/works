$(function(){

  const $header = $('.header');
  const $contents = $('.contents');
  const headerHeight = $header.height();
  const gnbList = $header.find('.gnb-list li');
  const pageNavi = $('.page-navi');
  const naviList = pageNavi.find('li');
  const sectionList = $contents.find('section');

  var targetSection;

  //sub-page 첫 실행시 header만큼 padding 적용
  $contents.css({ 'padding-top' : headerHeight + 'px' });

  //sub-page 화면 크기변화에 따른 header만큼 padding 적용
  $(document).resize(function(){
    $contents.css({ 'padding-top' : headerHeight + 'px' });
  });

  //sub-page 스크롤 이벤트
  $(window).scroll(function(){
    const $this = $(this);
    const windowTop = $this.scrollTop();
    if( 0 < windowTop ){
      $header.addClass('sticky');
    }else{
      $header.removeClass('sticky');
    }

    if( windowTop >= parseInt(sectionList.eq(3).offset().top -  headerHeight) ){
      naviList.removeClass('active');
      naviList.eq(3).addClass('active');
    }else if( windowTop >= parseInt(sectionList.eq(2).offset().top - headerHeight) ){
      naviList.removeClass('active');
      naviList.eq(2).addClass('active');
    }else if( windowTop >= parseInt(sectionList.eq(1).offset().top - headerHeight) ){
      naviList.removeClass('active');
      naviList.eq(1).addClass('active');
    }else if( windowTop >= parseInt(sectionList.eq(0).offset().top - headerHeight) ){
      naviList.removeClass('active');
      naviList.eq(0).addClass('active');
    }

  });

  //페이지 navi 클릭, 활성화 이벤트
  naviList.on('click',function(){
    const $this = $(this);
    const pageNum = $this.index();

    targetSection = sectionList.eq(pageNum).offset().top;

    naviList.removeClass('active');
    $this.addClass('active');
    $('body,html').stop().animate({
      scrollTop : targetSection - headerHeight
    },500);
  });

  var $thisGnbKo;
  var $thisGnb;

  gnbList.on('mouseenter',function(){
    const $this = $(this);
    $thisGnbKo = $this.find('a').data('gnbko');
    $this.find('a').text( $thisGnbKo );
  });

  gnbList.on('mouseleave',function(){
    const $this = $(this);
    $thisGnb = $this.find('a').data('gnb');
    $this.find('a').text( $thisGnb );
  });



});