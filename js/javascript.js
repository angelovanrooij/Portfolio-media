var competitorpdf = "opdrachten/competitoranalysis.pdf";
var visualpdf = "opdrachten/Visual Associations.pdf";
var poster1 = "opdrachten/poster1.pdf";
var button = document.getElementById("")
var enquete = "opdrachten/Google Enquete.pdf"
var taskanalysis = "opdrachten/Task analysis.pdf"
var interview = "opdrachten/Interview.pdf"

function OpenPdf(buttonid) {
    if (buttonid == "1")
        window.open(competitorpdf, "_blank");
    else if (buttonid == "2") {
        window.open(visualpdf, "_blank");
    } else if (buttonid == "3") {
        window.open(poster1, "_blank");
    }
    else if (buttonid == "4") {
        window.open(enquete, "_blank");
    }
    else if (buttonid == "5") {
        window.open(taskanalysis, "_blank");
    }
    else if (buttonid == "6") {
        window.open(interview, "_blank");
    }
}