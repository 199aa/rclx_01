window.addEventListener('load', function() {

    var arrowl = document.querySelector('.arrow-l');
    var arrowr = document.querySelector('.arrow-r');
    var b2 = document.querySelector('.b2');
    var ul = b2.querySelector('ul');
    var ol = b2.querySelector('.circle');
    var b2Width = b2.offsetWidth;

    function oo() {
        var one = setInterval(function() {
            arrowr.click();
        }, 2000);
    }

    function pp() {
        var one = setInterval(function() {
            arrowr.click();
        }, 2000);
        clearInterval(one);
    }
    b2.addEventListener('mouseenter', function() {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        pp();
        one = null;
    })
    b2.addEventListener('mouseleave', function() {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        oo();
    });

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);

        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {

                ol.children[i].className = '';

            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * b2Width);
        })

    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    arrowr.addEventListener('click', function() {
        if (flag) {
            flag = false;
            num++;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }

            animate(ul, -num * b2Width, function() {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })
    arrowl.addEventListener('click', function() {

        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = num * b2Width + 'px';

            }
            num--;
            animate(ul, -num * b2Width, function() {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }

            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })

})