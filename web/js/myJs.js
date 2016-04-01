$(document).ready(function(){
    // 初始化radio的显隐效果
    var show_dom = $('[data-show-id] :checked').parent();
    var hide_dom = $('[data-hide-id] :checked').parent();

    $.each(show_dom, function(){
        var id = $(this).data('show-id');
        if(typeof(id) == 'string'){
            $(id).removeClass('hidden');
        } else if(typeof(id) == 'object'){
            $.each(id, function(){
                $(this.toString()).removeClass('hidden');
            })
        }
    });
    $.each(hide_dom, function(){
        var id = $(this).data('hide-id');
        if(typeof(id) == 'string'){
            $(id).addClass('hidden');
        } else if(typeof(id) == 'object'){
            $.each(id, function(){
                $(this.toString()).addClass('hidden');
            })
        }
    });

    /****************************************
     *
     * 功能：绑定radio修改事件，显示隐藏对应的dom
     * 说明：
     *
     *****************************************
     *
     * @param mix show-id 需要点击后显示的dom(id or class)
     * @param mix hide-id 需要点击后隐藏的dom(id or class)
     *
     * example:
     * <input type="radio" data-hide-id="#test1" data-show-id="['#test2','.test3']">点击</div>
     *
     * TODO 事件的绑定由data-api设定，data-bind='chick' data-action='show-hide' data-show-id=  ...
     ****************************************/
    $(document).on('change', ':radio[data-show-id]', function(){
        if(typeof($(this).data('show-id')) == 'string'){
            $($(this).data('show-id')).removeClass('hidden');
        } else if(typeof($(this).data('show-id')) == 'object'){
            $.each($(this).data('show-id'), function(){
                $(this.toString()).removeClass('hidden');
            })
        }
    });
    $(document).on('change', ':radio[data-hide-id]', function(){
        if(typeof($(this).data('hide-id')) == 'string'){
            $($(this).data('hide-id')).addClass('hidden');
        } else if(typeof($(this).data('hide-id')) == 'object'){
            $.each($(this).data('hide-id'), function(){
                $(this.toString()).addClass('hidden');
            })
        }
    });



    /****************************************
     *
     * 功能：绑定点击事件，显示隐藏对应的dom
     * 说明：
     *
     *****************************************
     *
     * @param mix show-id 需要点击后显示的dom(id or class)
     * @param mix hide-id 需要点击后隐藏的dom(id or class)
     *
     * example:
     * <div class='btn' data-hide-id="#test1" data-show-id="['#test2','.test3']">点击</div>
     *
     * TODO 事件的绑定由data-api设定，data-bind='chick' data-action='show-hide' data-show-id=  ...
     ****************************************/
    $(document).on('click', '[data-show-id]', function(){
        if(typeof($(this).data('show-id')) == 'string'){
            $($(this).data('show-id')).removeClass('hidden');
        } else if(typeof($(this).data('show-id')) == 'object'){
            $.each($(this).data('show-id'), function(){
                $(this.toString()).removeClass('hidden');
            })
        }
    });
    $(document).on('click', '[data-hide-id]', function(){
        if(typeof($(this).data('hide-id')) == 'string'){
            $($(this).data('hide-id')).addClass('hidden');
        } else if(typeof($(this).data('hide-id')) == 'object'){
            $.each($(this).data('hide-id'), function(){
                $(this.toString()).addClass('hidden');
            })
        }
    });


});
