# RoadPad-App-Template

This is RoadShop´s RoadPad App Template for Developers

## Installation

Download the sourcecode

Install the resource on your server
 
Go to roadpad/public/static/config/config.json, scroll down to AppStore and add this code

```json

{
    "name": "Template App",
    "icon": "/public/img/app/Apps/custom.jpg",
    "default": true,
    "category": "apps",
    "custom_app_id": "TEMPLATE_APP_1",
    "redirect": "custom_app",
    "url": "https://cfx-nui-roadpad-app-template/html/static/index.html",
    "darkmode": true,
    "allowJobs": [],
    "disallowJobs": [],
    "custom_event":
    {
        "active": false,
        "closeWhenOpenApp": false
    }
}

```

## License

[GPL](https://choosealicense.com/licenses/gpl-3.0/)