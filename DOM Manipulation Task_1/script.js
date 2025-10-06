
    function getGrade(marks) {
      if (marks >= 90) return "A+";
      else if (marks >= 80) return "A";
      else if (marks >= 70) return "B";
      else if (marks >= 60) return "C";
      else if (marks >= 50) return "D";
      else return "F";
    }
function generateMarksheet() {
    let subject1 = Number(document.getElementById("subject1").value);
      let subject2 =Number(document.getElementById("subject2").value);
      let subject3 = Number(document.getElementById("subject3").value);

      let total = subject1 + subject2 + subject3;
      let percentage = (total / 300) * 100;

      let resultDiv = document.getElementById("result");

      resultDiv.innerHTML = `
        <table>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
          <tr>
            <td>Subject 1</td>
            <td>${subject1}</td>
            <td>${getGrade(subject1)}</td>
          </tr>
          <tr>
            <td>Subject 2</td>
            <td>${subject2}</td>
            <td>${getGrade(subject2)}</td>
          </tr>
          <tr>
            <td>Subject 3</td>
            <td>${subject3}</td>
            <td>${getGrade(subject3)}</td>
          </tr>
          <tr>
            <th colspan="2">Total Marks</th>
            <td>${total} / 300</td>
          </tr>
          <tr>
            <th colspan="2">Percentage</th>
            <td>${percentage.toFixed(1)}%</td>
          </tr>
        </table>
      `;
}