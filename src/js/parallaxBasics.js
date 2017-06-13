;(function ( $, window, document, undefined ) {

    var pluginName = "parallaxBasics",
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this.$element = $(element);

        this.options = $.extend( {}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            this.setBackground();
            this._onMouseOver();
        },

        _onMouseOver: function() {
            this.$element.on('mouseover', this.getPositionCursor)
        },

        setBackground: function() {
            var urlBg = this.element.getAttribute('data-background');
            if (!urlBg) {
                return; 
            }

            this.element.style.backgroundImage = "url('"+urlBg+"')";
        },

        getPositionCursor: function(evt, e,c) {
            console.log(evt, e, c);
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );