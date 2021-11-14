onload = function() {
    if ('speechSynthesis' in window) with(speechSynthesis) {

        var preEN = document.querySelector('#preEN');
        var preEUS = document.querySelector('#preEUS');
        var preES = document.querySelector('#preES');
        var profEN = document.querySelector('#profEN');
        var profEUS = document.querySelector('#profEUS');
        var profES = document.querySelector('#profES');
        var expEN = document.querySelector('#expEN');
        var expEUS = document.querySelector('#expEUS');
        var expES = document.querySelector('#expES');
        var habEN = document.querySelector('#habEN');
        var habES = document.querySelector('#habES');
        var contEN = document.querySelector('#contEN');
        var contEUS = document.querySelector('#contEUS');
        var contES = document.querySelector('#contES');
        var langEN = document.querySelector('#langEN');
        var langEUS = document.querySelector('#langEUS');
        var langES = document.querySelector('#langES');
        var stopEle = document.querySelector('#stop');
        var stopLang = document.querySelector('#stopLang');
        var stopExp = document.querySelector('#stopExp');
        var stopHab = document.querySelector('#stopHab');
        var stopProf = document.querySelector('#stopProf');
        var stopPre = document.querySelector('#stopPre');
        var flag = false;

        preEN.addEventListener('click', onClickPlayPreEN);
        preEUS.addEventListener('click', euskeraEZ);
        preES.addEventListener('click', onClickPlayPreES);
        profEN.addEventListener('click', onClickPlayProfEN);
        profEUS.addEventListener('click', euskeraEZ);
        profES.addEventListener('click', onClickPlayProfES);
        expEN.addEventListener('click', onClickPlayExpEN);
        expEUS.addEventListener('click', euskeraEZ);
        expES.addEventListener('click', onClickPlayExpES);
        habEN.addEventListener('click', onClickPlayHabEN);
        habEUS.addEventListener('click', euskeraEZ);
        habES.addEventListener('click', onClickPlayHabES);
        contEN.addEventListener('click', onClickPlayContEN);
        contEUS.addEventListener('click', euskeraEZ);
        contES.addEventListener('click', onClickPlayContES);
        langEN.addEventListener('click', onClickPlayLangEN);
        langEUS.addEventListener('click', euskeraEZ);
        langES.addEventListener('click', onClickPlayLangES);
        stopEle.addEventListener('click', onClickStop);
        stopLang.addEventListener('click', onClickStop);
        stopExp.addEventListener('click', onClickStop);
        stopHab.addEventListener('click', onClickStop);
        stopProf.addEventListener('click', onClickStop);
        stopPre.addEventListener('click', onClickStop);

        function onClickPlay(button, lang, section) {
            if(!flag){
                flag = true;
                utterance = new SpeechSynthesisUtterance(document.querySelector(section).textContent);
                utterance.lang = lang;
                utterance.onend = function(){
                    flag = false; button.className = stopEle.className = 'stopped';
                };
                button.className = 'played';
                stopEle.className = '';
                speak(utterance);
            }
        }

        function euskeraEZ() {
            onClickStop();  
            alert("Aukera ez dago eskuragarri, barkatu eragozpenak.");
        }

        function onClickPlayPreEN() {
            onClickStop();
            onClickPlay('preEN','en', '#prefacio');
        }

        function onClickPlayPreES() {
            onClickStop();
            onClickPlay('preES','es', '#prefacio');
        }

        function onClickPlayProfEN() {
            onClickStop();
            onClickPlay('profEN','en', '#trayectoria');
        }

        function onClickPlayProfES() {
            onClickStop();
            onClickPlay('profES','es', '#trayectoria');
        }

        function onClickPlayExpEN() {
            onClickStop();
            onClickPlay('expEN','en', '#experiencia');
        }

        function onClickPlayExpES() {
            onClickStop();
            onClickPlay('expES','es', '#experiencia');
        }

        function onClickPlayHabEN() {
            onClickStop();
            onClickPlay('habEN','en', '#habilidades');
        }

        function onClickPlayHabES() {
            onClickStop();
            onClickPlay('habES','es', '#habilidades');
        }

        function onClickPlayContEN() {
            onClickStop();
            onClickPlay('contEN','en', '#contReader');
        }

        function onClickPlayContES() {
            onClickStop();
            onClickPlay('contES','es', '#contReader');
        }

        function onClickPlayLangEN() {
            onClickStop();
            onClickPlay('langEN','en', '#idiomas');
        }

        function onClickPlayLangES() {
            onClickStop();
            onClickPlay('langES','es', '#idiomas');
        }

        function onClickStop() {
            if(speaking){ /* stop narration */
                /* for safari */
                stopEle.className = 'stopped';
                flag = false;
                cancel();
            }
        }
    }   else { /* speech synthesis not supported */
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('div'));
    }

}
