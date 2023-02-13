document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("optionalSettingsToggle").addEventListener("click", toggleOptionalSettings);
    document.getElementById("submitButton").addEventListener("click", calculateNoodleNumber);
});

function toggleOptionalSettings() {
    document.getElementById("optionalSettings").style.display = 
        document.getElementById("optionalSettings").style.display === "none" ? "block" : "none";
}

function calculateNoodleNumber() {
    let length = document.getElementById("lengthInput").value;
    let circumference = document.getElementById("circumferenceInput").value;
    let diameter = document.getElementById("diameterInput").value;
    let errorMessage = "";
    let outputLength = 0;
    let noodleRadius = 0;
    let radius = 0;
    let volume = 0;
    if (length.length <= 0 || circumference.length <= 0 || diameter.length <= 0) {
        errorMessage = "All entries need a value";
    } else {
        length = parseFloat(length);
        circumference = parseFloat(circumference);
        noodleRadius = diameter / 2;
        if (noodleRadius == 0 || circumference == 0 || length == 0) {
            errorMessage = "Values must be greater than 0";
        } else {
            radius = circumference / (2 * Math.PI);
            diameter = 2 * radius;
            volume = radius * radius * length * Math.PI;
            outputLength = volume / (Math.PI * (noodleRadius * noodleRadius));
        }
    }

    if (outputLength != 0) {
        document.getElementById("resultContainer").style.display = "block";
        document.getElementById("result").innerHTML = "Your Noodle Number is: " + Math.trunc(outputLength);
        document.getElementById("errorContainer").style.display = "none";
    } else if (errorMessage.length > 0) {
        document.getElementById("errorContainer").style.display = "block";
        document.getElementById("errorMessage").innerHTML = errorMessage;
        document.getElementById("resultContainer").style.display = "none";
    }
}
