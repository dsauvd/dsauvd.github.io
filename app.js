q1=document.getElementById('q1')
q=0
a=1
aa=100
aaa1=1.5
mm=-201
aa1=100
aa2=100
a1a1=1.5
a2a2=1.5
aucsp=2000
aucp=1
urau1=0
urau2=0
rb=0

coocie = document.getElementById('q')

console.log(coocie.getBoundingClientRect().width /  1.5 - 15)
function animation(elem) { // некоторые аргументы определим на будущее
    var $ = {
        radius  :     coocie.getBoundingClientRect().width /  1.5,
        speed   :     10,
        s       :     0
    }
    f = 0
    var s = 0.2 * Math.PI / 180; //Вычислим угол
    setInterval(function() { // функция движения 
        f += s; // приращение аргумента
        
			   elem.style.left =  coocie.getBoundingClientRect().x + 80 + $.radius * Math.sin(f - 67.5)  + 'px';
			   elem.style.top =   coocie.getBoundingClientRect().y - 15 + coocie.getBoundingClientRect().width / 2 + $.radius * Math.cos(f - 67.5) + 'px';
        if (a == 0){
            if ($.radius > coocie.getBoundingClientRect().width /  1.5 - 15){
                $.radius -= 0.5
            }
            else{
                a = 1
                q += 1
                q1.innerText = q
                if (q>=10000){
                    q1.innerText = (q / 100 >> 0) / 10 + 'K'
                }
                if (q>=1000000){
                    q1.innerText = (q / 100000 >> 0) / 10 + 'B'
                }
                if (q>=1000000000){
                    q1.innerText = (q / 100000000 >> 0) / 10 + 'M'
                }
            }
        }
        else{
            if ($.radius < coocie.getBoundingClientRect().width /  1.5){
                $.radius += 0.5
            }
            else{
                $.s += 1
                if ($.s == 200){
                    a = 0
                    $.s = 0
                }
            }
        }
    }, $.speed)
}

function animation1(elem,f1) { // некоторые аргументы определим на будущее
    var $ = {
        radius  :     coocie.getBoundingClientRect().width /  1.5,
        speed   :     10,
        s       :     0,
        a       :     0
    }
    var s = 0.2 * Math.PI / 180; //Вычислим угол
    setInterval(function() { // функция движения 
        f1 += s; // приращение аргумента
        
			   elem.style.left =  coocie.getBoundingClientRect().x + 80 + $.radius * Math.sin(f1 - 67.5)  + 'px';
			   elem.style.top =   coocie.getBoundingClientRect().y - 15 + coocie.getBoundingClientRect().width / 2 + $.radius * Math.cos(f1 - 67.5) + 'px';
        if ($.a == 0){
            if ($.radius > coocie.getBoundingClientRect().width /  1.5 - 15){
                $.radius -= 0.5
            }
            else{
                $.a = 1
                q += 1
                q1.innerText = q
                if (q>=10000){
                    q1.innerText = (q / 100 >> 0) / 10 + 'K'
                }
                if (q>=1000000){
                    q1.innerText = (q / 100000 >> 0) / 10 + 'B'
                }
                if (q>=1000000000){
                    q1.innerText = (q / 100000000 >> 0) / 10 + 'M'
                }
            }
        }
        else{
            if ($.radius < coocie.getBoundingClientRect().width /  1.5){
                $.radius += 0.5
            }
            else{
                $.s += 1
                if ($.s == 200){
                    $.a = 0
                    $.s = 0
                }
            }
        }
        return f1
    }, $.speed)
}

