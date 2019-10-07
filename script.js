
                    function toadd()
                    {
                        if(document.getElementById("frm").Add_task.value == "" || document.getElementById("frm").Describe_task.value == "")
                         { 
                             alert("Add the task and description in the respective fields to be added."); 
                         } 
                        else
                        {
                            var table=document.getElementById("todotable");
                            var row=table.insertRow(1);
                            var checkbox1=row.insertCell(0);
                            var task=row.insertCell(1);
                            var description=row.insertCell(2);
                            var start_date=row.insertCell(3);
                            var end_date=row.insertCell(4);
                            var checkbox=document.createElement('input')
                            checkbox.type = 'checkbox';
                            checkbox.name="select";
                            checkbox.id='select';
                            checkbox1.appendChild(checkbox);
                            task.innerHTML=document.getElementById("frm").Add_task.value
                            description.innerHTML=document.getElementById("frm").Describe_task.value
                            start_date.innerHTML= new Date();
                            var end=new Date(document.getElementById("frm").end_date.value);
                            end_date.innerHTML=end;
                            

                        }
                    }
                    function todelete(todotable)
                    {
                        var table1=document.getElementById("todotable");
                        
                        var row1=table1.rows.length;
                        var count=0; 
                         for(var i=1;i<=table1.rows.length;i++)
                        {
                             var row2=table1.rows[i];
                            var chk=row2.cells[0].childNodes[0];
                            if(chk.checked==true)
                            {
                                document.getElementById('todotable').deleteRow(i);
                                row1--;
                                i--;
                                count=count+1;
                            }
                        }
                    }
                    function myFunction() {
                       setInterval(function to_check_end_date(todotable)
                    {
                        var d=new Date();
                        var table1=document.getElementById("todotable");
                        for(i=1;i<table1.rows.length;i++)
                        {
                            var d=new Date();
                            var end=new Date(document.getElementById("todotable").rows[i].cells[4].innerHTML);
                            if(end<d)
                            {
                               // document.getElementById('todotable').rows[i].cells[1].innerHTML=document.getElementById('todotable').rows[i].cells[1].innerHTML.strike();
                               for(j=1;j<=4;j++)
                               {
                                   var t=document.getElementById('todotable').rows[i].cells[j].innerHTML;
                                   document.getElementById('todotable').rows[i].cells[j].innerHTML=t.strike();
                                   //document.getElementById('todotable').deleteRow(i); 
                               }
                            }
                        }
                    }, 3000);}              
                    myFunction();