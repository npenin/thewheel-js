(function ($) {

    $.extend($.fn, {
        bindKey: function (hotkey, handler) {
            hotkey = hotkey.toLowerCase();
            var needCtrl = /ctrl\+/.test(hotkey);
            var needAlt = /alt\+/.test(hotkey);
            var needShift = /shift\+/.test(hotkey);
            var key = hotkey.match(/(^|\+)([^\+]+)$/)[2];
            var charCode;
            switch (key) {
                case 'esc':
                    charCode = 27;
                    break;
                case 'enter':
                    charCode = 13;
                    break;
                case 'backspace':
                    charCode = 8;
                    break;
				case 'space':
					charCode=32;
					break;
				case 'left':
					charCode=37;
					break;
				case 'up':
					charCode=38;
					break;
				case 'right':
					charCode=39;
					break;
				case 'down':
					charCode=40;
					break;
				case 'plus':
					charCode=107;
					break;
				case 'minus':
					charCode=109;
					break;
				case '²':
					charCode=222;
					break;
				case ',':
				    charCode=188;
				    break;
                default:
                    charCode = key.charCodeAt(0) - 97 + 65;
                    break;
            }

            return this.bind('keydown', function (evt) {
                if (needCtrl != evt.ctrlKey) return;
                if (needAlt != evt.altKey) return;
                if (needShift != evt.shiftKey) return;

                var result = true;

                if (evt.keyCode == charCode) result = handler(evt);

                if (result === false) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    evt.keyCode = 0;
                    evt.cancelBubble = true;
                    evt.returnValue = false;
                    if (window.event) try {
                        window.event.keyCode = 0;
                    } catch (e) { }
                    return false;
                }
            });
        }
    });
    
})(jQuery);
