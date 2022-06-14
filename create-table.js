const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'mobapp',
  password : 'M@au15071998',
  database : 'apimob'
});


connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
  createTable(connection);
})

function createTable(conn){

    const sql = "CREATE TABLE IF NOT EXISTS Clientes ("+
                "ID int NOT NULL AUTO_INCREMENT,"+
                "Nome varchar(150) NOT NULL,"+
	            	"NomeCompleto varchar(150) NOT NULL,"+
                "CPF char(11) NOT NULL,"+
		            "Situacao char(11) NOT NULL,"+
                "PRIMARY KEY (ID)"+
                ");";
    
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela!');
    });
}


 