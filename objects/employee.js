var employee={

           eid:10,
           name:"don",
           exp:2,
           salary:15000
     }

    console.log(employee.name)
    console.log(employee["name"])

    for(let  emp in employee){

        console.log(emp+","+employee[emp])

    }

    console.log ("salary" in employee) 

    employee["place"]="pkd"
    console.log(employee)

    employee["salary"]+=10000
    console.log(employee)
