import "./styles.css";
import { Button } from "reactstrap";
import jsPDF from "jspdf";

export default function App() {

  var doc = new jsPDF("p", "pt", "a4");
var content = document.getElementById("content").innerHTML
  

  var pdfGenerate = () => {
    doc.html(content, {
      callback: function (doc) {
        doc.save("swipe");
      }
    });
  };

  var savePDF = () => {
    
    doc.html(content, {
      callback: function (doc) {
        doc.output("dataurlnewwindow");
      }
    });
  };

  return (
    <div className="App, btn-group">
      <div id="content">
        <h3 className="title">SALES ORDER</h3>
        <table border="3" className="table">
          <tbody>
            <td>
              <strong>Max Electronics</strong>
              <br />
              A 204,Shivaji Nagar, Bengaluru
              <br />
              GSTIN/UIN : 29AAACP7879D1ZO
              <br />
              State Name : Karnataka, Code : 29 <br />
              Contact : 9810123456
              <br />
              E-Mail : Max@guruelectronics.com
              <br />
              www.maxeIectronics.com
              <br />
            </td>
          </tbody>
          <tbody>
            <td>
              Despatch to
              <br />
              <strong>Max Electronics</strong>
              <br />
              361, City Plaza
              <br />
              M.G Road <br />
              Bengaluru
              <br />
              GSTIN/UIN 29AAACP1234M1Z0
              <br />
              State Name Karnataka, Code : 29
              <br />
            </td>
          </tbody>
        </table>
      </div>
      <br />
      <Button className="button" onClick={savePDF}>
        View PDF
      </Button>
      <br />
      <Button className="button" onClick={pdfGenerate}>
        Download PDF
      </Button>
    </div>
  );
}