// Нажатие + Отображение текста
function qq1(){
        q=q+a
        q1.innerText = q
        if (q>=10000){
            q1.innerText = (q / 100 >> 0) / 10 + 'K'
        }
        if (q>=1000000){
            q1.innerText = (q / 100000 >> 0) / 10 + 'B'
        }
        if (q>=1000000000){
            q1.innerText = (q / 100000000 >> 0) / 10 + 'M'
        }
}
// Выдвигание меню
function qq2(menu1){
    if(mm==-201){
        window.menu1 = setInterval(qq3,5)
    }
    if(mm==0){
        window.menu1 = setInterval(qq4,5)
    }
}
function qq3(menu1){
    document.getElementById('menu').style.left = mm
    document.getElementById('a1').style.left = mm + 10
    document.getElementById('a2').style.left = mm + 10
    document.getElementById('a3').style.left = mm + 95
    document.getElementById('aaa').style.left = mm + 10

    document.getElementById('ab1').style.left = mm + 10
    document.getElementById('ab2').style.left = mm + 10
    document.getElementById('aaab').style.left = mm + 10
    document.getElementById('aab1').style.left = mm + 10
    if(rb==0){
        document.getElementById('abab').style.left = mm + 10
    }
    mm=mm+1
    if (mm==0){
        clearInterval ( window.menu1 );
    }
}
function qq4(menu1){
    document.getElementById('menu').style.left = mm
    document.getElementById('a1').style.left = mm + 10
    document.getElementById('a2').style.left = mm + 10
    document.getElementById('a3').style.left = mm + 95
    document.getElementById('aaa').style.left = mm + 10

    document.getElementById('ab1').style.left = mm + 10
    document.getElementById('ab2').style.left = mm + 10
    document.getElementById('aaab').style.left = mm + 10
    document.getElementById('aab1').style.left = mm + 10
    if(rb==0){
        document.getElementById('abab').style.left = mm + 10
    }
    mm=mm-1
    if (mm==-201){
        clearInterval ( window.menu1 );
    }
}
// Клик
function qq5(){
    if(q>=aa){
        q-=aa
        document.getElementById('qq51').innerText = Number(document.getElementById('qq51').innerText) + 1
        aa=Math.round(aa*aaa1)
        aaa1=((a+1)/a)
        document.getElementById('aaa').innerText = 'Улучшить за ' + aa
        a=a+1
        document.getElementById('qq52').innerText = a
        q1.innerText = q
        if (q>=10000){
            q1.innerText = (q / 100 >> 0) / 10 + 'K'
        }
        if (q>=1000000){
            q1.innerText = (q / 100000 >> 0) / 10 + 'B'
        }
        if (q>=1000000000){
            q1.innerText = (q / 100000000 >> 0) / 10 + 'M'
        }
    }
}
// Автокликер
function qq6(){
    if(q>=aa1){
        elem = document.getElementById('click')
        animation1(elem,0)
        rb=1
        document.getElementById('abab').style.left = -200
        q-=aa1
        aa1 = 150
        document.getElementById('aaab').innerText = 'Улучшить за ' + aa1
        document.getElementById('qqb51').innerText = aucsp / 1000 + 'c.'
        document.getElementById('qqb51').style.textAlign = 'center'
        document.getElementById('qqb52').innerText = aucp
        document.getElementById('aab1').innerText = 'Уровень: ' + urau1
        document.getElementById('aab1').style.fontSize = '16px'
        document.getElementById('aab1').style.textAlign = 'center'
        document.getElementById('aab2').style.textAlign = 'center'
        q1.innerText = q
    }
}
celem = 1
function qq7(){
    if(q>=aa1 && celem<9){
        textc = 'click' + String(celem)
        elem = document.getElementById(textc)
        animation1(elem,0)
        if (aucsp>100){
            q-=aa1
        }
        if(aa1<2250){
            aa1=aa1*a1a1
            a1a1+=0.5
        }
        else if(aa1<9000){
            aa1=aa1*2
        }
        else if(aa1<20250){
            aa1=aa1*1.5
        }
        
        if(aa1<20250){
            document.getElementById('aaab').innerText = 'Улучшить за ' + aa1
        }if(aa1==20250){
            document.getElementById('aaab').innerText = 'Полностью Улучшино'
        }
        document.getElementById('qqb51').innerText = aucsp / 1000 + 'c.'
        urau1+=1
        document.getElementById('aab1').innerText = 'Уровень: ' + urau1
        document.getElementById('aab1').style.textAlign = 'center'
        celem += 1
    }
    
}

function rb1(){
    q=9999000000000
    q1.innerText = q
    if (q>=1000000000){
        q1.innerText = (q / 100000000 >> 0) / 10 + 'M'
    }
}
function rb0(){
    q=0
    q1.innerText = q
}
q1.innerText = q