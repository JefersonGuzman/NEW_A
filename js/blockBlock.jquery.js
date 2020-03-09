(function($){

        if ($.adblock === undefined){
                $.adblock = true;
        }

        $.fn.showOnAdBlock = function(){

                if($.adblock){
                        this.show();
                }

                return this;
        };

})(jQuery);