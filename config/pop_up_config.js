/**
 * Created by mikim on 7/25/16.
 */
var popUpData = {
    currentStep : 0,
    newStep : 0,
    addSingleAttribute : {
        title : "Warning",
        content : "<div>Leaving at this step will delete any unsaved progress for this single attribute.</div><br>" +
                  "<div>Click 'Continue' to leave anyway.</div>",
        noText : "Cancel",
        yesText : "Continue",
        yesFunction : function() {
            $('#addSingleAttribute').modal('hide');
            var section = $("#wizard-p-" + popUpData.currentStep.toString());
            $(section).find("[pop-up]").each(function() {
                $(this).addClass(" leaving");
            });
            // Turn on the HTML class that skips the check for pop-ups, allowing the wizard to step
            var section = $("#wizard-p-" + popUpData.currentStep.toString());
            $(section).addClass("leaving");
            var newStep = "#wizard-t-" + popUpData.newStep.toString();
            $(newStep).click();
        }
    },
    addGroupAttribute : {
        title : "Warning",
        content : "<div>Leaving at this step will delete any unsaved progress for this attribute group.</div><br>" +
        "<div>Click 'Continue' to leave anyway.</div>",
        noText : "Cancel",
        yesText : "Continue",
        yesFunction : function() {
            $('#addGroupAttribute').modal('hide');
            var section = $("#wizard-p-" + popUpData.currentStep.toString());
            $(section).find("[pop-up]").each(function() {
                $(this).addClass(" leaving");
            });
            // Turn on the HTML class that skips the check for pop-ups, allowing the wizard to step
            var section = $("#wizard-p-" + popUpData.currentStep.toString());
            $(section).addClass("leaving");
            var newStep = "#wizard-t-" + popUpData.newStep.toString();
            $(newStep).click();
        }
    },
    invalidChoice : {
        title : "Invalid Choice",
        content : "Please properly select the elements in the choice section.",
        noText: "",
        yesText: "Ok",
        yesFunction : function() {
            $('#invalidChoice').modal('hide');
        }
    },
    // When a user navigates backwards, this pop-up gives a warning that progress will be lost upon changes
    deleteProgress : {
        title : "Warning",
        content : "<div>Making a change to a previous step will delete <b>all</b> progress beyond that point.</div><br>" +
        "<div>You are safe to navigate through the different steps without making any changes, however.</div>",
        noText : "",
        yesText : "Ok",
        yesFunction : function() {
            var wrapper = $("#wizard-p-" + popUpData.currentStep.toString());
            $(wrapper).removeAttr("pop-up");
            $('#deleteProgress').modal('hide');
            $('#deleteProgress').on('hidden.bs.modal', function () {
                $("body .modal.fade.hide").remove();
                $("body .modal-backdrop.fade.in").remove();
            })
        }
    }
};