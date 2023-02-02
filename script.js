
function highLightDiv(value)
{
    
    idno = value.id;

    if(idno ==='1')
    {
        document.getElementById("qualification").style.backgroundColor="yellow";
        setTimeout(()=>{
            document.getElementById("qualification").style.backgroundColor="white";
        },1000);
    }
    else if(idno === '2')
    {
        document.getElementById("links").style.backgroundColor="yellow";
        setTimeout(()=>{
            document.getElementById("links").style.backgroundColor="white";
        },1000);
    
    }
    else if(idno === '3')
    {
        document.getElementById("skills").style.backgroundColor="yellow";
        setTimeout(()=>{
            document.getElementById("skills").style.backgroundColor="white";
        },1000);
        
    }
    else if(idno === '4')
    {
        document.getElementById("personal_details").style.backgroundColor="yellow";
        setTimeout(()=>{
            document.getElementById("personal_details").style.backgroundColor="white";
        },1000);
        
    }
    else if(idno === '5')
    {
        document.getElementById("media").style.backgroundColor="yellow";
        setTimeout(()=>{
            document.getElementById("media").style.backgroundColor="white";
        },1000);
    }
    else if(idno === '6')
    {
        document.getElementById("certificate").style.backgroundColor="yellow";
        setTimeout(()=>{
            document.getElementById("certificate").style.backgroundColor="white";
        },1000);
    }   
}

function feedback()
{
    
}

