var button= document.getElementById('counter');
 alert("hi");
button.onclick=function(){
    

    var request=new XMLHttpRequest();
    alert("hi");
    
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                var counter_int=parseInt(counter);
                counter_int++;
                alert(counter_int);
                var span=document.getElementById('count');
                span.innerHTML=counter_int.toString();
                
            }}
    };
   
    request.open('GET','http://karthikskgit.imad.hasura-app.io/counter', true);
    request.send(null);
    
};

var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=o; i<names.length;i++){
                    list+='<li>'+names[i]+'<li>';
                    
                }
            var ul=document.getElementById('namelist');
            ul.innerHTML=list;
                
                
            }
            
        }
    };
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    request.open('GET', 'http://karthikskgit.imad.hasura-app.io/submit-name?name=',name,true);
    request.send(null);
}