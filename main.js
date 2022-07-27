var AcidS = false;
function SA(){
    if(!AcidS){
        AcidS=true;
        document.getElementById("Salicylic-Acid").style.display="none";
        return;
    }
    if(AcidS){
        AcidS = false;
        document.getElementById("Salicylic-Acid").style.display = "block";
        return;
        }
    }


    var AdapaL = false;
    function AD(){
        if(!AdapaL){
            AdapaL=true;
            document.getElementById("Adapalene").style.display="none";
            return;
             }

        if(AdapaL){
            AdapaL = false;
            document.getElementById("Adapalene").style.display = "block";
            return;
        }

    }

    var Benzoyl = false;
    function BP(){
        if(!Benzoyl){
            Benzoyl=true;
            document.getElementById("Benzoyl-Peroxide").style.display="none"
            return;
        }
        if(Benzoyl){
            Benzoyl = false;
            document.getElementById("Benzoyl-Peroxide").style.display="block";
            return;
        }
    }

        var Azelaic = false;
        function AA(){
            if(!Azelaic){
                Azelaic=true;
                document.getElementById("Azelaic-Acid").style.display="none";
                return;
            }
            if(Azelaic) {
                Azelaic=false;
                document.getElementById("Azelaic-Acid").style.display="block";
                return;
            }
        }
