var a;
function showHide()
{
    if(a==1) // Faire apparaître
    {
        document.getElementById("citation").style.display="inline";
        return a=0;
    }
    else // Faire disparaître
    {
        document.getElementById("citation").style.display="none";
        return a=1;
    }
}

