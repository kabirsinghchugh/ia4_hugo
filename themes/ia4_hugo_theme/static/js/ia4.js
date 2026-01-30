/**
 * iA4 – by Information Architects
 * Author: iA
 * http://ia.net
 */
var iA4 = (function($) {
    /**
     * Jetpack contact form markup optimization
     */
    $(".contact-form :input").each(function(index, elem) {
        var eId = $(elem).attr("id");
        var label = null;
        if (eId && (label = $(elem).parents("form").find("label[for=" + eId + "]")).length == 1) {
            $(elem).attr("placeholder", $(label).text());
            $(label).remove();
        }
    });

    /**
     * Private methods
     */
    var methods = {
        /**
         * Toggle the search bar
         */
        toggleSearch: function(e) {
            var input = $('.navigation input');
            $('.search').toggleClass('current_page_item');
            $('body').removeClass('menu-open');
            $('.menu-toggle').attr('aria-expanded', 'false');
            $('#site-sidebar').attr('aria-hidden', 'true');

            // focus input on click
            if (!$('body').hasClass('mobile')) {
                setTimeout(function() {
                    input.focus();
                }, 1);
            }

            $('body').toggleClass('searching');

            if (!$('body').hasClass('searching')) {
                $('#result #iA4search').fadeOut('fast');
                $('#result').height(0);
                input.val('').blur();
            }
            $("#searchterm").focus();

            setTimeout(function() {
                $('#result').empty();
            }, 450);
        },

        /**
         * Toggle the mobile menu
         */
        toggleMenu: function(forceClose) {
            var body = $('body');
            var shouldClose = forceClose === true;
            if (shouldClose) {
                body.removeClass('menu-open');
            } else {
                body.toggleClass('menu-open');
            }
            var isOpen = body.hasClass('menu-open');
            $('.menu-toggle').attr('aria-expanded', isOpen ? 'true' : 'false');
            $('#site-sidebar').attr('aria-hidden', isOpen ? 'false' : 'true');
        },

        /**
         * Load search results
         */
        search: function(ev) {
            // escape
            if (ev.keyCode === 27) {
                return methods.toggleSearch();
            }

            var val = $.trim(this.value),
                result = $('#result'),
                menu = $('#main-menu');

            menu.toggleClass('hidden', val.length > 0);

            // start searching from one word
            if (!val.length)  { 
                result.height(0);
                setTimeout(function() {
                    $('#result').empty();
                }, 350);
                return true;
            }

            if (val.length < 2) {
                return false;
            }

            var index = window.ia4SearchIndex || [];
            var query = val.toLowerCase();
            var matches = index.filter(function(item) {
                var haystack = [
                    item.title || '',
                    item.summary || '',
                    (item.tags || []).join(' ')
                ].join(' ').toLowerCase();
                return haystack.indexOf(query) !== -1;
            }).slice(0, 8);

            var html = '<div id="iA4search" class="center">';
            html += '<div class="cols"><div class="col small"><h3 class="search-heading">Results for “' + methods.escapeHtml(val) + '”</h3></div></div>';

            if (matches.length) {
                html += '<div class="cols"><div class="col">';
                matches.forEach(function(item) {
                    html += '<article class="search-result">';
                    html += '<h2 class="blog-title"><a href="' + item.permalink + '">' + methods.escapeHtml(item.title) + '</a></h2>';
                    if (item.date) {
                        html += '<p class="meta meta--blog">' + methods.escapeHtml(item.date) + '</p>';
                    }
                    if (item.summary) {
                        html += '<p>' + methods.escapeHtml(item.summary) + '</p>';
                    }
                    if (item.tags && item.tags.length) {
                        html += '<div class="tags"><ul class="tags-list">';
                        item.tags.forEach(function(tag) {
                            html += '<li class="tag"><span class="tag__link tag__link--static">' + methods.escapeHtml(tag) + '</span></li>';
                        });
                        html += '</ul></div>';
                    }
                    html += '</article>';
                });
                html += '</div></div>';
            } else {
                html += '<div class="cols"><div class="col"><p>No results found.</p></div></div>';
            }

            html += '</div>';

            result.html(html);
            var height = result.find('#iA4search').outerHeight(true) + 64;
            result.height(height || 0);
            result.find('h2, p:not(.meta--blog)').highlight(val);

            return true;
        },

        /**
         * Trigger actions when certain keys are pressed and no input is focussed
         */
        keyboardShortcuts: function(e) {
            if ($(':input:focus').size() === 0) {
                var key = e.keyCode ? e.keyCode : e.which;

                if (key === 27 && $('body').hasClass('menu-open')) {
                    methods.toggleMenu(true);
                    e.preventDefault();
                }

                if (key === 83) {
                    // Bind "s" key to search
                    methods.toggleSearch();
                    e.preventDefault();
                }
            }
        },

        adjustPlaceholder: function(ev) {
            $(window.document).width() > 767 ? $('#searchterm').attr('placeholder', 'What are you looking for?') : $('#searchterm').attr('placeholder', 'Search');
        },

        registerEvents: function() {
            $('[class*=js-action]').off().on('click.ia4', function(e) {
                e.preventDefault();
                methods[$(this).attr('data-action')].call(this, e);
            });
            $('.site-sidebar a').off('click.ia4').on('click.ia4', function() {
                methods.toggleMenu(true);
            });
        },

        escapeHtml: function(str) {
            return $('<div/>').text(str || '').html();
        }
    };

    $('.js-search').on('keyup', $.debounce(250, methods.search));
    $(window).on('resize', methods.adjustPlaceholder);
    $(document).on('keydown', methods.keyboardShortcuts);
    $(document).off('click.ia4', '.js-theme-toggle').on('click.ia4', '.js-theme-toggle', function() {
        var body = $('body');
        body.toggleClass('dark-mode');
        var isDark = body.hasClass('dark-mode');
        $(this).attr('aria-pressed', isDark ? 'true' : 'false');
        try {
            window.localStorage.setItem('ia4-theme', isDark ? 'dark' : 'light');
        } catch (e) {}
    });

    try {
        var storedTheme = window.localStorage.getItem('ia4-theme');
        if (storedTheme === 'dark') {
            $('body').addClass('dark-mode');
            $('.js-theme-toggle').attr('aria-pressed', 'true');
        }
    } catch (e) {}

    return {
        initialize: function() {
            methods.registerEvents();
            methods.adjustPlaceholder();
        },
    };

})(window.iA4 = jQuery || {});

iA4.initialize();
