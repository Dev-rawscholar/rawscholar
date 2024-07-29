# your_app/api.py

import requests
import frappe

def send_whatsapp_message(phone_number):
    url = "https://graph.facebook.com/v20.0/380394668488537/messages"
    headers = {
        'Authorization': 'Bearer EAARWhkW8DFMBO4voM8mrDEZCS1yJ17ZA56mjudeFtWHivWjUqVFhzWaFgItv1DmTTDUbtTEQKq387qvoprwprCYbjdXZCDLZB4tQfNZCjLf29LagKXh0dXg2tcLjKN1wAILen1gLgewR8OxXbLCskkiIsqTGrX9kFMbEpJE5n0PcGpVqOcxbAE1vHPyIpNpdrVkRSmL1C2C2zPeYyuKwZD',
        'Content-Type': 'application/json'
    }
    payload = {
        "messaging_product": "whatsapp",
        "to": phone_number,
        "type": "template",
        "template": {
            "name": "hello_world",
            "language": {
                "code": "en_US"
            }
        }
    }

    response = requests.post(url, json=payload, headers=headers)
    if response.status_code == 200:
        frappe.msgprint("WhatsApp message sent successfully.")
    else:
        frappe.throw("Failed to send WhatsApp message. Error: " + response.text)

def send_welcome_message(doc, method):
    # doc is the document object
    phone_number = doc.phone
    send_whatsapp_message(phone_number)
