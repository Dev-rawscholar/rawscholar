// Copyright (c) 2024, Rawscholar dev team and contributors
// For license information, please see license.txt

frappe.ui.form.on("Application", {
	refresh(frm) {
        frm.set_query('university',(doc) =>{
            return {
                filters: {
                    "country": doc.country
                }
            }
        })

        frm.set_query('course',(doc) =>{
            return {
                filters: {
                    "university": doc.university
                }
            }
        })

	},
});
