//익스프레스 클래스를 이용해 익스프레스 객체 생성
const express = require('express');

const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cpg18ift',
  port     : '3306',
  database : 'node_api_codelab'
});

//생성한 익스프레스 어플리케이션을 app상수에 할당
const app = express();

// 경로: /users 에 대해서
// 처리: require(./api/user) 미들웨어가 처리
app.use('/users', require('./api/users/'));

app.use('/customers', require('./api/customers/'));

//라우팅 설정
app.get('/', (req, res) => {
  res.send('hello World!\n');
});

app.get('/mysqltest', (req, res) => {

  //connection.connect();

  connection.query('SELECT * from tmp_user', function(err, rows, fields) {
    // if (!err)
    //   console.log('The solution is: ', rows);
    //   res.send(rows);
    //   //res.json(rows);
    // else
    //   console.log('Error while performing Query.', err);

      if(err) throw err;

      console.log('The solution is: ', rows);
      res.send(rows);
  });

  //connection.end();
  
  // const customers = [
  //   {id: 1, firstName: 'John', lastName: 'Doe'},
  //   {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  //   {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  // ];

  // res.json(customers);
});

const port = 5000;

//app.listen(port, () => `Server running on port ${port}`);

//서버의 요청 대기
app.listen(port, () => {
  //서버 구동 완료 메세지
  console.log(`Server running on port ${port}`);
});