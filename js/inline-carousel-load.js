// JavaScript Document
 $(window).load( function(){
                //  Responsive layout, resizing the items
                $('#carousel').carouFredSel({
                    auto: false,
                    responsive: true,
                    width: '100%',      
                    scroll: 1,
                    prev: '#prev',
                    next: '#next',
                    pagination: false,
                    mousewheel: false,
                    swipe: {
                        onMouse: true,
                        onTouch: true
                    },
                    items: {
                      width:140,
                      height: 'auto',   //  optionally resize item-height
                        visible: {
                            min: 1,
                            max: 6
                        }
                    }
                });
                

                $(".tabs1 ul").tabs(".tab_container .tab_content");
                    
                                
            });