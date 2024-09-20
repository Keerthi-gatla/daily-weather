[
    {
        "id": "fb5db7b50967e2cc",
        "type": "ui_dropdown",
        "z": "206730fd3ba74447",
        "name": "Country",
        "label": "Country",
        "tooltip": "",
        "place": "Select a country",
        "group": "57e2620cd0c3ed72",
        "order": 1,
        "width": "0",
        "height": "0",
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "United States",
                "value": "United States",
                "type": "str"
            },
            {
                "label": "Canada",
                "value": "Canada",
                "type": "str"
            },
            {
                "label": "Australia",
                "value": "Australia",
                "type": "str"
            },
            {
                "label": "United Kingdom",
                "value": "United Kingdom",
                "type": "str"
            },
            {
                "label": "Germany",
                "value": "Germany",
                "type": "str"
            },
            {
                "label": "France",
                "value": "France",
                "type": "str"
            },
            {
                "label": "Spain",
                "value": "Spain",
                "type": "str"
            },
            {
                "label": "Italy",
                "value": "Italy",
                "type": "str"
            },
            {
                "label": "China",
                "value": "China",
                "type": "str"
            },
            {
                "label": "India",
                "value": "India",
                "type": "str"
            },
            {
                "label": "Japan",
                "value": "Japan",
                "type": "str"
            },
            {
                "label": "Brazil",
                "value": "Brazil",
                "type": "str"
            },
            {
                "label": "Mexico",
                "value": "Mexico",
                "type": "str"
            },
            {
                "label": "South Africa",
                "value": "South Africa",
                "type": "str"
            },
            {
                "label": "Russia",
                "value": "Russia",
                "type": "str"
            },
            {
                "label": "South Korea",
                "value": "South Korea",
                "type": "str"
            },
            {
                "label": "Argentina",
                "value": "Argentina",
                "type": "str"
            },
            {
                "label": "Saudi Arabia",
                "value": "Saudi Arabia",
                "type": "str"
            },
            {
                "label": "Turkey",
                "value": "Turkey",
                "type": "str"
            },
            {
                "label": "Egypt",
                "value": "Egypt",
                "type": "str"
            },
            {
                "label": "Indonesia",
                "value": "Indonesia",
                "type": "str"
            },
            {
                "label": "Vietnam",
                "value": "Vietnam",
                "type": "str"
            },
            {
                "label": "Thailand",
                "value": "Thailand",
                "type": "str"
            },
            {
                "label": "Malaysia",
                "value": "Malaysia",
                "type": "str"
            },
            {
                "label": "Singapore",
                "value": "Singapore",
                "type": "str"
            },
            {
                "label": "New Zealand",
                "value": "New Zealand",
                "type": "str"
            },
            {
                "label": "Philippines",
                "value": "Philippines",
                "type": "str"
            },
            {
                "label": "Bangladesh",
                "value": "Bangladesh",
                "type": "str"
            },
            {
                "label": "Pakistan",
                "value": "Pakistan",
                "type": "str"
            },
            {
                "label": "Sri Lanka",
                "value": "Sri Lanka",
                "type": "str"
            },
            {
                "label": "Kenya",
                "value": "Kenya",
                "type": "str"
            },
            {
                "label": "Nigeria",
                "value": "Nigeria",
                "type": "str"
            },
            {
                "label": "Ghana",
                "value": "Ghana",
                "type": "str"
            },
            {
                "label": "Israel",
                "value": "Israel",
                "type": "str"
            },
            {
                "label": "Jordan",
                "value": "Jordan",
                "type": "str"
            },
            {
                "label": "Lebanon",
                "value": "Lebanon",
                "type": "str"
            },
            {
                "label": "UAE",
                "value": "UAE",
                "type": "str"
            },
            {
                "label": "Qatar",
                "value": "Qatar",
                "type": "str"
            },
            {
                "label": "Kuwait",
                "value": "Kuwait",
                "type": "str"
            },
            {
                "label": "Greece",
                "value": "Greece",
                "type": "str"
            },
            {
                "label": "Netherlands",
                "value": "Netherlands",
                "type": "str"
            },
            {
                "label": "Sweden",
                "value": "Sweden",
                "type": "str"
            },
            {
                "label": "Norway",
                "value": "Norway",
                "type": "str"
            },
            {
                "label": "Denmark",
                "value": "Denmark",
                "type": "str"
            },
            {
                "label": "Finland",
                "value": "Finland",
                "type": "str"
            },
            {
                "label": "Switzerland",
                "value": "Switzerland",
                "type": "str"
            },
            {
                "label": "Belgium",
                "value": "Belgium",
                "type": "str"
            },
            {
                "label": "Ireland",
                "value": "Ireland",
                "type": "str"
            },
            {
                "label": "Portugal",
                "value": "Portugal",
                "type": "str"
            },
            {
                "label": "Chile",
                "value": "Chile",
                "type": "str"
            },
            {
                "label": "Colombia",
                "value": "Colombia",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "country",
        "topicType": "str",
        "className": "",
        "x": 100,
        "y": 140,
        "wires": [
            [
                "e191b145ee085f04"
            ]
        ]
    },
    {
        "id": "e191b145ee085f04",
        "type": "function",
        "z": "206730fd3ba74447",
        "name": "setup ",
        "func": "const apiKey = 'bc451c44e7b0446297991956241709'; \nconst country = msg.payload; \nmsg.url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=no`;\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 240,
        "wires": [
            [
                "cf1392c3cc5d589a"
            ]
        ]
    },
    {
        "id": "cf1392c3cc5d589a",
        "type": "http request",
        "z": "206730fd3ba74447",
        "name": "Weather Data",
        "method": "GET",
        "ret": "obj",
        "paytoqs": "ignore",
        "url": "",
        "tls": "",
        "persist": false,
        "proxy": "",
        "insecureHTTPParser": false,
        "authType": "",
        "senderr": false,
        "headers": [],
        "x": 400,
        "y": 120,
        "wires": [
            [
                "2b1e6382fcd0df47"
            ]
        ]
    },
    {
        "id": "cbed6f30e237f219",
        "type": "ui_text",
        "z": "206730fd3ba74447",
        "group": "57e2620cd0c3ed72",
        "order": 1,
        "width": "0",
        "height": "0",
        "name": "City",
        "label": "City",
        "format": "{{msg.payload.city}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": "",
        "color": "#000000",
        "x": 630,
        "y": 200,
        "wires": []
    },
    {
        "id": "2b1e6382fcd0df47",
        "type": "function",
        "z": "206730fd3ba74447",
        "name": "replacing",
        "func": "const weather = msg.payload.current;\nconst location = msg.payload.location;\nconst current = msg.payload.current;\nconst condition =msg.payload.current;\nmsg.payload = {\n    city:location.name,\n    region:location.region,\n    country:location.country,\n    celsius:current.temp_c,\n    weathercondition:current.condition.text ,\n    weatherbrief:current.condition.text + \",\" + current.temp_c ,\n};\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 460,
        "y": 220,
        "wires": [
            [
                "cbed6f30e237f219",
                "dff7a417e5e032d8"
            ]
        ]
    },
    {
        "id": "dff7a417e5e032d8",
        "type": "ui_template",
        "z": "206730fd3ba74447",
        "group": "57e2620cd0c3ed72",
        "name": "Weather ",
        "order": 2,
        "width": 0,
        "height": 0,
        "format": "<div>\n    <h3>Weather in {{msg.payload.city}}</h3>\n     <h3> weatherbrief :\"{{msg.payload.weatherbrief }} °C\"</h3>\n    <p>region:{{msg.payload.region}} </p>\n    <p>country:{{msg.payload.country}}</p>\n    <p>Temperature: {{msg.payload.celsius}} °C  </p>\n    <p>weathercondition : {{msg.payload.weathercondition}}</p>\n   \n</div>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "className": "",
        "x": 620,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "57e2620cd0c3ed72",
        "type": "ui_group",
        "name": "weather summary",
        "tab": "7",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "7",
        "type": "ui_tab",
        "name": "AN WEATHER SUMMARY",
        "icon": "dashboard",
        "order": 1,
        "disabled": false,
        "hidden": false
    }
]