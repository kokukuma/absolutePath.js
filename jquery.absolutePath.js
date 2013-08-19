(function($){
    $.fn.extend({
        getAbsolutePath : function(element, absolutePath ){
            if (absolutePath == null){
                var absolutePath = new Array();
            }
            if (element == null){
                var element = this.get(0);
            }

            var el  = element.tagName;
            var num = $(element).index();
            var len = absolutePath.length;

            absolutePath[len] = {"element": el, "number": num};

            if(element.parentNode.tagName == "BODY"){
                return  absolutePath.reverse();
            }else{
                return this.getAbsolutePath(element.parentNode, absolutePath);
            }
        },

        getElementByAbsolutePath : function(absolutePath){
            var path = "BODY";
            for (var i in absolutePath){
                path += " > " + ":eq(" + absolutePath[i].number + ")"
            }
            return $(path);
        },
    });
})(jQuery);
