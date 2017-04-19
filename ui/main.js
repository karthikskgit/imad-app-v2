var button= document.getElementById('counter');
var counter=0;
button.onclick=function(){
    
 counter=counter+1;
 var request=new XMLHttpRequest();
 request.onreadystatechange=fuction()
 {
     if(request,readyState==XMLHttpRequest.DONE)
     {
         if(request.status===200)
         {
            var names=request.responseText;
            names=JSON.parse(names);
            var list='';
            for(var i=0; i<names.length; i++){
                list +='<li>'+names[i]+'</li>';
            }
         
             var ul=document.getElementById('name list');
             ul.innerHTML=list;
             
         }
         
     }
 }
 var nameInput=document.getElementById('name');
 var name=nameInput.value;
 request.open('GET','http://http://karthikskgit.imad.hasura-app.io/counter',true);
 request.send(null);
};

var submit=docment.getElemenbyId('submit_btn');
submit.onclick=funcction()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status==200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for (var i=0; i<names.length;i++){
                    
                    list+='<li>'+names[i]+'<li>';
                }
                var ul=document.getElementById('nammelist');
                ul.innerHTML=list;
            }}
    };
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    request.open('GET','http://http://karthikskgit.imad.hasura-app.io:/submit-name?name' +name, true);
    request.send(null);
                
            
        

}