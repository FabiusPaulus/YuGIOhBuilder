var Connection = require('tedious').Connection;  
    var config = {  
        server: '16.0.1000.6',  //update me
        authentication: {
            type: 'default',
            options: {
            userName: 'javascript'
            }
        },
        options: {
            database: 'UserInfo'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        console.log("Connected");  
        
    });
    
    connection.connect();

    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  

  
    function executeStatement() {  
        request = new Request("SELECT * FROM UserData;", function(err) {  
        if (err) {  
            console.log(err);}  
        }); 
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });   
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        request.on("requestCompleted", function (rowCount, more) {
            console.log("hier könnte die nächste query stehen")
        });  
        connection.execSql(request);
    } 
    executeStatement(); 