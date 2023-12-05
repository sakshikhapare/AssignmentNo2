function calculateLoan() {
    // Retrieve form values
    var employeeId = document.getElementById("employeeId").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var designation = document.getElementById("designation").value;
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var dateOfLoan = new Date(document.getElementById("dateOfLoan").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var maturityDate = new Date(document.getElementById("maturityDate").value);
    var interestPayable = calculateInterest(loanAmount, interestRate, dateOfLoan, maturityDate);

    if (employeeId.match(/^E.{3,}$/)) {
        // Display the result in Indian Rupees
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "<p>Employee ID: " + employeeId + "</p>" +
                              "<p>Name: " + name + "</p>" +
                              "<p>Address: " + address + "</p>" +
                              "<p>Designation: " + designation + "</p>" +
                              "<p>Loan Amount Payable: " + formatCurrency(loanAmount) + "</p>" +
                              "<p>Interest Payable: " + formatCurrency(interestPayable) + "</p>";
    } else {
        alert("Employee ID must start with 'E' and be at least four characters");
    }
}

function calculateInterest(loanAmount, interestRate, dateOfLoan, maturityDate) {
    var timeDiff = maturityDate - dateOfLoan;
    var timeInYears = timeDiff / (1000 * 60 * 60 * 24 * 365);
    return (loanAmount * interestRate * timeInYears) / 100;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
}
