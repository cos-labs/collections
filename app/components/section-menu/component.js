import Ember from "ember";

const pi = 3.14159265359;

function cosPow6Intg(x) {
    return x - ((15*Math.sin(2*pi*x))/(44*pi)) - ((3*Math.sin(4*pi*x))/(44*pi)) - ((Math.sin(6*pi*x))/(132*pi));
          }

// Make our transition nice'n'smooth
function animate(propertySetter, start, end, speed, units, animationCompletedCallback) {

    units = units || 0;
    propertySetter(start + units);

    // Should be in all modern browsers now.
    // We could run a check and if need be use `Date.now()`.
    var start_time = performance.now();
    var change = end - start;
    var duration = Math.abs(change*speed)+1000;

    (function step() {
        var time_now = performance.now();
        var elapsed_time = time_now - start_time;
        requestAnimationFrame(function(ts) { // requestAnimationFrame() === Butter.
            propertySetter(start + change * cosPow6Intg(elapsed_time/duration) + units);
            if (elapsed_time >= duration) {
                propertySetter(end + units);
                animationCompletedCallback();
                return;
            }
            step();
        });
    })();
}


export default Ember.Component.extend({

    id: Ember.computed("layout.title", function() {
        return "section-" + this.get("index");
    }),
    tagName: "section",
    classNames: ["page-menu"],
    attributeBindings: ["id"],
    menuItems: Ember.computed(function() {
        return this.get("collection.settings.layers")
            .map((section, index) => {
                return {
                    section: section,
                    label: section["section-header"],
                    id: "section-" + index
                };
            })
            .filter((menuItem) => !menuItem.section['settings']['hide-from-nav']);
    }),

    actions: {
    
        scrollTo: function(id) {
            const rect = document.getElementById(id).getBoundingClientRect();
            const anchorOffset = window.pageYOffset + rect.top - 70;
            animate(
                y => window.scrollTo(0, y),
                window.scrollY,
                anchorOffset,
                .2,
                null,
                () => history.pushState({}, document.title, location.pathname + href)
            );

        }
    
    }

});
