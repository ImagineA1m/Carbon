import logo from './logo.svg';
import './App.css';
import './form.html'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}
function exportF() {
  //Format your table with form data
  document.getElementById("input").innerHTML = document.getElementById("text").value;

  var table = document.getElementById("table");
  var html = table.outerHTML;

  var url = 'data:application/vnd.ms-excel,' + escape(html); // Set your html table into url 
  var link = document.getElementById("downloadLink");
  link.setAttribute("href", url);
  link.setAttribute("download", "export.xls"); // Choose the file name
  link.click(); // Download your excel file   
  return false;
}

export default App;
4:10
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        First name: <input type="text" name="fname"><br>
        Last name: <input type="text" name="lname"><br>
        <input type="submit" value="Submit">
      </form>
</body>
</html>
    <form>
        First name: <input type="text" name="fname"><br>
        Last name: <input type="text" name="lname"><br>
        <input type="submit" value="Submit">
      </form>
</body>